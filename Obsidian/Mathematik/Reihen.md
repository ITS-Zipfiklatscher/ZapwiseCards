# Reihen – Begriffe, Konvergenzkriterien und logische Grundbegriffe

> **Quelle:** `Mathematik/Reihen.flashcards` · [[../Index|← Übersicht]]

---

## Grundbegriffe

| Begriff | Definition |
|---------|-----------|
| **Reihe** | Summe der Glieder einer Folge (Σ aₙ, n=1 bis ∞) |
| **Partialsumme** | Endliche Summe der ersten k Reihenglieder: sₖ = a₁ + a₂ + … + aₖ |
| **Partialsummenfolge** | Folge der endlichen Teilsummen einer Reihe ((sₖ)) |
| **Summe einer Reihe** | Grenzwert der Partialsummen, falls er existiert: S = lim(k→∞) sₖ |
| **Summenzeichen** | Symbol für eine Summe: Σ |
| **Laufindex** | Variable, die beim Summieren die einzelnen Werte durchläuft (n in Σ aₙ) |
| **Untere Summationsgrenze** | Startwert des Laufindex |
| **Obere Summationsgrenze** | Endwert des Laufindex bei endlichen Summen |

---

## Arten von Reihen

| Reihe | Definition |
|-------|-----------|
| **Endliche Reihe** | Summe endlich vieler Folgenglieder |
| **Unendliche Reihe** | Summe unendlich vieler Folgenglieder (über Partialsummen) |
| **Arithmetische Reihe** | Summe der Glieder einer arithmetischen Folge: Σ aₙ = k/2 · (a₁ + aₖ) |
| **Geometrische Reihe** | Summe der Glieder einer geometrischen Folge |
| **Alternierende Reihe** | Reihe mit regelmäßig wechselnden Vorzeichen: Σ (−1)ⁿ · bₙ |
| **Harmonische Reihe** | Σ 1/n — **divergiert** |
| **Dirichletreihe** | Σ 1/nˢ — konvergiert für s > 1, divergiert für s ≤ 1 |
| **Potenzreihe** | Σ aₙ · (x − x₀)ⁿ |
| **Taylorreihe** | Potenzreihe aus Ableitungen: f(x) = Σ f⁽ⁿ⁾(x₀)/n! · (x−x₀)ⁿ |
| **Fourierreihe** | Darstellung periodischer Funktionen durch Sinus- und Kosinusanteile |

---

## Konvergenz und Divergenz

| Begriff | Definition |
|---------|-----------|
| **Konvergente Reihe** | Partialsummenfolge besitzt einen endlichen Grenzwert: lim(k→∞) sₖ = S |
| **Divergente Reihe** | Partialsummenfolge besitzt keinen endlichen Grenzwert |
| **Konvergenzradius** | Radius des Intervalls um x₀, in dem eine Potenzreihe konvergiert (Konvergenz für \|x − x₀\| < R) |

---

## Formeln

| Formel | Aussage |
|--------|---------|
| **Geometrische Summenformel** | Σ(n=0..k) a₀·qⁿ = a₀ · (1−q^(k+1))/(1−q) für q ≠ 1 |
| **Unendliche geometrische Reihe** | Σ(n=0..∞) a₀·qⁿ = a₀/(1−q) für \|q\| < 1 |

---

## Konvergenzkriterien

| Kriterium | Aussage |
|-----------|---------|
| **Nullfolgenkriterium** | Wenn lim(n→∞) aₙ ≠ 0 → Σaₙ **divergiert** (notwendige Bedingung für Konvergenz) |
| **Majorantenkriterium** | 0 ≤ aₙ ≤ bₙ und Σbₙ konvergent ⟹ Σaₙ **konvergiert** |
| **Minorantenkriterium** | 0 ≤ bₙ ≤ aₙ und Σbₙ divergent ⟹ Σaₙ **divergiert** |
| **Quotientenkriterium** | q = lim\|aₙ₊₁/aₙ\|: q < 1 → konvergent · q > 1 → divergent · q = 1 → keine Aussage |

---

## Logische Begriffe bei Kriterien

| Begriff | Bedeutung | Beispiel |
|---------|-----------|---------|
| **Notwendige Bedingung** | Muss erfüllt sein, damit die Aussage wahr sein kann | Konvergenz ⟹ Glieder bilden Nullfolge |
| **Hinreichende Bedingung** | Aus ihr folgt sicher, dass die Aussage wahr ist | Monoton + beschränkt ⟹ konvergiert |
| **Notwendig und hinreichend** | A ⟺ B | — |
| **Notwendig, aber nicht hinreichend** | Muss erfüllt sein, reicht aber allein nicht aus | Nullfolgenkriterium: lim aₙ = 0 reicht nicht |
| **Hinreichend, aber nicht notwendig** | Beweist die Aussage, aber nicht die einzige Möglichkeit | Manche Konvergenzkriterien |
| **Keine Aussage möglich** | Kriterium liefert weder Konvergenz noch Divergenz | Quotientenkriterium bei q = 1 |
| **Gegenbeispiel** | Zeigt, dass eine allgemeine Aussage falsch ist | Harmonische Reihe: lim aₙ = 0, trotzdem divergent |
