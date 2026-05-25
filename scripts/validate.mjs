#!/usr/bin/env node
/**
 * validate.mjs — Validates all .flashcards files in the repo.
 *
 * Rules:
 *   - Each non-empty, non-comment line must contain exactly one separator
 *   - Valid separators: " => ", " <= ", " <> "
 *   - Question and answer parts must be non-empty after trimming
 *   - Lines starting with # are comments (ignored)
 *   - Blank lines are ignored
 *
 * Exit 0 → all valid
 * Exit 1 → validation errors found
 */

import { readFileSync, readdirSync, statSync } from 'fs'
import { join, extname, relative } from 'path'

const SEPARATORS = [' <> ', ' => ', ' <= ']
const SKIP_DIRS = new Set(['.git', '.github', 'scripts', 'node_modules'])

// ── File discovery ────────────────────────────────────────────────────────────

function findFlashcardFiles(dir) {
  const results = []
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      results.push(...findFlashcardFiles(full))
    } else if (extname(entry) === '.flashcards') {
      results.push(full)
    }
  }
  return results.sort()
}

// ── Validation ────────────────────────────────────────────────────────────────

function validateFile(filePath) {
  const errors = []
  const content = readFileSync(filePath, 'utf8')
  const lines = content.split('\n')

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line || line.startsWith('#')) continue

    const sep = SEPARATORS.find(s => line.includes(s))
    if (!sep) {
      errors.push({ line: i + 1, text: line, reason: 'No valid separator ( => | <= | <> )' })
      continue
    }

    const idx = line.indexOf(sep)
    const question = line.slice(0, idx).trim()
    const answer = line.slice(idx + sep.length).trim()

    if (!question) {
      errors.push({ line: i + 1, text: line, reason: 'Question is empty' })
    }
    if (!answer) {
      errors.push({ line: i + 1, text: line, reason: 'Answer is empty' })
    }
  }

  return errors
}

// ── Count cards ───────────────────────────────────────────────────────────────

function countCards(filePath) {
  const content = readFileSync(filePath, 'utf8')
  return content.split('\n').filter(line => {
    const trimmed = line.trim()
    return trimmed && !trimmed.startsWith('#') && SEPARATORS.some(s => trimmed.includes(s))
  }).length
}

// ── Main ──────────────────────────────────────────────────────────────────────

const rootDir = process.cwd()
const files = findFlashcardFiles(rootDir)

if (files.length === 0) {
  console.error('❌ No .flashcards files found!')
  process.exit(1)
}

let totalErrors = 0
let totalCards = 0

console.log(`\n⚡ Zapwise Flashcard Validator`)
console.log(`   ${files.length} file(s) found\n`)

for (const file of files) {
  const rel = relative(rootDir, file)
  const errors = validateFile(file)
  const cardCount = countCards(file)
  totalCards += cardCount

  if (errors.length === 0) {
    console.log(`✅ ${rel}  (${cardCount} cards)`)
  } else {
    console.log(`❌ ${rel}  (${errors.length} error(s))`)
    for (const { line, text, reason } of errors) {
      console.error(`     Line ${line}: ${reason}`)
      console.error(`     → "${text}"`)
    }
    totalErrors += errors.length
  }
}

console.log(`\n   Total: ${totalCards} cards in ${files.length} file(s)`)

if (totalErrors > 0) {
  console.error(`\n❌ ${totalErrors} validation error(s) found. Pipeline stopped.\n`)
  process.exit(1)
} else {
  console.log(`\n✅ All flashcards are valid!\n`)
  // Output card count for version detection
  console.log(`CARD_COUNT=${totalCards}`)
}
