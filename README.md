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

Locally, use the bundled server — **not** `python -m http.server`, which does not
support HTTP Range requests, so an `<audio>` element reports a seekable range of 0-0
and the scrub bar cannot be dragged:

```bash
node build.mjs          # build first
python serve.py         # serves ./dist on http://127.0.0.1:8080
```

`serve.py` is stdlib-only and handles GET/HEAD plus single-range requests, so
scrubbing works offline. GitHub Pages also supports ranges, so the hosted copy is fine.

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

---

## Audio (added from the real sound file)

`assets/audio/` holds ten clips cut from the authentic
`0511_w25_sf_21` sound file (57 min). Boundaries were found by running
`faster-whisper` over the whole recording, then cross-checked against the official
transcript — so each clip starts on an announcement and ends in a pause, never mid-word.

| clip | length | attached to |
|---|---|---|
| `ex1_q1` | 1:25 | Question 1 (announcement + both plays) |
| `ex2_intro` | 0:33 | Ex 2 instructions — demonstrates the 15-second reading pause |
| `ex2_videos` | 2:05 | Questions 9–10 |
| `ex2_cafe` | 1:51 | Questions 13–14 |
| `ex3_intro` | 0:54 | Ex 3 instructions — demonstrates the 40-second reading pause |
| `ex3_sharks` | 1:52 | Questions 19–21 |
| `ex4_intro` | 1:55 | Ex 4 instructions + statements A–H + the 30-second pause |
| `ex4_speakers12` | 1:20 | Speakers 1 and 2 |
| `ex5_intro` | 0:27 | Ex 5 instructions — demonstrates the 45-second reading pause |
| `ex5_q33_34` | 1:55 | Questions 33–34 |

Encoded 22 050 Hz mono MP3 at 48 kbps — 4.9 MB in total, ample for speech.
In the deck each clip is a full media control: click the button to play, **click or
drag anywhere on the progress bar to scrub** (a knob appears on hover and while dragging),
and use left/right arrows on the bar to nudge ±5 s. Starting one clip stops any other,
and changing slide stops playback.

Scripts: `ref/transcribe.py` (ASR over the whole recording), `ref/align.py`
(section map), `ref/cut_clips.py` (the cut list at the top is the single source of
truth for clip boundaries — edit there and re-run).

`node build.mjs` copies the clips to `dist/audio/` and the repo-root `audio/` and
references them relatively. Run `INLINE_AUDIO=1 node build.mjs` for a genuine
single-file build with the audio base64-embedded instead.

### Copyright — please read

The deck reproduces **Cambridge question paper artwork and Cambridge listening
audio**. The syllabus permits centres to copy its material *for internal use*, which
covers teaching with it in class. It does **not** cover redistributing it publicly.

Mitigations in place:

- `noindex, nofollow, noarchive` on the page and a `robots.txt` that disallows all
  crawlers, including AI training crawlers — so it is a shared link, not a search result.
- If you would rather it were not on the public internet at all, delete the GitHub Pages
  site (Settings ▸ Pages ▸ Unpublish) and present from the local folder. Everything works
  offline: `python -m http.server` in `dist/`, or open `index.html` directly.

Recommended long-term: keep the hosted version for the deck's own text and keep the
Cambridge material in the local copy you use in class.
