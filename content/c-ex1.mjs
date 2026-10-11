/* ═══ PART C — EXERCISE 1 (slides 12–16) ═══ */

export const c = [
  /* ── 12 ──────────────────────────────────────────── */
  {
    id: 'e1-anatomy',
    kicker: 'Exercise 1',
    title: 'Eight short extracts, one picture question each',
    sub: 'The friendliest exercise on the paper. Fast, concrete, and worth eight marks — but the pictures are doing more work than students realise.',
    exBadge: '<div class="ex-badge"><span class="ens">1</span>Exercise 1 · 8 marks <span class="ao">SKILLS L1 · L2 · L3</span></div>',
    body: `
      <div class="stats">
        <div class="stat"><div class="k">Extracts</div><div class="v">8 <small>short</small></div></div>
        <div class="stat"><div class="k">Questions</div><div class="v">1 <small>per extract</small></div></div>
        <div class="stat"><div class="k">Options</div><div class="v">4 <small>A–D, pictures</small></div></div>
        <div class="stat"><div class="k">Marks</div><div class="v">8 <small>1 each</small></div></div>
      </div>
      <div class="s-grid s-grid--3 mt-14">
        <div class="s-card"><h3><span class="ico">🎙️</span>What you hear</h3>
          <p>A <b>range of text types</b>: recorded messages, announcements, news items, extracts from radio programmes, conversations, monologues and dialogues. On familiar, accessible topics.</p></div>
        <div class="s-card"><h3><span class="ico">🖼️</span>What you see</h3>
          <p>One question with <b>four visual options</b>. The answer is almost always a <b>concrete fact</b> — a time, a place, an object, an activity, a weather condition, a person's role.</p></div>
        <div class="s-card"><h3><span class="ico">⏱️</span>How it feels</h3>
          <p>Each extract is <b>short</b> and played twice with a pause between. The whole exercise moves quickly — you get roughly 30–40 seconds of decision time per question.</p></div>
      </div>
      <div class="callout info mt-14"><b>The design logic:</b> because the options are pictures, the paper cannot test subtle wording — it tests whether you can <b>map one concrete sentence onto one image</b>. That makes this the exercise where a well-prepared student should score <b>7 or 8 out of 8</b>. Treat anything less as a technique problem, not a vocabulary problem.</div>`,
    notes:
      '<span class="ntime">3 min</span>Open with the target: <b>you should be aiming for 7–8 out of 8 here.</b> Say why: picture options cannot test fine wording, so the task reduces to mapping one concrete statement onto one image. If a strong B2/C1 student is losing 3 marks in Exercise 1, the problem is process, not English. ' +
      'Syllabus detail to state: Exercise 1 tests objectives <b>L1, L2 and L3</b> — note that L4 (implied meaning) is <b>absent</b> from this exercise. That is a genuine, examinable fact about the paper, and it means your job here is precision, not inference. ' +
      'Text types come straight from the syllabus: conversations, recorded messages, announcements, news items, extracts from radio programmes — "monologues and dialogues", on familiar and accessible topics. The question "tests understanding of information or ideas expressed by the speaker(s)". ' +
      'Practical point: because each extract is short, hesitation is expensive. Teach them that Exercise 1 is a rhythm exercise — commit and move.',
  },

  /* ── 13 ──────────────────────────────────────────── */
  {
    id: 'e1-pictures',
    kicker: 'Exercise 1 — technique',
    title: 'Read the pictures like a detective, not a tourist',
    sub: 'Four images that look unrelated are actually four versions of the same decision. Your job is to find the exact thing that separates them.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div class="s-steps">
          <div class="s-step"><span class="sn">1</span><div class="sbody"><span class="st">Name each picture in one word</span>
            <span class="sd">Force a label: <em>“clock”, “bus”, “umbrella”, “guitar”</em>. Naming stops the picture from being decoration and turns it into data.</span></div></div>
          <div class="s-step"><span class="sn">2</span><div class="sbody"><span class="st">Find the axis of difference</span>
            <span class="sd">Ask: <b>what single dimension changes across A, B, C, D?</b> Time? Place? Activity? Quantity? That dimension <em>is</em> the question.</span></div></div>
          <div class="s-step"><span class="sn">3</span><div class="sbody"><span class="st">Predict the words for that axis</span>
            <span class="sd">If the axis is time: <em>o'clock, half past, quarter to, delayed, brought forward, in the morning</em>. Pre-load the vocabulary so the audio confirms rather than surprises.</span></div></div>
          <div class="s-step"><span class="sn">4</span><div class="sbody"><span class="st">Watch for the pair that look identical</span>
            <span class="sd">When two options are near-duplicates — 9:00 and 9:30, or “library” and “bookshop” — the answer is <b>one of those two</b>. That is where Cambridge places the discrimination.</span></div></div>
        </div>
        <div>
          <div class="callout ok"><b>Worked thinking — “What time does the shop open?”</b><br>A 8:00 · B 9:00 · C 9:30 · D 10:00<br><br>
            Axis of difference = <b>time</b>. Near-duplicates = B and C. So the audio will almost certainly mention <b>both 9:00 and 9:30</b>, and one of them will be <em>rejected</em> (“we used to open at nine, but not any more”). Your whole job is to catch the rejection.</div>
          <div class="callout warn mt-14"><b>The one-word naming rule is not cosmetic.</b> Students who “look at” pictures skim them and then listen vaguely. Students who label them know exactly which of four facts they are waiting for.</div>
          <div class="callout info mt-14"><b>Beware the visible-but-unmentioned picture.</b> Every option is designed to be plausible. Do not assume that because a picture appears, the audio will mention it — some options exist only to be the <em>opposite</em> of what is said.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>This is the technique slide for Exercise 1 and it generalises to any visual-option task. The core idea to repeat three times: <b>four pictures are not four ideas, they are one idea at four settings.</b> ' +
      'Have students practise the "axis of difference" out loud. Give them a set — e.g. four images of a bus, a train, a bicycle and walking — and ask what the axis is (mode of transport). Then a set of four clocks (time). Then four faces (emotion). ' +
      'Then teach the near-duplicate heuristic. It is genuinely reliable: when two of the four options are almost the same, the item\'s discrimination lies between them, because otherwise the option would not exist. In the worked example on the next slide, see whether the class can predict which two options are the real contest. ' +
      'Finally, pre-loading vocabulary is the highest-value pre-listening action. If the four pictures are times, the words <em>half past / quarter to / brought forward / delayed / sharp</em> should be primed before the audio. That is the difference between recognition and confusion.',
  },

  /* ── 14 ──────────────────────────────────────────── */
  {
    id: 'e1-worked',
    reveal: true,
    dense: true,
    kicker: 'Exercise 1 — worked example',
    title: 'Let us break one apart, line by line',
    sub: 'Read the question and the four options first. Decide your answer before you look at the script — then reveal.',
    body: `
      <div class="qcard">
        <div class="qno">Exercise 1 · Question 4</div>
        <div class="qtext">What time will the meeting start?</div>
        <div class="picopts">
          <div class="picopt correct"><span class="pl">A</span><div class="pglyph">🕤</div><div class="plabel">9:30</div></div>
          <div class="picopt trap"><span class="pl">B</span><div class="pglyph">🕘</div><div class="plabel">9:00</div></div>
          <div class="picopt trap"><span class="pl">C</span><div class="pglyph">🕙</div><div class="plabel">10:00</div></div>
          <div class="picopt"><span class="pl">D</span><div class="pglyph">🕥</div><div class="plabel">10:30</div></div>
        </div>
      </div>

      <div class="s-grid s-grid--2 mt-14 gap-lg">
        <div class="tape">
          <span class="sp">SPEAKER:</span> Hi Maya here — about tomorrow. Just so you know, the meeting's been <span class="hl">brought forward</span> — it was going to be at <span class="hl-r">ten</span>, but the room's free earlier, so we'll say <span class="hl-g">half past nine</span> instead. Not <span class="hl-r">nine</span> — I know that's what I said on Friday, but half nine gives everyone time to get in.
        </div>
        <div class="stair">
          <div class="callout ok"><b>A · 9:30 — correct.</b> The final stated time is “half past nine”.</div>
          <div class="callout bad mt-10"><b>B · 9:00 — the reversal trap.</b> Said aloud as <em>“Not nine”</em>. <b>Negation is the most expensive word in the paper.</b></div>
          <div class="callout bad mt-10"><b>C · 10:00 — the past plan.</b> <code>was going to</code> kills it: an intention, not the answer.</div>
          <div class="callout warn mt-10"><b>D · 10:30 — the near-miss.</b> Never mentioned. It catches half-heard “thirty”.</div>
        </div>
      </div>
      <div class="callout info mt-14"><b>Three numbers, all spoken, one answer.</b> Any time, price or quantity you hear is usually built into a trap. The answer survives <span style="background:rgba(251,113,133,0.18);color:#FFB3C0;padding:0 3px;border-radius:4px">not…</span> · <span style="background:rgba(251,113,133,0.18);color:#FFB3C0;padding:0 3px;border-radius:4px">was going to…</span> · <span style="background:rgba(52,211,153,0.18);color:#8BEBC6;padding:0 3px;border-radius:4px">instead</span>.</div>`,
    notes:
      '<span class="ntime">6 min</span>Run this as a live task. Show the question and four pictures, hide the script, and give them 20 seconds to commit to a letter on paper. Then reveal. ' +
      'Almost certainly a good number will write B, because 9:00 is stated twice in the extract. That is the teaching moment — B is the correct answer for the <em>wrong question</em> ("what time was mentioned?"), and the trap is delivered by the word <b>"Not"</b>. ' +
      'Then unpack the numbers one by one: <b>9:30 correct</b> (final stated time, "half past nine"), <b>9:00 trap</b> (explicitly negated), <b>10:00 trap</b> (past intention, "was going to be"), <b>10:30 trap</b> (never mentioned — the near-miss). ' +
      'Point out the corresponding picture design too: A and C are near-duplicates in feel, and the true contest is A versus B because both are around nine o\'clock. ' +
      'The transferable rule at the bottom is worth writing on the board: <b>in Exercise 1, every number you hear is load-bearing. The answer is the number that survives "not", "was going to" and "instead".</b> ' +
      'Note for you: this script is a teaching construction, not a real Cambridge item, and the labels on the pictures are mine. If you want authentic practice, use the official specimen and past-paper audio for 0511 and have students label the traps on real items.',
  },

  /* ── 15 ──────────────────────────────────────────── */
  {
    id: 'e1-traps',
    kicker: 'Exercise 1 — the traps',
    title: 'The four traps Exercise 1 is built from',
    sub: 'Extract after extract, the same four patterns recur. Name them once and you will start hearing them arrive.',
    body: `
      <div class="s-grid s-grid--2">
        <div class="s-card tint-r"><span class="tag tag-r">Trap 1</span>
          <h3>The number that gets cancelled</h3>
          <p>A time, price or quantity is stated clearly — then withdrawn.</p>
          <p><b>Markers:</b> <code>not</code> · <code>it was… but</code> · <code>we used to</code> · <code>actually</code> · <code>sorry, I mean</code></p>
          <p><b>Fix:</b> wait for the sentence to <em>end</em> before you decide.</p>
        </div>
        <div class="s-card tint-a"><span class="tag tag-a">Trap 2</span>
          <h3>The past plan</h3>
          <p>The original arrangement is described in detail — but it is no longer true.</p>
          <p><b>Markers:</b> <code>was going to</code> · <code>were supposed to</code> · <code>had planned to</code> · <code>we'd hoped</code></p>
          <p><b>Fix:</b> listen for what happens <em>after</em> the “but”.</p>
        </div>
        <div class="s-card tint-b"><span class="tag tag-b">Trap 3</span>
          <h3>The mentioned object</h3>
          <p>The picture is named, but as background or as a negative: “the bus was late, so I walked.”</p>
          <p><b>Markers:</b> <code>because</code> · <code>so instead</code> · <code>I didn't</code> · <code>rather than</code></p>
          <p><b>Fix:</b> ask <em>who is doing what, finally?</em></p>
        </div>
        <div class="s-card tint-v"><span class="tag tag-v">Trap 4</span>
          <h3>The near-identical pair</h3>
          <p>Two options differ by a small detail — 15 minutes, one stop, £2. Both get spoken.</p>
          <p><b>Markers:</b> nothing special — this is precision listening.</p>
          <p><b>Fix:</b> write both candidate numbers on the paper beside the question.</p>
        </div>
      </div>
      <div class="callout mt-14"><b>Exercise 1 in one sentence:</b> the answer is what is true <b>at the end</b> of the extract, not what is said during it. Every trap above is a version of that single idea.</div>`,
    notes:
      '<span class="ntime">4 min</span>Name the traps and then have students hunt them. The four are: (1) the <b>cancelled number</b>, (2) the <b>past plan</b>, (3) the <b>mentioned object</b>, (4) the <b>near-identical pair</b>. ' +
      'The unifying rule is at the bottom and it is worth repeating loudly: <b>what is true at the end of the extract.</b> Exercise 1 extracts are almost always mini-narratives with a correction inside them. ' +
      'Teach the markers as listening signposts, not vocabulary. <em>was going to, were supposed to, supposedly, I know that\'s what I said, but…</em> — when students hear these, their pen should pause. ' +
      'For trap 4, give the practical habit: <b>write the candidate numbers side by side on the question paper</b> (e.g. "9 / 30?" ) so the decision is visual rather than remembered. Working memory is the bottleneck in listening, and offloading to paper is free.',
  },

  /* ── 16 ──────────────────────────────────────────── */
  {
    id: 'e1-drill',
    dense: true,
    kicker: 'Exercise 1 — make it automatic',
    title: 'A ten-minute drill you can run twice a week',
    sub: 'Exercise 1 is where technique converts to marks fastest, because the format never changes. Use that.',
    body: `
      <div class="s-steps">
        <div class="s-step"><span class="sn">1</span><div class="sbody"><span class="st">Take eight Exercise-1-style items</span>
          <span class="sd">Official specimen or past-paper audio for the current syllabus is ideal. Ten minutes total.</span></div><span class="stag">2 min</span></div>
        <div class="s-step"><span class="sn">2</span><div class="sbody"><span class="st">Scan all eight questions and label the axis of difference</span>
          <span class="sd">Write one word per question: <em>time, place, transport, weather, activity, person</em>. Do this <b>before</b> playing anything.</span></div><span class="stag">2 min</span></div>
        <div class="s-step"><span class="sn">3</span><div class="sbody"><span class="st">Play once at full speed. Commit a letter. No pausing.</span>
          <span class="sd">This trains the real condition: one hearing, then a decision. Mark your confidence next to each letter (✓ / ?).</span></div><span class="stag">4 min</span></div>
        <div class="s-step g"><span class="sn">4</span><div class="sbody"><span class="st">Mark it yourself. For every wrong answer, name the trap</span>
          <span class="sd">Not “I misheard” — <em>“cancelled number”</em> or <em>“past plan”</em>. Naming the trap is what makes the next attempt different.</span></div><span class="stag">2 min</span></div>
        <div class="s-step a"><span class="sn">5</span><div class="sbody"><span class="st">Replay only the ones you got wrong, with the script open</span>
          <span class="sd">Find the exact word that decided it. Underline it in the transcript. Keep a running list of these words — you are building your own trap dictionary.</span></div><span class="stag">bonus</span></div>
      </div>
      <div class="s-grid s-grid--2 mt-14">
        <div class="callout ok"><b>Success measure:</b> in Exercise 1, if you can get <b>7 or 8</b> consistently at full speed with a single hearing, you have solved this exercise. Stop drilling it and move your time to Exercises 4 and 5.</div>
        <div class="callout warn"><b>The trap of over-practising Exercise 1.</b> It is the most satisfying exercise to drill — and the least valuable per minute. Two ten-minute sessions a week is enough. Your scarce resource is Exercise 4 and Exercise 5 technique.</div>
      </div>`,
    notes:
      '<span class="ntime">3 min</span>This is a homework-facing slide: give them a routine they can actually run without you. Walk the five steps and be explicit about why step 4 matters most. ' +
      '<b>Naming the trap is the whole drill.</b> "I misheard" is not diagnostic and leads to no change. "Cancelled number" is diagnostic: next time the student\'s pen will hover when a number is followed by <em>but</em>. ' +
      'Step 3 is deliberately at full speed with one hearing, because that is the transfer condition. Slower-and-pausier practice builds confidence without building the skill; the skill is deciding under time pressure. ' +
      'Close with the calibration warning: Exercise 1 is the most enjoyable to drill and has the lowest marginal return once you are at 7–8. Push them towards Exercise 4 and 5 practice, which is where the real 8–12 marks of headroom are for a B2/C1 cohort. ' +
      'Remind them the official specimen and past-paper audio for the 2027–2029 syllabus is the only authentic source; the scripts in this deck are teaching constructions.',
  },
];
