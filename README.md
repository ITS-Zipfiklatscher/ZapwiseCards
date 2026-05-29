# ZapwiseCards

Study content for [Zapwise](https://github.com/TiefenbacherC/Zapwise) — flashcard and exam files organised by subject.

---

## Subjects

| Folder | Files | Cards |
|--------|-------|-------|
| `Mathematik/` | Folgen.flashcards · Folgen.exam · Reihen.flashcards | ~100 cards, 1 exam |
| `IoT/` | flashcards_iot_sensortechnik.flashcards | ~108 cards |

---

## Using with Zapwise

1. Open Zapwise → **Manage** → **+ Import** → **GitHub**
2. Enter `TiefenbacherC/ZapwiseCards`
3. All decks and exams load automatically

Or clone locally and use **+ Import → Local folder**.

---

## Flashcard Format (`.flashcards`)

One card per line. Arrow = study direction:

```
# Section header

Question => Answer          forward
Question <= Answer          reverse
Question <> Answer          bidirectional (recommended for definitions)
```

- `#` lines = section headers
- Blank lines ignored
- Progress is tied to card content — renaming files doesn't reset it

### Example
```
# Grundbegriffe

Folge => Geordnete Liste von Zahlen (a₁, a₂, a₃, …)
Grenzwert <> Wert, dem sich aₙ für n→∞ beliebig annähert
Konvergenz <= Folge besitzt einen endlichen Grenzwert
```

---

## Exam Format (`.exam`)

Questions only — **no model answers**. AI in Zapwise grades the answers automatically.

```
# Exam Title

? Question text
  Continuation line if needed. [points]

? Another question [points]
```

- `[n]` = point value (optional)
- Multi-part: write sub-parts `a) b) c)` as continuation lines under one `?`
- Blank lines ignored

### Example
```
# Klausur: Folgen und Grenzwerte

? Erkläre den Unterschied zwischen expliziter und rekursiver Darstellung.
  Gib für jede Form ein Beispiel. [6]

? Gegeben: aₙ = (2n−1)/(n+3). Bestimme lim(n→∞) aₙ. [5]
```

---

## Browsing Content

Open the `Obsidian/` folder as a vault in [Obsidian](https://obsidian.md) to browse all cards as readable markdown overviews.

---

## Adding New Content

1. Create a folder for the subject (e.g. `Physik/`)
2. Add `.flashcards` files — one file per topic
3. Add `.exam` files for practice exams (no answers!)
4. Push to GitHub — Zapwise picks up the update automatically

See [CLAUDE.md](CLAUDE.md) for the complete format specification.
