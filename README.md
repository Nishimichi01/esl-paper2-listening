# ESL Answering Techniques Workshop — Paper 2: Listening

A 59-slide, self-contained presentation deck for a Year 10 workshop on **Cambridge IGCSE English as a Second Language 0511 (Count-in Speaking), Component 2 / Paper 2 — Listening**, syllabus for examinations in **2027, 2028 and 2029**.

## What it is

A teacher-led, step-by-step answering-techniques workshop. It assumes the syllabus has been taught and that students are CEFR **B2-high to C1**, so it does not shy away from language difficulty — but it adds no new grammar or topics. It converts what students already know into marks on a multiple-choice answer sheet.

**Contents (59 slides, in 4 parts):**

| Part | Slides | Focus |
|---|---|---|
| 1 | 1–12 | Orientation: assessment overview, the four listening objectives (L1–L4), anatomy of the paper, the T.A.C.O. method, the two-hearings split, the pre-listening scan |
| 2 | 13–39 | Exercise by exercise (1 → 5): anatomy, technique, traps, and a worked example with a reveal-able answer |
| 3 | 40–47 | Cross-cutting skills: the nine distractor types, three levels of listening breakdown, paraphrase, numbers and prices, connected speech, signposting, tone, the inference ladder |
| 4 | 48–59 | Exam craft: attention allocation, the 6-minute transfer protocol, twelve avoidable mistakes, a four-week plan, a drill menu, a metacognitive review cycle, self-assessment, exam-day checklist, key takeaways |

## Presentation controls

| Key | Action |
|---|---|
| `→` `space` `PgDn` | Next slide |
| `←` `PgUp` | Previous slide |
| `R` | Reveal the answers on a worked-example slide |
| `N` | Toggle speaker notes (every slide has delivery notes with timings) |
| `G` | Overview grid — click any slide to jump |
| `F` | Fullscreen |
| `P` | Print / export to PDF |
| `Home` `End` | First / last slide |
| `Esc` | Close overlay |

Deep links work too: append `#slide-id` (e.g. `#e2-paraphrase`) to jump straight to a slide.

Clicking the right two-thirds of the stage advances; clicking the left third goes back. On a slide with hidden answers, the first click reveals them instead of advancing.

## Running it

The published deck is a **single HTML file with no external requests** — fonts are embedded as base64, so it works offline. To present it, either open the hosted URL, or download `index.html` and open it directly in any browser.

To serve it locally:

```bash
python -m http.server 8777     # then open http://127.0.0.1:8777/
```

## Rebuilding

Source lives in `content/` (one module per part) and `src/` (CSS + JS). `build.mjs` inlines everything into a single file.

```bash
node build.mjs
```

That writes `dist/index.html` and the published root `index.html`.

- `content/slides.mjs` assembles the deck and resolves `{{slide-id}}` roadmap tokens on the section dividers to real slide numbers.
- Slide objects accept: `id`, `kind` (`hero` / `section` / `close` / default), `kicker`, `title`, `sub`, `body` (HTML), `notes`, plus `dense` (tighter spacing), `reveal` (hide answers until `R`) and `exBadge`.
- `src/deck.js` includes an auto-fit pass: any slide taller than the stage is scaled down (min 0.66×) so content is never clipped. It is scale 1.0 at 1920×1080 and at most 0.90× at 1280×720.

## Source of the specification

All specification facts are taken from the official Cambridge syllabus PDF:

> Cambridge IGCSE English as a Second Language 0511 (Count-in Speaking) — syllabus for examinations in 2027, 2028 and 2029, version 1, published September 2024 (document `721343-2027-2029-syllabus.pdf`), Section 4 "Details of the assessment", Component 2 — Listening.

Verified facts used throughout: five exercises · 40 multiple-choice questions · 40 marks · approximately 50 minutes including 6 minutes' transfer time · candidates hear each recorded text twice · answers transferred to a separate answer sheet · no dictionary · objectives L1 (specific information), L2 (ideas/opinions/attitudes), L3 (connections between ideas), L4 (implied meaning) · Exercise 1 = 8 short extracts with four visual options; Exercise 2 = 5 extracts × 2 three-option MCQs; Exercise 3 = one monologue, 8 three-option sentence completions; Exercise 4 = 6 monologues matched to 8 statements; Exercise 5 = one interview, 8 three-option MCQs on the main speaker.

## Honest caveats (please read before teaching)

- **The audio scripts, questions and option sets in the worked examples are teaching constructions.** They were written to isolate specific trap mechanisms, and they are pedagogically accurate — but they are *not* Cambridge materials and will not appear in a live paper. Use the official specimen and past papers for authentic practice.
- **Per-exercise audio timings are not published**, so the deck describes relative attention cost rather than a timetable. The syllabus specifies only "approximately 50 minutes".
- **Exercise 4 marking logic:** the syllabus says candidates select from eight statements for six extracts but does not state reuse rules on the page consulted. The deck teaches "assume each statement is used at most once, and read the rubric on the day" rather than asserting a rule.
- **The "one literal, one interpretive" pattern in Exercise 2** is presented as a strong tendency, **not** a published design rule.
- **Research citations** are to the listening-assessment literature (Buck 2001; Field 2003, 2004, 2008; Goh 2000; Vandergrift & Tafaghodtari 2010; Graham & Macaro 2008; Renandya & Farrell 2011; Ginther 2002; Nissan et al. 1995; Freedle & Kostin 1996). The number-trap typology and drill session timings are practitioner-standard rather than item-validated, and the deck says so on the slides where it matters.

## Credits

Design language and interaction model inspired by the beeWork presentation deck at `work.beesuite.app/deck`. Typeface: Plus Jakarta Sans (SIL Open Font License), embedded.
