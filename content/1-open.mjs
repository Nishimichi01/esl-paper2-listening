/* ══ 1 · WELCOME + THE METHOD ══ */

export const open = [
  /* ── 1 ── */
  {
    id: 'title',
    kind: 'hero',
    logo: true,
    title: 'Paper 2 — Listening',
    tagline: 'Answering Techniques Workshop',
    meta: 'Cambridge IGCSE English as a Second Language <b>0511</b><br>Year 10 · 2 hours · Exam paper: October/November 2025',
    notes:
      '<span class="t">2 min</span>Welcome. Say the goal in one line: <b>you already know the English — today we learn how to turn it into marks.</b> ' +
      'Everything today uses the real October/November 2025 listening paper, so the questions and pictures are exactly what you will face. ' +
      'Set the working rules: pens down for the "you decide" slides, everyone commits to a letter before we look at the answer, and wrong answers are the most useful thing in the room.',
  },

  /* ── 2 ── */
  {
    id: 'plan',
    kicker: 'Today',
    title: 'What the next two hours look like',
    body: `
      <div class="grid g2 fill" style="align-content:start">
        <div class="card num"><span class="n">1</span><h3>The paper itself</h3><p>40 questions, 5 exercises, 25% of your IGCSE.</p></div>
        <div class="card num"><span class="n">2</span><h3>The T.A.C.O. method</h3><p>One routine you use on every single question.</p></div>
        <div class="card num"><span class="n">3</span><h3>Exercise 1 to 5, one at a time</h3><p>Real questions from the 2025 paper. You decide, then we check.</p></div>
        <div class="card num"><span class="n">4</span><h3>Using the transcript</h3><p>The fastest way to improve at home.</p></div>
        <div class="card num"><span class="n">5</span><h3>Exam craft</h3><p>The 6-minute transfer, the traps, and a 4-week plan.</p></div>
        <div class="card num"><span class="n">✓</span><h3>By the end</h3><p>You will have practised all five exercises on real questions.</p></div>
      </div>`,
    notes:
      '<span class="t">1 min</span>Keep this short — it is a map, not a lesson. The important line is number 3: <b>we are going to work through all five exercises on real questions, and you answer first.</b> ' +
      'Tell them openly that there will be several moments where they commit to an answer and it is wrong — that is the design, because the traps only become visible when you have fallen into one.',
  },

  /* ── 3 ── */
  {
    id: 'numbers',
    kicker: 'The paper',
    title: 'Paper 2 in numbers',
    body: `
      <div class="stats" style="margin-bottom:22px">
        <div class="stat"><div class="v">40</div><div class="k">questions<br>1 mark each</div></div>
        <div class="stat"><div class="v">50</div><div class="k">minutes<br>including 6 to transfer</div></div>
        <div class="stat"><div class="v">2×</div><div class="k">you hear every<br>recording</div></div>
        <div class="stat"><div class="v">25%</div><div class="k">of the whole<br>IGCSE</div></div>
      </div>
      <div class="grid g2">
        <div class="card g"><h3>The good news</h3><p>Every answer is just a <b>letter</b>. No sentences, no spelling of long words, no writing to plan.</p></div>
        <div class="card r"><h3>The catch</h3><p>You hear it <b>twice and then it is gone forever.</b> The paper rewards technique, not luck.</p></div>
      </div>`,
    notes:
      '<span class="t">2 min</span>Make them say the numbers back. Two facts do the emotional work here: <b>every answer is a letter</b> (so this paper has none of the writing risk of Paper 1), and <b>you hear everything twice</b> (so it is fairer than it feels). ' +
      'Confirm from the actual question paper: "There are 40 questions on this paper. Answer all questions." and "You will have 6 minutes to transfer your answers... onto the multiple choice answer sheet." ' +
      'Also note the paper says <b>"Dictionaries are not allowed."</b> So no dictionary — but also remember every answer is a letter, so you rarely need one.',
  },

  /* ── 4 ── */
  {
    id: 'what-tested',
    kicker: 'What is being tested',
    title: 'Four skills, from easy to hard',
    sub: 'Every question on the paper is testing one of these four. Knowing which one tells you what kind of answer to expect.',
    body: `
      <div class="grid g4 fill" style="align-content:start">
        <div class="card"><span class="pill">L1</span><h3 style="margin-top:10px">Stated facts</h3><p>Times, places, numbers, names. Said out loud plainly.</p><p style="margin-top:8px;font-size:18px;color:var(--navy-soft)"><em>“The train leaves at 9:15.”</em></p></div>
        <div class="card"><span class="pill">L2</span><h3 style="margin-top:10px">Opinions</h3><p>How someone feels about something. Said in opinion words.</p><p style="margin-top:8px;font-size:18px;color:var(--navy-soft)"><em>“Honestly, it was a waste of money.”</em></p></div>
        <div class="card"><span class="pill">L3</span><h3 style="margin-top:10px">Connections</h3><p>Linking two ideas — cause, effect, contrast, time.</p><p style="margin-top:8px;font-size:18px;color:var(--navy-soft)"><em>“Because the buses stopped, she walked.”</em></p></div>
        <div class="card"><span class="pill">L4</span><h3 style="margin-top:10px">Implied meaning</h3><p>The answer is <b>never said</b>. You work it out.</p><p style="margin-top:8px;font-size:18px;color:var(--orange-dk)"><em>“Well… I suppose the seats were comfortable.”</em></p></div>
      </div>
      <div class="ans hint" style="margin-top:16px"><span class="tag">Key</span><div><b>24 of the 40 marks involve L4</b> — Exercises 2, 4 and 5 all test implied meaning. If you only listen for stated facts, you are playing for about 16 marks.</div></div>`,
    notes:
      '<span class="t">4 min</span>The intellectual spine of the workshop. Do not read the cards — demonstrate them. Say each example sentence and ask which skill it tests. ' +
      'The number that changes how students listen: <b>L4 (implied meaning) is tested in Exercises 2, 4 and 5 — that is 24 of the 40 marks.</b> A student who hunts only for stated facts caps themselves at roughly 16. ' +
      'Do not claim the answer is never literally present in an L4 question — it IS present, just not in the option words. The option is a paraphrase of the meaning, never a copy of the words. Which is exactly why the next slides matter.',
  },

  /* ── 5 ── */
  {
    id: 'sect-method',
    kind: 'sect',
    num: '01',
    kicker: 'Part one',
    title: 'The method',
    sub: 'One routine, used on every question of every exercise. Learn it once, use it forty times.',
    notes:
      '<span class="t">—</span>Section divider. Use it as a natural pause: recap the four skills in one breath, then move on. Nothing to teach here; do not linger.',
  },

  /* ── 6 ── */
  {
    id: 'map',
    vcenter: true,
    kicker: 'The map',
    title: 'All five exercises',
    body: `
      <table class="t tight" style="align-self:stretch">
        <colgroup><col style="width:84px"><col style="width:29%"><col style="width:92px"><col><col style="width:118px"></colgroup>
        <thead><tr><th class="c">Ex</th><th>What you hear</th><th class="c">Qs</th><th>What you choose</th><th class="c">Marks</th></tr></thead>
        <tbody>
          <tr><td class="n">1</td><td class="l">8 very short extracts</td><td class="c">8</td><td class="l">1 question each · <b>4 pictures</b> A–D</td><td class="c n">8</td></tr>
          <tr><td class="n">2</td><td class="l">5 short extracts</td><td class="c">10</td><td class="l"><b>2 questions</b> each · 3 written options A–C</td><td class="c n">10</td></tr>
          <tr><td class="n">3</td><td class="l">1 talk (monologue)</td><td class="c">8</td><td class="l">8 gaps in sentences · 3 options each</td><td class="c n">8</td></tr>
          <tr><td class="n">4</td><td class="l">6 different speakers</td><td class="c">6</td><td class="l">Match to <b>8 statements</b> A–H</td><td class="c n">6</td></tr>
          <tr><td class="n">5</td><td class="l">1 interview (2 voices)</td><td class="c">8</td><td class="l">3 written options A–C · <b>the main speaker only</b></td><td class="c n">8</td></tr>
        </tbody>
      </table>
      <div class="grid g3" style="margin-top:12px">
        <div class="card"><h3>16 cheap marks</h3><p>Exercises 1 and 3 test stated facts and opinions only. Aim to bank these.</p></div>
        <div class="card"><h3>24 harder marks</h3><p>Exercises 2, 4 and 5 also test implied meaning.</p></div>
        <div class="card"><h3>Every question = 1 mark</h3><p>So never spend longer than one question is worth.</p></div>
      </div>`,
    notes:
      '<span class="t">3 min</span>Walk down the Ex column only, then land the three cards. The strategic message: <b>Exercises 1 and 3 are the cheapest 16 marks on the paper</b> (they test L1–L3 only), and <b>Exercise 4 is the heaviest work for the fewest marks</b> (six speakers plus eight statements for 6 marks). ' +
      'Also point out the design: Exercise 2 gives <b>ten</b> marks for just five extracts — that is the best value on the paper. Do not skimp on it.',
  },

  /* ── 7 ── */
  {
    id: 'taco',
    kicker: 'The method',
    title: 'T.A.C.O. — four beats, every question',
    body: `
      <div class="grid g4 fill" style="align-content:start">
        <div class="card"><div style="font-family:'Baloo 2';font-size:56px;font-weight:800;color:var(--navy);line-height:1">T</div>
          <h3>Target</h3><p><b>Before</b> the audio: read the question and all the options. Underline the key words.</p>
          <p style="margin-top:8px;font-size:18px;color:var(--orange-dk)"><b>This is where free marks are won.</b></p></div>
        <div class="card"><div style="font-family:'Baloo 2';font-size:56px;font-weight:800;color:var(--navy-2);line-height:1">A</div>
          <h3>Attend</h3><p>Hearing 1: get the topic and the shape of the recording. Put a <b>small pencil dash</b> by a possible answer.</p>
          <p style="margin-top:8px;font-size:18px;color:var(--navy-soft)">Nothing is final yet.</p></div>
        <div class="card"><div style="font-family:'Baloo 2';font-size:56px;font-weight:800;color:var(--navy-2);line-height:1">C</div>
          <h3>Confirm</h3><p>Hearing 2: listen <b>narrowly</b>. Check your dash, then ask <em>“which option is the trap?”</em></p>
          <p style="margin-top:8px;font-size:18px;color:var(--navy-soft)">Change only for a reason.</p></div>
        <div class="card"><div style="font-family:'Baloo 2';font-size:56px;font-weight:800;color:var(--navy-2);line-height:1">O</div>
          <h3>Output</h3><p>Circle your final letter. <b>Never leave a blank.</b> Move on immediately.</p>
          <p style="margin-top:8px;font-size:18px;color:var(--navy-soft)">The next extract is about to start.</p></div>
      </div>`,
    notes:
      '<span class="t">4 min</span>Make this physical. Have every student hold up a pen and show you what a "dash" (A) looks like versus a "circle" (C/O). If they cannot tell the two apart on the page they will not know whether they have committed. ' +
      'The single most common failure is <b>skipping T</b>: listening with unread options, hearing one familiar word, and locking it in. That is precisely how the paper is designed to catch them. ' +
      'Stress O: never leave a blank, and <b>do not re-open a question you have committed to</b> — the next extract starts within seconds and needs full attention.',
  },

  /* ── 8 ── */
  {
    id: 'two-hearings',
    vcenter: true,
    kicker: 'The method',
    title: 'Hearing 1 and hearing 2 are different jobs',
    body: `
      <table class="t" style="align-self:stretch">
        <colgroup><col style="width:210px"><col><col></colgroup>
        <thead><tr><th class="c"></th><th class="c">Hearing 1</th><th class="c">Hearing 2</th></tr></thead>
        <tbody>
          <tr><td class="l"><b>Your job</b></td><td class="l">Understand the <b>whole recording</b> — who, what, in what order</td><td class="l"><b>Decide</b> each answer with evidence</td></tr>
          <tr><td class="l"><b>Your pen</b></td><td class="l">A small dash by a <b>possible</b> answer</td><td class="l">A firm circle round the <b>final</b> letter</td></tr>
          <tr><td class="l"><b>Your eyes</b></td><td class="l">Mostly on the <b>question paper</b></td><td class="l">Mostly <b>listening</b>, glancing at your two best options</td></tr>
          <tr><td class="l"><b>Never</b></td><td class="l">Lock an answer in — it is only a draft</td><td class="l">Re-read every option from the beginning</td></tr>
        </tbody>
      </table>
      <div class="ans hint" style="margin-top:16px"><span class="tag">Listen for</span><div><b>not · never · only · already · instead · unless · but · actually · in the end · at first</b><br><span style="font-size:18px">These words are where the answer flips. Most wrong answers are decided by one of them.</span></div></div>`,
    notes:
      '<span class="t">3 min</span>This is the highest-value behaviour change in the workshop. Most mid-band candidates use hearing 1 to answer and hearing 2 to check they were right — so hearing 2 does no new work. Teach the split: <b>hearing 1 builds the map, hearing 2 plants the flag.</b> ' +
      'Write the flip-words on the board and make them chant once: not, never, only, already, instead, unless, but, actually, in the end, at first. In the real 2025 paper these words decide Question 1 (the park), Question 6 and Question 13 (the café). ' +
      'Also give the inter-hearing ritual: when the recording stops, do not relax — finalise your letter, then glance at the next question. The pause after each extract is 5 seconds, and that is where a disciplined student steals a mark.',
  },
];
