# Folgen – Begriffe und Definitionen

> **Quelle:** `Mathematik/Folgen.flashcards` · [[../Index|← Übersicht]]

---

## Grundbegriffe

| Begriff | Definition |
|---------|-----------|
| **Folge** | Geordnete Liste von Zahlen, deren Glieder durch natürliche Zahlen nummeriert sind (a₁, a₂, a₃, … oder (aₙ)) |
| **Folgenglied** | Einzelner Wert einer Folge (Bezeichnung: aₙ) |
| **Index** | Nummer eines Folgenglieds (das n in aₙ) |
| **Bildungsgesetz** | Vorschrift, mit der die Folgenglieder bestimmt werden (z. B. aₙ = 2n + 1) |
| **Anfangsglied** | Erstes angegebenes Glied einer Folge (meist a₁ oder a₀) |
| **Nachfolgeglied** | Das auf aₙ folgende Glied (Bezeichnung: aₙ₊₁) |

---

## Darstellungsformen

| Begriff | Definition |
|---------|-----------|
| **Explizite Darstellung** | Das n-te Folgenglied wird direkt in Abhängigkeit von n angegeben (aₙ = f(n)) |
| **Rekursive Darstellung** | Ein Folgenglied wird aus vorherigen Gliedern berechnet (aₙ₊₁ = f(aₙ)) |
| **Rekursive Folge** | Folge, die durch Anfangsglied und Rekursionsvorschrift festgelegt ist (a₁ gegeben, aₙ₊₁ = f(aₙ)) |
| **Iteration** | Wiederholte Anwendung derselben Rechenvorschrift (xₙ₊₁ = f(xₙ)) |

---

## Arten von Folgen

| Begriff | Definition |
|---------|-----------|
| **Endliche Folge** | Folge mit endlich vielen Gliedern (a₁, …, aₖ) |
| **Unendliche Folge** | Folge mit unendlich vielen Gliedern ((aₙ) mit n ∈ ℕ) |
| **Zahlenfolge** | Folge, deren Glieder reelle Zahlen sind (aₙ ∈ ℝ) |
| **Arithmetische Folge** | Folge mit konstanter Differenz zweier benachbarter Glieder (aₙ = a₁ + (n−1)·d) |
| **Geometrische Folge** | Folge mit konstantem Quotienten zweier benachbarter Glieder (aₙ = a₁ · qⁿ⁻¹) |
| **Alternierende Folge** | Folge, deren Vorzeichen regelmäßig wechseln (z. B. aₙ = (−1)ⁿ · bₙ) |

---

## Differenz und Quotient

| Begriff | Definition |
|---------|-----------|
| **Differenz** (arithmetisch) | Abstand zweier benachbarter Glieder: d = aₙ₊₁ − aₙ |
| **Quotient** (geometrisch) | Verhältnis zweier benachbarter Glieder: q = aₙ₊₁ / aₙ (falls aₙ ≠ 0) |

---

## Monotonie

| Begriff | Definition |
|---------|-----------|
| **Monotonie** | Beschreibung, ob eine Folge steigt oder fällt (Vergleich von aₙ₊₁ mit aₙ) |
| **Monoton steigend** | Jedes Nachfolgeglied ist mindestens so groß wie das vorherige (aₙ₊₁ ≥ aₙ) |
| **Monoton fallend** | Jedes Nachfolgeglied ist höchstens so groß wie das vorherige (aₙ₊₁ ≤ aₙ) |
| **Streng monoton steigend** | Jedes Nachfolgeglied ist größer als das vorherige (aₙ₊₁ > aₙ) |
| **Streng monoton fallend** | Jedes Nachfolgeglied ist kleiner als das vorherige (aₙ₊₁ < aₙ) |

---

## Beschränktheit

| Begriff | Definition |
|---------|-----------|
| **Beschränkte Folge** | Alle Folgenglieder liegen zwischen einer unteren und einer oberen Schranke (m ≤ aₙ ≤ M) |
| **Obere Schranke** | Zahl, die von keinem Folgenglied überschritten wird (aₙ ≤ M für alle n) |
| **Untere Schranke** | Zahl, die von keinem Folgenglied unterschritten wird (m ≤ aₙ für alle n) |

---

## Grenzwert und Konvergenz

| Begriff | Definition |
|---------|-----------|
| **Grenzwert** | Zahl, der sich die Folgenglieder für große n beliebig annähern: lim(n→∞) aₙ = a |
| **Konvergenz** | Folge besitzt einen endlichen Grenzwert (aₙ → a) |
| **Divergenz** | Folge besitzt keinen endlichen Grenzwert |
| **Nullfolge** | Folge, deren Grenzwert 0 ist: lim(n→∞) aₙ = 0 |
| **Häufungswert** | Wert, dem sich unendlich viele Folgenglieder beliebig annähern (Teilfolge aₙₖ → h) |

---

## Kriterien

| Kriterium | Aussage |
|-----------|---------|
| **ε-Kriterium** | Zu jedem ε > 0 gibt es ein N, sodass für alle n ≥ N gilt: \|aₙ − a\| < ε |
| **Monotoniekriterium** | Jede **monotone + beschränkte** Folge ist konvergent |
