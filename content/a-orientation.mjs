/* ═══ PART A — ORIENTATION (slides 1–7) ═══ */

export const a = [
  /* ── 1 ───────────────────────────────────────────── */
  {
    id: 'title',
    kind: 'hero',
    kicker: 'Cambridge IGCSE English as a Second Language 0511 · Count-in Speaking',
    title: 'ESL Answering Techniques Workshop',
    lead: 'Paper 2 — <span class="accent">Listening</span> · 40 questions · five exercises · one technique at a time',
    sub: 'Built for Year 10 once the syllabus is finished. This session adds no new grammar and no new topics — it turns everything you already know into marks on an answer sheet.',
    chips: [
      { t: 'Paper 2 · Component 2', on: true },
      { t: '25% of the IGCSE', on: true },
      { t: 'Syllabus 2027 · 2028 · 2029' },
      { t: '40 marks · ~50 min' },
      { t: 'Audio heard twice' },
      { t: 'Audience: B2-high → C1' },
    ],
    hint: 'Use ← → or space to navigate · G for overview · F for fullscreen · N for notes · R to reveal answers · P to print / export PDF',
    notes:
      '<span class="ntime">2 min</span><b>Set the frame, then move on.</b> This is not a content lesson — it is an exam-craft workshop. Paper 1 taught you <em>what</em> English to use; Paper 2 rewards <em>how</em> you handle a recording you only hear twice. ' +
      'Say the number that matters first: <b>Paper 2 is 25% of the whole IGCSE</b>, but it is only ~50 minutes of work. That makes it the highest return-per-minute paper in the qualification. ' +
      'Tell students the format up front — it removes anxiety: 5 exercises, 40 multiple-choice questions, every answer is a letter, and the audio of each extract is played <b>twice</b>. ' +
      'Finally, set the working agreement for the session: nobody writes in full sentences today, everybody marks up the question paper, and wrong answers are welcome because we learn more from the traps.',
  },

  /* ── 2 ───────────────────────────────────────────── */
  {
    id: 'outcomes',
    kicker: 'Workshop outcomes',
    title: 'By the end of this session you will be able to…',
    sub: 'Every outcome below is something you can do on your own, in the exam hall, without a teacher next to you.',
    body: `
      <div class="s-grid s-grid--2">
        <div class="s-card tint-b">
          <h3><span class="ico">🧭</span>Read the paper before the audio starts</h3>
          <p>Predict the topic, the type of answer and the likely words you will hear — in the silence you are given.</p>
        </div>
        <div class="s-card tint-b">
          <h3><span class="ico">🎧</span>Split the two hearings</h3>
          <p>Know exactly what you are listening for on hearing 1 and what changes on hearing 2.</p>
        </div>
        <div class="s-card tint-g">
          <h3><span class="ico">🔍</span>Recognise the nine standard traps</h3>
          <p>Spot word-spotting, wrong-speaker, reversal and negation distractors before they cost you a mark.</p>
        </div>
        <div class="s-card tint-g">
          <h3><span class="ico">🧠</span>Work out implied meaning (L4)</h3>
          <p>Answer the hardest category of question — where the answer is never said, only meant.</p>
        </div>
        <div class="s-card tint-v">
          <h3><span class="ico">📝</span>Manage the 6-minute transfer</h3>
          <p>Move 40 answers onto the answer sheet accurately, with time left to check.</p>
        </div>
        <div class="s-card tint-v">
          <h3><span class="ico">📈</span>Run your own practice loop</h3>
          <p>Leave with a four-week routine that improves your score outside lesson time.</p>
        </div>
      </div>`,
    notes:
      '<span class="ntime">2 min</span>Read these as a promise, not a list. Six capabilities, and notice they are all <b>procedural</b> — techniques, not knowledge. ' +
      'The two that move the needle most are <b>"read the paper before the audio"</b> (free marks, and most candidates waste this silence) and <b>"recognise the traps"</b> (typically 5–8 marks a paper). ' +
      'Ask students to pick one they feel weakest at; you will return to it at the self-assessment slide near the end.',
  },

  /* ── 3 ───────────────────────────────────────────── */
  {
    id: 'agenda',
    kicker: 'Roadmap',
    title: 'How today runs',
    sub: 'Nine parts. Parts 3–7 are the exam itself, exercise by exercise; part 8 covers the skills that cut across all five.',
    body: `
      <div class="s-grid s-grid--3">
        <div class="s-card"><h3><span class="s-card-n">1</span>Orientation</h3><p>What the paper is, how it is marked, and how the 50 minutes are spent.</p></div>
        <div class="s-card"><h3><span class="s-card-n">2</span>The exercise map</h3><p>All five exercises side by side, and the universal 5-step method.</p></div>
        <div class="s-card"><h3><span class="s-card-n">3</span>Exercise 1</h3><p>8 short extracts, picture options · 8 marks</p></div>
        <div class="s-card"><h3><span class="s-card-n">4</span>Exercise 2</h3><p>5 extracts × 2 written MCQs · 10 marks</p></div>
        <div class="s-card"><h3><span class="s-card-n">5</span>Exercise 3</h3><p>Monologue, 8 sentence completions · 8 marks</p></div>
        <div class="s-card"><h3><span class="s-card-n">6</span>Exercise 4</h3><p>6 monologues, multiple matching · 6 marks</p></div>
        <div class="s-card"><h3><span class="s-card-n">7</span>Exercise 5</h3><p>Interview, 8 MCQs on the main speaker · 8 marks</p></div>
        <div class="s-card"><h3><span class="s-card-n">8</span>Cross-cutting skills</h3><p>Traps, paraphrase, numbers, connected speech, tone, inference.</p></div>
        <div class="s-card"><h3><span class="s-card-n">9</span>Exam craft</h3><p>Timing, transfer, top mistakes, a four-week practice plan.</p></div>
      </div>
      <div class="callout info mt-14"><b>Pattern to notice:</b> the paper moves from <b>short and easy to long and demanding</b>, but the marks are identical — one mark per question. Exercise 1 is the cheapest mark on the paper. Spend your effort where the questions are worth the same but cost more to win.</div>`,
    notes:
      '<span class="ntime">1 min</span>Do not read all nine cards aloud — point at the shape instead. The paper escalates: E1 short extracts, E2 short extracts with two questions each, E3 one monologue, E4 six monologues matched to statements, E5 a full interview. ' +
      'The key economic point on this slide: <b>every question is worth exactly one mark</b>, so the easy short-extract questions at the start are the best value in the paper — and the long interview at the end is the most expensive mark. ' +
      'Tell them you will build the same 5-step routine for all five exercises so it becomes automatic.',
  },

  /* ── 4 ───────────────────────────────────────────── */
  {
    id: 'where-paper2-sits',
    kicker: 'Assessment overview',
    title: 'Where Paper 2 sits in the IGCSE',
    sub: 'All candidates take three components. Listening is worth a quarter of the whole qualification — and it is the shortest paper you will sit.',
    body: `
      <div class="tbl-wrap">
        <table class="tbl">
          <thead>
            <tr><th>Component</th><th>What it assesses</th><th class="cen">Length</th><th class="cen">Marks</th><th class="cen">Weighting</th><th>Assessment</th></tr>
          </thead>
          <tbody>
            <tr><td><b>Component 1</b><br><span style="color:#7D8DA6">Reading and Writing<br>(“Paper 1”)</span></td><td>4 reading + 2 writing exercises</td><td class="cen">2 hours</td><td class="cen num">60</td><td class="cen"><span class="pill pill-b">50%</span></td><td>External</td></tr>
            <tr style="background:rgba(91,95,199,0.13)"><td><b>Component 2</b><br><span style="color:#9FD0FF">Listening — this workshop</span></td><td>5 exercises · 40 multiple-choice questions</td><td class="cen">~50 min</td><td class="cen num">40</td><td class="cen"><span class="pill pill-v">25%</span></td><td>External</td></tr>
            <tr><td><b>Component 3</b><br><span style="color:#7D8DA6">Speaking<br>(“Paper 3”)</span></td><td>Interview · short talk · discussion</td><td class="cen">10–15 min</td><td class="cen num">40</td><td class="cen"><span class="pill pill-g">25%</span></td><td>Internal, moderated</td></tr>
            <tr class="tot"><td colspan="3">Total</td><td class="cen num">140</td><td class="cen">100%</td><td>Grades A*–G</td></tr>
          </tbody>
        </table>
      </div>
      <div class="footnote">The 140 is the sum of the three component marks. The syllabus states each component's <b>weighting</b> (50 / 25 / 25) rather than a qualification total — note that the weightings are not proportional to the raw marks, so the marks column is for information only.</div>
      <div class="s-grid s-grid--3 mt-14">
        <div class="s-card"><h3><span class="ico">⏱️</span>Least time, real weight</h3><p>~50 minutes buys you 25% of the IGCSE. Per minute, Paper 2 is the best-value paper you sit.</p></div>
        <div class="s-card"><h3><span class="ico">🔤</span>Every answer is a letter</h3><p>You never write prose. Your only job is to choose A, B, C or D — and transfer it accurately.</p></div>
        <div class="s-card"><h3><span class="ico">♻️</span>You hear every text twice</h3><p>Nothing is heard once. A good technique uses hearing 1 and hearing 2 for two different jobs.</p></div>
      </div>`,
    notes:
      '<span class="ntime">2 min</span>This slide answers "why should I care about listening?" — because 25% of the qualification arrives in the shortest paper of the three. ' +
      'Three facts to land: (1) <b>40 marks, 1 mark per question, no half marks</b>; (2) <b>the answer is always a letter</b> — no spelling of content words, no writing sentences, which removes a whole category of error you face in Paper 1; (3) <b>every audio extract is heard twice</b>, which is your safety net. ' +
      'Two honesty notes if students ask. First, the 140 total is my addition: the syllabus gives each component\'s marks and weighting but no combined total, and the weightings (50 / 25 / 25) are not proportional to raw marks. Second, the syllabus says "Dictionaries may not be used" explicitly for Component 1 and Component 3, but the Component 2 section does not repeat that sentence — say plainly that no dictionary is permitted in the listening test in practice, and point them at the Cambridge Handbook and the centre\'s instructions for the detail rather than at this syllabus page. ' +
      'Worth confirming on the slide itself: the syllabus states "All questions are multiple choice, and candidates answer each one by selecting the correct option" — so there is no prose, and no spelling of content words.',
  },

  /* ── 5 ───────────────────────────────────────────── */
  {
    id: 'assessment-objectives',
    kicker: 'Assessment objectives — AO3 Listening',
    title: 'The four things examiners are actually testing',
    sub: 'Cambridge writes every listening question to test one of four skills, L1–L4. Knowing which one a question targets tells you what kind of answer to expect.',
    body: `
      <div class="s-grid s-grid--2">
        <div class="s-card tint-b"><span class="tag tag-b">L1 · easiest</span>
          <h3>Specific information</h3>
          <p><b>Wording:</b> demonstrate understanding of specific information.</p>
          <p><b>Sounds like:</b> <em>“The tour leaves at 9:15.” “It costs £14.”</em> A fact is stated plainly. You match it, or you do not.</p>
        </div>
        <div class="s-card tint-a"><span class="tag tag-a">L2 · medium</span>
          <h3>Speakers' ideas, opinions, attitudes</h3>
          <p><b>Wording:</b> demonstrate understanding of speakers' ideas, opinions and attitudes.</p>
          <p><b>Sounds like:</b> <em>“Honestly, I think it was a waste of money.”</em> The opinion is stated, but in evaluative language.</p>
        </div>
        <div class="s-card tint-v"><span class="tag tag-v">L3 · medium-hard</span>
          <h3>Connections between ideas</h3>
          <p><b>Wording:</b> demonstrate understanding of the connections between ideas, opinions and attitudes.</p>
          <p><b>Sounds like:</b> <em>“Because the buses stopped running, she ended up walking.”</em> You must chain cause to effect across sentences.</p>
        </div>
        <div class="s-card tint-r"><span class="tag tag-r">L4 · hardest</span>
          <h3>What is implied, not stated</h3>
          <p><b>Wording:</b> demonstrate understanding of what is implied but not directly stated.</p>
          <p><b>Sounds like:</b> <em>“Well… I suppose the seats were comfortable.”</em> The verdict is never spoken — you infer it from tone and hedging.</p>
        </div>
      </div>
      <div class="callout mt-14"><b>Use this to calibrate effort.</b> If an option is a word-for-word copy of something you heard, it is usually an <b>L1 trap</b>. If an option restates the same idea in different words, it is usually the <b>real answer</b>. L4 questions are deliberately designed so that the correct option is <em>never</em> in the audio.</div>`,
    notes:
      '<span class="ntime">3 min</span>This is the intellectual spine of the whole workshop. The syllabus spells these out as AO3: <b>L1</b> specific information, <b>L2</b> speakers\' ideas/opinions/attitudes, <b>L3</b> connections between ideas, <b>L4</b> implied meaning. ' +
      'Do not just read them — demonstrate the escalation. Say a sentence and ask which AO it tests: "The train is delayed by twenty minutes" → L1. "I found the whole evening rather disappointing" → L2. "Since nobody replied, we assumed it was cancelled" → L3. "Let\'s just say I won\'t be going back" → L4. ' +
      'Then teach the <b>paraphrase heuristic</b> at the bottom of the slide: verbatim audio words in an option are a warning sign; a re-worded idea is usually the answer. ' +
      'Warn them that Cambridge publishes the AO codes for each exercise in the syllabus — Exercise 1 tests L1/L2/L3, Exercise 2 and 4 and 5 include L4, Exercise 3 is L1/L2/L3 only.',
  },

  /* ── 6 ───────────────────────────────────────────── */
  {
    id: 'how-paper-built',
    kicker: 'Anatomy of the paper',
    title: 'Five exercises. Forty questions. Two hearings each.',
    sub: 'Nothing about the structure should surprise you on exam day. This is the whole paper in one frame.',
    body: `
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th class="ex">Exercise</th><th>What you hear</th><th class="cen">Questions</th><th>What you choose from</th><th class="cen">Marks</th></tr></thead>
          <tbody>
            <tr><td class="ex">1</td><td>8 short extracts — monologues &amp; dialogues</td><td class="cen num">8</td><td>1 MCQ per extract · <b>4 picture options</b> (A–D)</td><td class="cen num">8</td></tr>
            <tr><td class="ex">2</td><td>5 short extracts</td><td class="cen num">10</td><td>2 MCQs per extract · <b>3 written options</b> (A–C)</td><td class="cen num">10</td></tr>
            <tr><td class="ex">3</td><td>1 monologue (talk / presentation)</td><td class="cen num">8</td><td>8 sentence gaps · <b>3 written options</b> (A–C)</td><td class="cen num">8</td></tr>
            <tr><td class="ex">4</td><td>6 short monologues</td><td class="cen num">6</td><td><b>Multiple matching</b> against 8 statements</td><td class="cen num">6</td></tr>
            <tr><td class="ex">5</td><td>1 interview (2 speakers)</td><td class="cen num">8</td><td>8 MCQs · <b>3 written options</b> (A–C)</td><td class="cen num">8</td></tr>
            <tr class="tot"><td>Total</td><td>~50 minutes, including 6 minutes' transfer time</td><td class="cen num">40</td><td>Every answer is a letter</td><td class="cen num">40</td></tr>
          </tbody>
        </table>
      </div>
      <div class="s-grid s-grid--3 mt-14">
        <div class="s-card"><h3><span class="ico">🔁</span>Twice, always</h3><p>Each recorded text is played twice. Never treat hearing 1 as your only chance.</p></div>
        <div class="s-card"><h3><span class="ico">✍️</span>Mark, then transfer</h3><p>You write on the question paper, then transfer onto a separate answer sheet at the end.</p></div>
        <div class="s-card"><h3><span class="ico">⏳</span>6 minutes to transfer</h3><p>Exactly six minutes, after the last exercise, to move 40 letters across.</p></div>
      </div>`,
    notes:
      '<span class="ntime">3 min</span>Make students say the numbers back: <b>5 exercises, 40 questions, 40 marks, ~50 minutes, played twice, 6-minute transfer.</b> ' +
      'Confirm the structural facts from the syllabus: each exercise tests comprehension of recorded texts such as monologues, interviews or conversations; <b>candidates hear each recorded text twice</b>; and at the end of the test they transfer answers onto a <b>separate answer sheet</b> with <b>six minutes</b> allowed. ' +
      'Point out the one asymmetry: Exercise 2 gives you <b>ten</b> marks for five extracts, while Exercise 4 gives you only <b>six</b> for six monologues plus eight statements to track. Exercise 4 is the heaviest load for the fewest marks — do not overspend your attention there. ' +
      'On dictionaries, be precise if asked: the syllabus says "Dictionaries may not be used" explicitly for Component 1 and Component 3, but the Component 2 (Listening) section does not repeat that sentence. Practically, no dictionary is permitted in the listening test — point students at the Cambridge Handbook and the centre\'s instructions rather than at this syllabus for that detail. ' +
      'Also note that answer sheets are the standard Cambridge multiple-choice sheets; the syllabus links to the example sheets on the exam-officers pages.',
  },

  /* ── 7 ───────────────────────────────────────────── */
  {
    id: 'exam-day-mechanics',
    kicker: 'Exam-day mechanics',
    title: 'What actually happens in the room',
    sub: 'Most lost marks in listening are lost before the first extract — through poor preparation of the room, the paper or the answer sheet.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="s-card"><h3><span class="ico">🔊</span>The audio</h3>
            <p>Delivered by the centre, checked in advance. <b>If you cannot hear clearly, raise your hand immediately</b> — do not sit through a whole exercise guessing. Reporting a problem during the test is what lets the centre act on it.</p></div>
          <div class="s-card mt-10"><h3><span class="ico">📄</span>The question paper</h3>
            <p>You write your answers <b>on the question paper</b> first. This is a working document — underline, circle, strike through. Nobody marks the question paper.</p></div>
          <div class="s-card mt-10"><h3><span class="ico">🖊️</span>The answer sheet</h3>
            <p>A separate multiple-choice sheet. Losing the sheet, or filling it in at the wrong line, can cost an entire exercise. This is the classic silent disaster.</p></div>
        </div>
        <div>
          <div class="callout ok"><b>Allowed:</b> working on the question paper, writing in pencil, changing answers, using the 6-minute transfer to double-check.<br><br>
          <b>Not allowed:</b> phones, discussing answers, or writing after the recording ends and the 6 minutes' transfer time has finished. The syllabus states that dictionaries may not be used in Components 1 and 3 — assume the same here and do not rely on one.</div>
          <div class="callout warn mt-14"><b>The three silent killers</b> — none of them about English:
            <ul class="s-bullets no mt-6">
              <li><b>Off-by-one transfer</b> — the answers are right, the letters are on the wrong lines.</li>
              <li><b>Blank answers</b> — leaving a question empty. A blank scores zero with certainty; a guess sometimes scores one.</li>
              <li><b>Unprepared silence</b> — sitting passively during the reading time instead of predicting.</li>
            </ul></div>
          <div class="callout info mt-14"><b>One-in-four is free.</b> In Exercise 1 with four options, a blind guess is worth 0.25 of a mark on average. Leave eight lines blank across the paper and you have handed back roughly <b>two marks</b> — for nothing. <span style="color:#7D8DA6">(Cambridge does not deduct marks for wrong answers on multiple-choice papers; check the current Cambridge Handbook for the exact wording.)</span></div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">3 min</span>This slide exists because three of the most common mark losses are nothing to do with English. Walk the left column as logistics, then spend real time on the right column. ' +
      'Emphasise: <b>write on the question paper</b> (it is your scrap paper and it is never marked), and <b>the answer sheet is a separate risk</b>. ' +
      'Teach the off-by-one failure explicitly and give the fix now: transfer in blocks of five, counting lines aloud in your head, and cover the rest of the sheet with your hand so your eye cannot drift. ' +
      'On guessing: there is no negative marking in Cambridge IGCSE, so <b>every question must have a letter</b>. Illustrate the expected value: in Exercise 1 each question has four options, so a blind guess is worth 0.25 of a mark on average — leave eight blank lines and you have given away about two marks for nothing. Across the paper that can be the difference between grades. ' +
      'Remind them of the invigilator script: if the audio is unclear or the equipment fails, they must raise a hand at once — centres can request special consideration only if the problem is reported during the test.',
  },
];
