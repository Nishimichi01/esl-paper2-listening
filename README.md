# Paper 2 — Listening · Answering Techniques Workshop

A 41-slide, self-contained presentation for a **two-hour** Year 10 workshop on
**Cambridge IGCSE English as a Second Language 0511 — Component 2 / Paper 2: Listening**.
Built for **Falih Junior International Academy**.

Every question, picture, option and audio script in the deck comes from the real
**0511/21 Paper 2 Listening, October/November 2025** paper (question paper, mark scheme
and transcript), which is in `ref/`.

## Design

- **Colours from the school logo:** orange `#EC671A` + navy `#1B1D3E` on a warm off-white.
- **Type:** Baloo 2 (headings) + Nunito (body), both embedded — minimum body text is ~19px on a 1280×720 canvas.
- **Fixed 1280×720 design canvas**, scaled to fit any screen, so text size is predictable on a projector.
- Light theme, large type, short slides — written for 16-year-olds, not for a boardroom.

## Contents (41 slides)

| Part | Slides | |
|---|---|---|
| Welcome | 1–4 | what the paper is, 40 questions, L1–L4, where the marks are |
| The method | 5–9 | five-exercise map, **T.A.C.O.**, two hearings, **the real reading pauses** |
| Exercise by exercise | 10–30 | Ex 1–5: what it looks like → technique → **real question** → **real transcript** → traps |
| Using the transcript | 31–34 | why review beats volume, how to read a transcript, the 4-step review drill |
| Exam craft | 35–40 | the 6-minute transfer, 8 common mistakes, a 4-week plan, self-check |
| Close | 41 | six things to remember |

## Controls

`← →` navigate · **`R`** reveal the answer on a "you decide" slide · **`N`** speaker notes
(every slide has teacher notes) · **`G`** overview grid · **`F`** fullscreen · **`P`** print/PDF.
Click any exam-paper image to zoom it. Deep links work: append `#q1-decide` etc.

## Running it

It is **one HTML file with zero external requests** — fonts and all 11 exam-paper crops are
embedded. Open the hosted URL, or download `index.html` and open it offline (works from a USB stick).

Locally: `python -m http.server 8779` in `dist/`, then open `http://127.0.0.1:8779/`.

## Rebuilding

```bash
node build.mjs      # writes dist/index.html and index.html
```

- `content/1-open.mjs`, `2-exercises.mjs`, `3-transcript.mjs`, `4-craft.mjs` — the slide content.
  Slide objects take `id`, `kind` (`hero` / `sect` / `close`), `kicker`, `title`, `sub`, `body`, `notes`, and optional `reveal`.
- Exam-paper images are referenced in `body` as `__IMG:name__` and inlined by the build from `assets/img/qp/`.
- `ref/w25/` holds the extracted text of the question paper, mark scheme and transcript.
- To re-crop a question, run the crop script logic against `assets/img/qp` (200 dpi, auto-trimmed to content, grayscale JPEG).
- A clipping check is worth running after any content change: every `.body` must satisfy
  `scrollHeight <= clientHeight`. The canvas hides overflow, so clipped content is otherwise silent.

## Mark scheme answers used in the deck

Q1 **A** · Q9 **A** · Q10 **C** · Q13 **C** · Q14 **B** · Q19 **A** · Q20 **A** · Q21 **C** ·
Q27 **E** · Q28 **C** · Q33 **C** · Q34 **B**
