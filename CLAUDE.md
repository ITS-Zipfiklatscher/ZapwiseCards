# ZapwiseCards — Claude Code Guide

This repo contains the **study content** for Zapwise: `.flashcards` and `.exam` files organised by subject.
The Zapwise app (github.com/TiefenbacherC/Zapwise) loads files from this repo.

---

## Folder Structure

```
ZapwiseCards/
├── Mathematik/
│   ├── Folgen.flashcards
│   ├── Folgen.exam
│   └── Reihen.flashcards
├── IoT/
│   └── flashcards_iot_sensortechnik.flashcards
└── Obsidian/          ← Obsidian vault for browsing content
```

**Convention:** one folder per subject. File names describe the topic, no spaces (use CamelCase or underscores).

---

## `.flashcards` File Format

### One card per line. Arrow indicates study direction:

| Syntax | Direction |
|--------|-----------|
| `Question => Answer` | Forward — question shown, answer revealed |
| `Question <= Answer` | Reverse — answer shown, question revealed |
| `Question <> Answer` | Bidirectional — random direction each session |

### Rules
- **Blank lines** are ignored
- Lines starting with `#` are **section headers** (displayed in Zapwise) or comments
- Separators must be surrounded by spaces: ` => ` / ` <= ` / ` <> `
- Detection order: `<>` before `=>` before `<=` (first match wins)
- Encoding: **UTF-8** — umlauts, subscripts, math symbols fully supported
- Progress is tied to the **content** of question + answer (card hash). Renaming files or moving folders does NOT reset progress. Editing the text of a card resets its progress — intentional.

### Example
```
# Grundbegriffe

Folge => Geordnete Liste von Zahlen (a₁, a₂, a₃, …)
Grenzwert <> Wert, dem sich aₙ für n→∞ beliebig annähert
Konvergenz <= Folge besitzt einen endlichen Grenzwert

# Formeln

Geometrische Summenformel => Σ(n=0..k) a₀·qⁿ = a₀·(1−q^(k+1))/(1−q)
```

---

## `.exam` File Format

### ⚠️ CRITICAL RULE: NO MODEL ANSWERS

`.exam` files contain only **questions and point values**.
Answers are provided and graded by the AI agent in Zapwise — never include model answers in these files.

### Structure

```
# Exam Title

? Question line one
  Continuation line (indented or not — any non-blank line without ? extends the question)
  More continuation if needed. [points]

? Single-line question [points]

? Question without points (AI gives feedback only, no score)
```

### Token Rules

| Token | Meaning |
|-------|---------|
| `# Title` | Optional title. First `#` line in the file wins. If absent, title = filename |
| `? text` | Starts a new question |
| Non-`?` non-blank line | Continuation of the current question |
| `[n]` at end of last line | Point value (integer). Stripped from display text |
| Blank lines | Ignored — can be used freely for readability |

### Rules
- Point values are **optional** — questions without `[n]` receive AI feedback but no numeric score
- Multi-part questions: write all sub-parts as continuation lines under one `?`
- `totalPoints` in the app = sum of all `[n]` values in the file
- Question IDs are stable: `"relativePath::index"` (0-based)

### Example
```
# Klausur: Folgen und Grenzwerte

? Erkläre den Unterschied zwischen expliziter und rekursiver Darstellung.
  Gib für jede Form ein Beispiel. [6]

? Gegeben: aₙ = (2n−1)/(n+3)
  a) Berechne a₁, a₂, a₃, a₄.
  b) Bestimme lim(n→∞) aₙ. [8]

? Was ist eine Nullfolge? [3]
```

---

## Conventions for New Content

1. **Group by subject** — one folder per course/topic
2. **One concept per card** — short, precise question and answer
3. **Use `<>`** for vocabulary/definitions (bidirectional is more efficient)
4. **Use `=>`** for asymmetric knowledge (formula → name, not the reverse)
5. **Section headers (`#`)** group related cards within a file
6. **Exam files** — one `.exam` per exam/Klausur; file name = exam topic
7. **Never add answers to `.exam` files** — the AI grades them

---

## Obsidian Vault

`Obsidian/` is an Obsidian vault with readable overviews of all flashcard content.
Open it with Obsidian → File → Open Vault → select `Obsidian/`.

The markdown files in `Obsidian/` are **read-only overviews** — the source of truth is always the `.flashcards` file.
