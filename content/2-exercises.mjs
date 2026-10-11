/* ══ 2 · THE FIVE EXERCISES, USING THE REAL 2025 PAPER ══ */

export const ex = [
  /* ── 9 ── */
  {
    id: 'real-times',
    kicker: 'Your reading time is built in',
    title: 'The paper tells you when to read',
    body: `
      <table class="t tight" style="align-self:start">
        <thead><tr><th style="width:70px">Ex</th><th>The recording says…</th><th class="c" style="width:210px">You get</th></tr></thead>
        <tbody>
          <tr><td class="n">1</td><td class="says">no reading pause — it starts straight away</td><td class="time">3 sec<small>before Q1 only</small></td></tr>
          <tr><td class="n">2</td><td class="says"><em>“Now look at Questions 9 and 10.”</em></td><td class="time">15 sec<small>before every pair</small></td></tr>
          <tr><td class="n">3</td><td class="says"><em>“Now look at questions 19–26.”</em></td><td class="time">40 sec<small>all eight at once</small></td></tr>
          <tr><td class="n">4</td><td class="says"><em>“Now read statements A–H.”</em></td><td class="time">30 sec<small>all eight at once</small></td></tr>
          <tr><td class="n">5</td><td class="says"><em>“Now look at questions 33–40.”</em></td><td class="time">45 sec<small>all eight at once</small></td></tr>
          <tr><td class="n">End</td><td class="says">after the last recording — to move your answers</td><td class="time">6 min<small>5 min + 1 min</small></td></tr>
        </tbody>
      </table>
      <div class="ans hint" style="margin-top:12px"><span class="tag">Use it</span><div>Most students spend this time staring at the paper. <b>Read, underline the key words, predict the answer.</b></div></div>`,
    notes:
      '<span class="t">3 min</span>This slide comes from the actual October/November 2025 transcript, so these times are real, not estimates. You can verify every one of them in the transcript document. ' +
      'The teaching point: <b>the exam hands you reading time and most candidates waste it.</b> Exercise 3 gives 40 seconds to read eight questions; Exercise 5 gives 45 seconds for eight. That is roughly five seconds a question — enough to underline the key words and predict the answer type. ' +
      'Also point out the double purpose: those pause announcements are your <b>navigation signal</b>. When you hear "Now look at Questions 19 to 26", you know Exercise 3 has begun and you should be on the right page.',
  },

  /* ── 10 ── */
  {
    id: 'sect-ex',
    kind: 'sect',
    num: '02',
    kicker: 'Part two',
    title: 'Exercise by exercise',
    sub: 'Five exercises. Real questions from the October/November 2025 paper. Each time: you decide first, then we look at the transcript together.',
    notes:
      '<span class="t">—</span>Section divider. Tell them how it will run: for each exercise they see a real question, get the real reading time, and commit to an answer on paper before you reveal the audio script. Emphasise that committing — even wrongly — is what makes the trap visible.',
  },

  /* ── 11 · EX1 LOOK ── */
  {
    id: 'ex1-look',
    kicker: 'Exercise 1 · 8 marks',
    title: 'Eight short extracts. One picture question each.',
    body: `
      <div class="grid g2 fill" style="align-items:stretch">
        <div style="display:flex;flex-direction:column;gap:12px;min-height:0">
          <div class="shot fill zoom"><img src="__IMG:ex1_instr__" alt="Exercise 1 instructions from the 2025 paper"></div>
          <ul class="list" style="font-size:19px">
            <li>8 separate extracts — <b>30 seconds each</b>, played twice</li>
            <li>One question, <b>four pictures</b> A–D</li>
            <li>Answers are always a concrete thing: a place, a time, an activity</li>
            <li><b>No reading pause.</b> You get 3 seconds, then it starts</li>
          </ul>
        </div>
        <div class="shot fill zoom"><img src="__IMG:ex1_q1__" alt="Question 1 from the 2025 paper"></div>
      </div>`,
    notes:
      '<span class="t">3 min</span>Both images are from the real paper — the instruction box and Question 1. Let them look at Question 1 for a moment; you will use it properly on the next two slides. ' +
      'Say the important structural fact: Exercise 1 has <b>no reading pause</b>. The recording starts with only a three-second gap before Question 1. So for Exercise 1 the "T" step of T.A.C.O. has to be fast and done the moment the paper is in your hands. In practice you should skim all eight Exercise 1 questions <b>before the exam audio begins at all</b> — during the instructions.',
  },

  /* ── 12 · EX1 TECHNIQUE ── */
  {
    id: 'ex1-technique',
    kicker: 'Exercise 1 · technique',
    title: 'Four pictures are one question at four settings',
    body: `
      <div class="grid g2" style="align-items:start">
        <div class="card"><h3>Find the difference</h3>
          <p>Do not read the pictures one by one. Ask:</p>
          <p style="margin-top:10px;font-size:24px;color:var(--navy)"><b>What single thing changes from A to B to C to D?</b></p>
          <p style="margin-top:10px">That one thing is the question. In Question 1 it is <b>where the car is parked</b> — nothing else matters.</p></div>
        <div class="card"><h3>Then predict the words</h3>
          <p>Once you know the axis, pre-load the vocabulary you expect to hear:</p>
          <ul class="list" style="margin-top:10px;font-size:19px">
            <li><b>Place options</b> → car park, station, petrol station, supermarket, outside, round the corner</li>
            <li><b>Time options</b> → o'clock, half past, quarter to, delayed, brought forward</li>
            <li><b>Activity options</b> → swimming, cycling, cooking, reading</li>
          </ul>
          <p style="margin-top:10px">Now the audio <b>confirms</b> instead of surprising you.</p></div>
      </div>
      <div class="ans two" style="margin-top:16px"><span class="tag">Watch out</span><div>When two pictures look almost the same, the answer is <b>one of those two</b>. That is where the exam puts the real decision.</div></div>`,
    notes:
      '<span class="t">3 min</span>The core insight: <b>four pictures are not four ideas — they are one idea at four settings.</b> Make them practise naming the axis out loud. Show any Question 1 option set and ask "what single thing changes?" ' +
      'Then teach pre-loading vocabulary. This is the single cheapest technique in the whole paper: if the four options are places, the words <em>car park, station, petrol station, supermarket</em> should be in your head before the audio starts. Recognition beats comprehension under time pressure. ' +
      'The near-duplicate rule is worth stating: when two options are almost identical, the discrimination is between them, because otherwise the option would not exist.',
  },

  /* ── 13 · Q1 DECIDE ── */
  {
    id: 'q1-decide',
    kicker: 'Real question · Exercise 1',
    title: 'Question 1 — you have 3 seconds',
    reveal: true,
    body: `
      <div class="shot fill zoom"><img src="__IMG:ex1_q1__" alt="Question 1 from the 2025 paper"></div>
      __PLAY:ex1_q1|Play Question 1|The real recording, played twice__
      <div class="ans two rv" style="margin-top:12px"><span class="tag">The audio says</span><div>“there wasn't a single space left in the <b>pool car park</b>… I hope you didn't leave it at the <b>train station</b> like last time… It's actually <b>next to the petrol station</b>… the <b>supermarket</b>'s nearer… but I'd feel bad parking there without doing any shopping!”</div></div>`,
    notes:
      '<span class="t">4 min</span>Run it properly. Show Question 1, give them ten seconds, and make <b>everyone write a letter</b> before you reveal anything. Then press R. ' +
      'Most classes split between A (petrol station), B (supermarket) and D (train station). That is the perfect teaching moment, because <b>three of the four pictures are mentioned in the audio</b>: ' +
      '<b>D train station</b> — mentioned as a past mistake ("like last time", "I would never make that mistake again"). ' +
      '<b>B supermarket</b> — considered and rejected ("I\'d feel bad parking there without doing any shopping"). ' +
      '<b>C pond</b> — never mentioned at all. ' +
      '<b>A petrol station</b> — the only one that is actually true ("It\'s actually next to the petrol station"). ' +
      'So the answer is <b>A</b>. The rule: <b>the answer is what is true at the END of the extract, not what is said during it.</b>',
  },

  /* ── 14 · Q1 AUDIO ── */
  {
    id: 'q1-audio',
    kicker: 'Real question · Exercise 1',
    title: 'Why A is right — and how the other three are built',
    body: `
      <div class="tape" style="margin-bottom:14px"><span class="who">Girl:</span> How was swimming club? &nbsp;<span class="who">Dad:</span> Great, but I'm pretty tired.
      <br><span class="who">Dad:</span> I'm afraid we've got a bit of a walk to the car — there wasn't a single space left in the <span class="kg">pool car park</span>.
      <br><span class="who">Girl:</span> I hope you didn't leave it at the <span class="kr">train station</span> like last time — that's miles away.
      <br><span class="who">Dad:</span> I would never make that mistake again! It's actually <span class="kg">next to the petrol station</span>, which is much better.
      <br><span class="who">Girl:</span> I suppose so, but the <span class="kr">supermarket</span>'s nearer, and that's got a huge car park.
      <br><span class="who">Dad:</span> Yes, but I'd feel bad parking there without doing any shopping!</div>
      <div class="grid g4">
        <div class="card g"><h3>A · Petrol station</h3><p>“It's <b>actually</b> next to the petrol station.” The final, true fact.</p></div>
        <div class="card r"><h3>B · Supermarket</h3><p>Suggested by the girl — and <b>refused</b>: “but I'd feel bad…”</p></div>
        <div class="card r"><h3>C · By the pond</h3><p><b>Never mentioned.</b> It exists only to fill the fourth box.</p></div>
        <div class="card r"><h3>D · Train station</h3><p>A <b>past</b> mistake: “like last time… never again.”</p></div>
      </div>`,
    notes:
      '<span class="t">4 min</span>Now show the script and walk it line by line. The whole extract is a chain of four places, three of which are traps. This is what Exercise 1 really tests. ' +
      'Name the trap types as you go, because the names recur all workshop: ' +
      '<b>B is the rejected suggestion</b> (“but I\'d feel bad…”), ' +
      '<b>C is the never-mentioned option</b>, ' +
      '<b>D is the past mistake</b> (“like last time”), ' +
      'and <b>the answer is signalled by “actually”</b> — one of the flip-words from earlier. ' +
      'Have them underline “actually” in their own copy of the script. Then say the transferable rule out loud and make them write it: <b>in Exercise 1, the answer is true at the end of the extract.</b>',
  },

  /* ── 15 · EX1 TRAPS ── */
  {
    id: 'ex1-traps',
    kicker: 'Exercise 1 · the traps',
    title: 'Four traps, and one rule that beats them all',
    body: `
      <div class="grid g2" style="align-content:start;gap:14px">
        <div class="card r"><h3>1 · A number that gets cancelled</h3><p>“It was going to be ten… no, <b>half past nine</b>.” Wait for the sentence to finish.</p></div>
        <div class="card r"><h3>2 · The past plan</h3><p>“I <b>used to</b> park there.” / “That's what I said on Friday.” Old information, not the answer.</p></div>
        <div class="card r"><h3>3 · The mentioned picture</h3><p>Shown in the audio as a <b>rejected</b> idea or a mistake. Question 1's supermarket and train station.</p></div>
        <div class="card r"><h3>4 · The near-miss pair</h3><p>Two options differ by a tiny detail. Both get spoken. Write both numbers down and decide at the end.</p></div>
      </div>
      <div class="ans ok" style="margin-top:16px"><span class="tag">The rule</span><div>Ask yourself one question on every Exercise 1 item: <b>“Is this still true at the end?”</b> If it was mentioned but then changed, it is a trap.</div></div>`,
    notes:
      '<span class="t">3 min</span>These four traps are all the same idea wearing different clothes, and the rule at the bottom is the whole of Exercise 1: <b>is this still true at the end?</b> ' +
      'Have them practise the rule immediately on the questions they can see: in Question 1 the supermarket was mentioned and then refused, so it fails the test. ' +
      'Set the practice task: the other seven Exercise 1 questions in the paper are all built this way. For homework, do Questions 2 to 8 and write beside each wrong picture the reason it was wrong — <em>rejected</em>, <em>past plan</em>, <em>never mentioned</em>, or <em>near-miss</em>. That labelling is worth more than a mark.',
  },

  /* ── 16 · EX2 LOOK ── */
  {
    id: 'ex2-look',
    kicker: 'Exercise 2 · 10 marks',
    title: 'Five extracts. Two questions each. Best value on the paper.',
    body: `
      <div class="grid g2 fill" style="align-items:stretch">
        <div class="shot fill zoom"><img src="__IMG:ex2_instr__" alt="Exercise 2 instructions from the 2025 paper"></div>
        <div style="display:flex;flex-direction:column;gap:12px;min-height:0">
          <div class="shot fill zoom"><img src="__IMG:ex2_q9_10__" alt="Questions 9 and 10 from the 2025 paper"></div>
        </div>
      </div>
      <ul class="list" style="margin-top:12px;font-size:19px;display:grid;grid-template-columns:1fr 1fr;gap:8px 30px">
        <li>Five extracts, <b>two questions</b> on the same recording</li>
        <li><b>15 seconds</b> reading time before <b>every</b> pair</li>
        <li>Three written options A–C — words or short phrases</li>
        <li>Lose the thread once and it costs you <b>two</b> marks</li>
      </ul>
      <div style="margin-top:12px">__PLAYSM:ex2_intro|Play the Exercise 2 instructions|Hear the real 15-second reading pause__</div>`,
    notes:
      '<span class="t">3 min</span>Two facts to land. First, the value: <b>10 marks for five extracts — the best marks-per-minute on the paper.</b> Second, the risk: because two questions come from one recording, one moment of inattention costs <b>two</b> marks. ' +
      'The 15-second pause before every pair is the real gift here. Show them the paper: “Now look at Questions 9 and 10” then a 15-second pause. In 15 seconds you can read two questions and three options each — comfortably — if you are not staring at the ceiling.',
  },

  /* ── 17 · EX2 TECHNIQUE ── */
  {
    id: 'ex2-technique',
    kicker: 'Exercise 2 · technique',
    title: 'The two questions usually do different jobs',
    body: `
      <div class="grid g2" style="align-items:start">
        <div class="card n"><h3>One is usually a fact</h3>
          <p><b>How…? Where…? What kind…? How many…?</b></p>
          <p style="margin-top:10px">The answer is stated. Often winnable on hearing 1.</p>
          <p style="margin-top:10px;font-size:19px;color:var(--navy-soft)">Mark it <b>F</b> on your paper.</p></div>
        <div class="card"><h3>One is usually a stance</h3>
          <p><b>Why…? How does she feel…? What made him…?</b></p>
          <p style="margin-top:10px">The answer is an opinion, reason or feeling — and the option will be <b>worded differently</b> from the audio.</p>
          <p style="margin-top:10px;font-size:19px;color:var(--orange-dk)">Mark it <b>S</b> on your paper.</p></div>
      </div>
      <div class="ans hint" style="margin-top:16px"><span class="tag">Do this</span><div>Write <b>F</b> or <b>S</b> next to each question during the 15-second pause. Then you can see at a glance which one is still unanswered.</div></div>
      <div class="ans two" style="margin-top:12px"><span class="tag">Careful</span><div>This is a <b>strong habit, not a rule</b>. Sometimes both questions are facts, or both are stances. Use it to aim your attention — never to guess.</div></div>`,
    notes:
      '<span class="t">3 min</span>Be honest about the strength of this pattern, as the slide itself says: it is a <b>tendency, not a published design rule.</b> Students who treat it as a rule get caught when both questions are factual. ' +
      'What IS reliable is the underlying distinction: some questions are answered by a stated fact, others by a stance. Teaching students to notice which they face is the point, and writing F or S next to each question turns a vague instruction into a <b>visible checklist</b> they can glance at mid-recording. ' +
      'Then demonstrate on Question 9 and 10 (next slide): Question 9 "How did the boy learn…" is a fact; Question 10 "What made the boy choose…" is a reason — a stance.',
  },

  /* ── 18 · Q9-10 DECIDE ── */
  {
    id: 'q9-10-decide',
    kicker: 'Real questions · Exercise 2',
    title: 'Questions 9 and 10 — 15 seconds',
    reveal: true,
    body: `
      <div class="grid g2 fill" style="align-items:stretch;gap:14px">
        <div class="shot fill zoom"><img src="__IMG:ex2_q9_10__" alt="Questions 9 and 10"></div>
        <div style="display:flex;flex-direction:column;gap:12px;min-height:0">
          __PLAY:ex2_videos|Play Questions 9 and 10|The real recording, played twice__
          <div class="tape fill rv" style="overflow-y:auto">
          <span class="who">Boy:</span> My presentation today's on the environmental videos I make and upload. This is perhaps simpler than you'd imagine. There are literally <span class="kg">thousands of websites and film clips</span> on the internet, each of which contains someone <span class="kg">guiding you step-by-step</span>. <span class="kr">Attending classes</span> on the topic was <span class="kr">totally unnecessary</span>, thanks to that.
          <br><br>So why did I choose the environment as a topic? Well, unlike many students, I'd <span class="kr">only developed a passion for it relatively recently</span>, but I realised there were a <span class="kg">vast number of issues contained within a single subject</span>, which meant <span class="kg">each video could be very different</span> from the last. My <span class="k">marks</span> in environment-related schoolwork have <span class="k">improved greatly as a result</span>.
          </div>
        </div>
      </div>`,
    notes:
      '<span class="t">5 min</span>Give them 15 seconds (use a real timer — it is more convincing), then a letter for each question on paper. Then press R to reveal the script. ' +
      '<b>Question 9 = A</b> (he used lots of online resources). The audio says "thousands of websites and film clips... guiding you step-by-step". Trap <b>C — the short course</b> — is explicitly killed: "Attending classes... was totally unnecessary." Mark the word <b>unnecessary</b>. ' +
      '<b>Question 10 = C</b> (it provided many different aspects to focus on). "a vast number of issues contained within a single subject, which meant each video could be very different". ' +
      'The traps here are the star of the slide. <b>A — long-term interest</b> is contradicted ("only developed a passion... relatively recently"). ' +
      'And <b>B is the cleverest trap on the paper so far</b>: the boy <em>does</em> mention that his marks improved — but as a <b>consequence</b> of the choice, not the <b>reason</b> for it, and nobody suggested it. That is a reversed cause-and-effect trap. Ask the class to find the words that kill each option.',
  },

  /* ── 19 · Q13-14 DECIDE ── */
  {
    id: 'q13-14-decide',
    kicker: 'Real questions · Exercise 2',
    title: 'Questions 13 and 14 — another pair',
    reveal: true,
    body: `
      <div class="grid g2 fill" style="align-items:stretch;gap:14px">
        <div class="shot fill zoom"><img src="__IMG:ex2_q13_14__" alt="Questions 13 and 14"></div>
        <div style="display:flex;flex-direction:column;gap:12px;min-height:0">
          __PLAY:ex2_cafe|Play Questions 13 and 14|The real recording, played twice__
          <div class="tape fill rv" style="overflow-y:auto">
          <span class="who">Girl:</span> Have you been to that new café?
          <br><span class="who">Boy:</span> Yeah — I felt <span class="kg">totally at home</span> there from the moment I walked in.
          <br><span class="who">Girl:</span> It's like having coffee and cake at your <span class="kg">favourite relative's house</span>. But providing <span class="kr">more choice of things to eat</span>'d make it even better.
          <br><span class="who">Boy:</span> It would. I'm so pleased it's <span class="kr">open in the evening</span> — it's the perfect time to go.
          <br><span class="who">Girl:</span> It'd be great to hang out there <span class="kr">before school</span> too — <span class="kr">shame it's shut then</span>. Actually, I might ask if they have any <span class="k">jobs</span> available.
          <br><span class="who">Boy:</span> I can imagine you <span class="kr">chatting with the customers</span>.
          <br><span class="who">Girl:</span> <span class="kr">I meant in the kitchen.</span> I'm hoping to do a <span class="kg">catering course</span> after leaving school and it'd be <span class="kg">valuable experience</span> for that. And I'd have some <span class="k">extra cash</span>, of course.
          </div>
        </div>
      </div>`,
    notes:
      '<span class="t">6 min</span>Again: 15 seconds, commit, then reveal. <b>Question 13 = C</b> (welcoming atmosphere) — "totally at home", "like your favourite relative\'s house". ' +
      '<b>Question 14 = B</b> (it would help her career aims) — "hoping to do a catering course... valuable experience for that". ' +
      'This extract is unusually rich, so use it fully. Three separate traps: ' +
      '<b>A — opening hours are convenient:</b> the audio says the opposite. Evening is fine, but "shame it\'s shut" before school. That is a polarity flip. ' +
      '<b>B on Question 13 — a wide variety of food:</b> the girl asks for MORE choice, so the variety is a criticism, not a fact. ' +
      '<b>And the best one — C on Question 14, "she would meet lots of people":</b> that idea comes from the <b>boy</b> ("I can imagine you chatting with the customers") and the girl immediately corrects him: <b>"I meant in the kitchen."</b> That is a wrong-speaker trap inside Exercise 2 — exactly the trap that Exercise 5 is built on. ' +
      'Highlight "I meant in the kitchen" and tell them: when one speaker corrects the other, the correction is the answer.',
  },

  /* ── 20 · EX2 PARAPHRASE ── */
  {
    id: 'ex2-paraphrase',
    kicker: 'Exercise 2 · the golden rule',
    title: 'The correct option re-words. The traps repeat.',
    body: `
      <div class="grid g2" style="align-items:start;gap:14px">
        <div class="card r"><h3>If an option copies the audio…</h3>
          <p>…be <b>suspicious</b>, not pleased. Recognising your own word feels safe — that feeling is what the trap is made of.</p>
          <p style="margin-top:10px;font-size:19px;color:var(--navy-soft)">“more choice of things to eat” → option B, “a wide variety of food” <b>but it was a complaint</b>.</p></div>
        <div class="card g"><h3>If an option re-words the audio…</h3>
          <p>…it is often the answer. Learn to spot the four moves:</p>
          <ul class="list g" style="margin-top:10px;font-size:19px">
            <li><b>Synonym:</b> shocked → surprised</li>
            <li><b>Idiom:</b> at home → welcoming</li>
            <li><b>Cause/effect flip:</b> marks improved → <em>why</em> he chose it?</li>
            <li><b>Polarity flip:</b> “not cheap” → expensive</li>
          </ul></div>
      </div>
      <div class="ans hint" style="margin-top:16px"><span class="tag">Keep a list</span><div>Every practice paper, write the audio words on the left and the option words on the right. After three papers you will recognise the moves instantly.</div></div>`,
    notes:
      '<span class="t">3 min</span>Teach the emotional flip and make it explicit: <b>right now, recognising a word makes you feel safe. We want it to make you suspicious.</b> ' +
      'Then immediately give the caveat, because over-correction is a real risk: for pure factual questions the answer <em>can</em> be word-for-word (Question 1\'s "petrol station" was literal). So this rule is a <b>check</b>, not the decision. ' +
      'The paraphrase journal is the highest-value homework in the whole workshop. Two columns: audio wording, option wording. Ten entries per paper. That is a personal dictionary of the moves Cambridge actually uses.',
  },

  /* ── 21 · EX3 LOOK ── */
  {
    id: 'ex3-look',
    kicker: 'Exercise 3 · 8 marks',
    title: 'One talk. Eight gaps to fill.',
    body: `
      <div class="grid g2 fill" style="align-items:stretch;gap:14px">
        <div class="shot fill zoom"><img src="__IMG:ex3_instr__" alt="Exercise 3 instructions"></div>
        <div class="shot fill zoom"><img src="__IMG:ex3_q19_21__" alt="Questions 19 to 21"></div>
      </div>
      <ul class="list" style="margin-top:12px;font-size:19px;display:grid;grid-template-columns:1fr 1fr;gap:8px 30px">
        <li>One speaker, no interruptions — a talk about <b>sharks</b></li>
        <li><b>40 seconds</b> to read all eight questions first</li>
        <li>The questions <b>follow the order of the talk</b></li>
        <li>Tests stated facts, not implied meaning — <b>the cheapest 8 marks on the paper</b></li>
      </ul>
      <div style="margin-top:12px">__PLAYSM:ex3_intro|Play the Exercise 3 instructions|Hear the real 40-second reading pause__</div>`,
    notes:
      '<span class="t">3 min</span>Exercise 3 is the other "cheap" exercise: per the syllabus it tests L1, L2 and L3 only — <b>no implied meaning.</b> A well-drilled class should be banking 7 or 8 here, and any loss is a technique problem rather than an English problem. ' +
      'Point out the 40 seconds on the slide: eight questions, 40 seconds, five seconds each. The questions run in the same order as the talk, so they act as a map of the whole monologue. ' +
      'Have the class look at Questions 19 to 21 and notice something: <b>every single one offers three numbers.</b> That is a warning about what is coming.',
  },

  /* ── 22 · EX3 TECHNIQUE ── */
  {
    id: 'ex3-technique',
    kicker: 'Exercise 3 · technique',
    title: 'Use the sentence to cross out wrong options',
    sub: 'You can often delete an option before you hear a single word. Ask these three questions about the gap.',
    body: `
      <div class="grid g3" style="align-content:start;gap:14px">
        <div class="card num"><span class="n">1</span><h3>What kind of word is missing?</h3>
          <p>A noun, a number, a verb? Cross out anything that cannot fit.</p>
          <p style="margin-top:10px;font-size:19px;color:var(--navy-soft)"><em>&ldquo;&hellip;on the site of an old ___&rdquo;</em> &rarr; a <b>singular noun</b>. &ldquo;<em>a parking</em>&rdquo; is impossible.</p></div>
        <div class="card num"><span class="n">2</span><h3>Which way does the sentence point?</h3>
          <p>Is it describing something good, or something bad?</p>
          <p style="margin-top:10px;font-size:19px;color:var(--navy-soft)"><em>&ldquo;The biggest <b>problem</b> was ___&rdquo;</em> &rarr; something <b>negative</b>. A positive option is wrong already.</p></div>
        <div class="card num"><span class="n">3</span><h3>Can the sentence decide it at all?</h3>
          <p>Sometimes it cannot. If all three options fit, grammar has nothing to say &mdash; and that is useful to know.</p>
          <p style="margin-top:10px;font-size:19px;color:var(--navy-soft)"><em>&ldquo;about ___ million years ago&rdquo;</em> &rarr; 200, 250 and 400 all fit. <b>Only the audio decides.</b></p></div>
      </div>
      <div class="tape" style="margin-top:16px">
        <b>What to do when the sentence cannot decide it &mdash; Question 19:</b><br>
        The oldest of the shark species living today appeared about <b>___ million years ago</b>. &nbsp;&nbsp; <b>A</b> 200 &nbsp; <b>B</b> 250 &nbsp; <b>C</b> 400<br>
        <span class="brk">All three are numbers, so all three fit. Do not guess &mdash;</span> write <b>#</b> in the margin and listen for <b>which number belongs to which fact</b>. The audio says all three; you have to match them.
      </div>`,
    notes:
      '<span class="t">4 min</span>One message on this slide and nothing else: <b>the sentence itself can eliminate options.</b> Walk the three questions in order, and give the class about ten seconds after each one to look at their own paper. ' +
      'Be honest about question 3, because it is the part students get wrong. For Question 19 the gap is "about ___ million years ago" &mdash; 200, 250 and 400 are all valid numbers and all three are said in the audio. So the sentence cannot decide it. Say that out loud. Students who are taught that this trick always works lose confidence the first time it does not. ' +
      'What the technique IS reliable for: <b>word class</b> (a gap after "an old" cannot be a verb or an uncountable noun) and <b>direction</b> (a sentence about a "problem" wants something negative). Those two genuinely remove options before the audio starts. ' +
      'Land the habit from the box at the bottom: when all three options fit, <b>write # in the margin and match each number to its fact</b> instead of guessing which number you heard.',
  },

  /* ── 23 · MARGIN NOTES ── */
  {
    id: 'ex3-margin',
    kicker: 'Exercise 3 · during the audio',
    title: 'In the margin: symbols, not words',
    sub: 'Exercise 3 is long. You cannot hold eight questions in your head, so you write the shape of the talk instead.',
    body: `
      <div class="grid g2" style="align-items:start;gap:18px">
        <div class="card">
          <p style="font-size:14px;color:var(--navy-soft);font-weight:800;letter-spacing:.1em;text-transform:uppercase">Before the audio: number your margin 1&ndash;8</p>
          <p style="margin-top:14px;font-size:34px;font-family:'Baloo 2';font-weight:800;color:var(--navy);letter-spacing:.1em;line-height:1.5">+ &nbsp; &minus; &nbsp; ? &nbsp; X &nbsp; &rarr; &nbsp; BUT &nbsp; #</p>
          <ul class="list" style="margin-top:14px;font-size:20px">
            <li><b>+</b> good news &nbsp;&nbsp; <b>&minus;</b> bad news &nbsp;&nbsp; <b>?</b> not sure yet</li>
            <li><b>X</b> ruled out &nbsp;&nbsp; <b>&rarr;</b> cause and effect &nbsp;&nbsp; <b>BUT</b> a contradiction</li>
            <li><b>#</b> a number, a date or a price was said</li>
          </ul>
        </div>
        <div>
          <div class="ans no"><span class="tag">Not this</span><div>Writing words or full sentences. <b>Every word you write is a second you are not listening to.</b></div></div>
          <div class="ans ok" style="margin-top:14px"><span class="tag">This</span><div>One symbol per question, written on hearing 1. On hearing 2 you look at your symbols and <b>go straight back to the questions you marked ? or X</b>.</div></div>
          <div class="ans hint" style="margin-top:14px"><span class="tag">If you fall behind</span><div><b>Do not catch up on the question you missed.</b> Find the next question number and rejoin there. Chasing one lost mark is how students lose the next two.</div></div>
        </div>
      </div>`,
    notes:
      '<span class="t">3 min</span>This slide exists because Exercise 3 is where students run out of working memory. Eight questions and one long talk is more than you can hold in your head, so you write a skeleton instead. ' +
      'Make them do it physically. Tell everyone to number their margin 1 to 8 right now, then copy the seven symbols. Physically doing it once beats describing it five times. ' +
      'The two most useful symbols for the exam are <b>#</b> (a number, date or price was said here) and <b>BUT</b> (a contradiction &mdash; the speaker is about to overturn something). Between them they cover most of the traps in Exercise 3. ' +
      'The recovery rule at the bottom right is the one that saves marks: <b>if you lose a question, jump forward, never back.</b> An abandoned question is already gone; the next one is still winnable. Say it twice.',
  },

  /* ── 23 · Q19-21 DECIDE ── */
  {
    id: 'q19-21-decide',
    kicker: 'Real questions · Exercise 3',
    title: 'Questions 19, 20, 21 — three numbers each',
    reveal: true,
    body: `
      <div class="grid g2 fill" style="align-items:stretch;gap:14px">
        <div class="shot fill zoom"><img src="__IMG:ex3_q19_21__" alt="Questions 19 to 21"></div>
        <div style="display:flex;flex-direction:column;gap:12px;min-height:0">
          __PLAY:ex3_sharks|Play the shark talk|Covers Questions 19, 20 and 21__
          <div class="tape fill rv" style="overflow-y:auto">
          <span class="who">Jana Holanova:</span> Several types still found swimming in our oceans have done so for almost <span class="kg">200 million</span> years. Their ancestors emerged around <span class="kr">400 million</span> years ago, but most of these disappeared just over <span class="kr">250 million</span> years ago.
          <br><br>So where does the word ‘shark' come from? Before the sixteenth century the term <span class="kr">‘sea dog'</span> described the <span class="kr">large fish</span> that sailors often spotted. A Dutch word — <em>shurck</em> — that roughly translates as <span class="kg">‘bad person'</span> is generally accepted as the likely source.
          <br><br>The largest group, the ground sharks, is made up of just under <span class="kr">300</span> species, so well over half of the <span class="kg">500</span> or so varieties that live in our seas today. Of this total, around <span class="kr">450</span> types live fairly close to the shore.
          </div>
        </div>
      </div>`,
    notes:
      '<span class="t">6 min</span>This is the single best number-training exercise in the paper, because <b>all three questions offer three numbers and the audio says all three.</b> Give 40 seconds (the real reading time), then reveal. ' +
      '<b>Q19 = A (200).</b> The question asks about "the oldest of the shark species <b>living today</b>" — "several types <b>still found swimming</b> have done so for almost 200 million years". The traps are 400 (the <b>ancestors</b>) and 250 (when most <b>disappeared</b>). Three numbers, all real, one answers the question. ' +
      '<b>Q20 = A (bad person).</b> "shurck — which roughly translates as ‘bad person’ — is the likely source. The traps are B (sea dog — the <b>previous</b> word, a temporal reversal) and C (large fish — what ‘sea dog’ described). ' +
      '<b>Q21 = C (500).</b> "around 500 or so varieties that live in our seas today". Trap A is 300 (only the ground sharks group) and B is 450 (only those close to the shore). ' +
      'Then state the general rule: <b>in Exercise 3, every number you hear belongs to something. Your job is to match the number to the question, not to hear a number.</b> Write the candidate numbers in the margin as you hear them.',
  },

  /* ── 24 · EX4 LOOK ── */
  {
    id: 'ex4-look',
    kicker: 'Exercise 4 · 6 marks',
    title: 'Six speakers. Eight statements. Two are never used.',
    body: `
      <div class="grid g2 fill" style="align-items:stretch;gap:16px">
        <div class="shot fill zoom"><img src="__IMG:ex4_statements__" alt="Exercise 4 instructions and statements A to H"></div>
        <div class="shot fill zoom"><img src="__IMG:ex4_grid__" alt="Exercise 4 answer grid for questions 27 to 32"></div>
      </div>
      <div style="margin-top:14px">__PLAYSM:ex4_intro|Play the Exercise 4 instructions|Statements A–H and the real 30-second reading pause__</div>`,
    notes:
      '<span class="t">4 min</span>Read the instruction box aloud with the class, because it contains the rules: <b>“choose from the list (A–H) which idea each speaker expresses… Use each letter only once. There are two extra letters which you do not need to use.”</b> ' +
      'So: six speakers, eight statements, <b>each letter used once, two left over.</b> That is now confirmed from the paper itself, not a guess. ' +
      'Then read statements A to H together. Notice how similar some are: A and G and E are all about how the speaker felt; B, D and H are all reactions. <b>Several pairs share a topic but point in different directions</b> — that is the design.',
  },

  /* ── 25 · EX4 LEDGER ── */
  {
    id: 'ex4-ledger',
    kicker: 'Exercise 4 · the system',
    title: 'Six speakers plus eight statements is too much to remember',
    sub: 'So do not remember it. Write it down. This takes ten seconds to set up.',
    body: `
      <div class="grid g2" style="align-items:start;gap:16px">
        <div class="tape" style="border-left-color:var(--orange);font-size:20px">
          <b>Before speaker 1 — write this in the margin:</b><br><br>
          <span style="font-family:'Baloo 2';font-size:26px;letter-spacing:.14em;color:var(--navy)">A ___ &nbsp; B ___ &nbsp; C ___ &nbsp; D ___</span><br>
          <span style="font-family:'Baloo 2';font-size:26px;letter-spacing:.14em;color:var(--navy)">E ___ &nbsp; F ___ &nbsp; G ___ &nbsp; H ___</span>
        </div>
        <ul class="list big-list">
          <li>When speaker 2 matches statement F, write <b>2</b> beside F.</li>
          <li>Cross out letters as they are used — <b>no letter twice</b>.</li>
          <li>At the end, count: <b>6 letters used, 2 left over.</b></li>
          <li>If two speakers point at the same letter, you know where the mistake is.</li>
        </ul>
      </div>
      <div class="ans ok" style="margin-top:16px"><span class="tag">Why</span><div>The count is a <b>free error detector</b>. Most Exercise 4 mistakes are not mishearings — they are a statement used twice without noticing.</div></div>`,
    notes:
      '<span class="t">3 min</span>Make them physically build the ledger now, in the margin of their own paper. Physically doing it once beats describing it five times. ' +
      'The core insight: Exercise 4 is a <b>working-memory problem, not an English problem.</b> Six speakers plus eight statements is fourteen items — more than anyone holds reliably. The written ledger is what makes it survivable. ' +
      'The counting trick at the end is the part students never think of: six speakers must consume six different letters, with two left over. If two speakers point at F, there is an error and they know exactly where to look. ' +
      'Also: <b>never leave a speaker blank.</b> A blank scores zero for certain; a reasoned elimination often scores.',
  },

  /* ── 26 · Q27-28 DECIDE ── */
  {
    id: 'q27-28-decide',
    kicker: 'Real questions · Exercise 4',
    title: 'Speakers 1 and 2 — which statement fits?',
    sub: 'Statements A–H are on the previous slide. You have 30 seconds.',
    reveal: true,
    body: `
      <div class="grid g2 fill" style="align-items:stretch;gap:14px">
        <div class="shot fill zoom"><img src="__IMG:ex4_grid__" alt="Exercise 4 grid"></div>
        <div style="display:flex;flex-direction:column;gap:12px;min-height:0">
          __PLAY:ex4_speakers12|Play Speakers 1 and 2|The real recording, played twice__
          <div class="tape fill rv" style="overflow-y:auto">
          <span class="who">Speaker 1 (girl, Australian):</span> I took part in a talent show last week, thinking it'd be the <span class="kr">first and last time</span>, but my performance showed enough promise to <span class="kr">have another go</span>. I'm <span class="kg">astonished</span> it went as well as it did, because the first competitor sang the same song as I was due to perform, so I rapidly <span class="kg">decided to switch my choice of music</span>. This actually helped <span class="kr">reduce my anxiety</span>.
          <br><br><span class="who">Speaker 2 (boy, UK):</span> I play guitar and decided to enter a talent show at school. Considering I <span class="kg">spent every spare minute I had practising</span> the piece of music I chose for it, I would've been <span class="kr">amazed if I'd finished last</span>. Even so, I wasn't expecting to be good enough to win, which is what happened. The people watching were mainly parents and family, so it's <span class="kr">hardly surprising</span> they clapped everyone so enthusiastically, but it was nice to hear.
          </div>
        </div>
      </div>`,
    notes:
      '<span class="t">6 min</span>Give the real 30 seconds, then commit. <b>Q27 = E</b> (I changed my mind about what I\'d perform at the last minute) — "I rapidly decided to switch my choice of music". <b>Q28 = C</b> (I prepared for it as well as I could) — "I spent every spare minute I had practising". ' +
      'Now do the real work: show how many statements are <b>built from the speaker\'s own words and then reversed.</b> ' +
      'For Speaker 1: <b>A</b> ("I don\'t think I\'ll ever enter another one") is undone by "showed enough promise to have another go". And <b>G</b> ("I had never felt so nervous") is undone because the extract says her anxiety was <em>reduced</em>. ' +
      'For Speaker 2: <b>D</b> ("I was sure I was going to come in last place") is the exact reversal — he says he would have been <b>amazed</b> to finish last. And <b>H</b> ("I was amazed by the audience\'s reaction") is undone by "it\'s <b>hardly surprising</b> they clapped everyone". ' +
      'So three of the eight statements are traps made of the speakers\' own vocabulary, flipped. Ask the class to name the flip-words: <em>but, hardly, reduced, never again</em>.',
  },

  /* ── 27 · EX5 LOOK ── */
  {
    id: 'ex5-look',
    kicker: 'Exercise 5 · 8 marks',
    title: 'One interview. Eight questions. One speaker who counts.',
    body: `
      <div class="grid g2 fill" style="align-items:stretch;gap:14px">
        <div class="shot fill zoom"><img src="__IMG:ex5_instr__" alt="Exercise 5 instructions"></div>
        <div class="shot fill zoom"><img src="__IMG:ex5_q33_36__" alt="Questions 33 to 36"></div>
      </div>
      <div style="margin-top:14px">__PLAYSM:ex5_intro|Play the Exercise 5 instructions|Hear the real 45-second reading pause__</div>`,
    notes:
      '<span class="t">4 min</span>Read the instruction line with them: <b>"You will hear an interview with a competitive skateboarder called Mikaela Quayle."</b> Then the key sentence from the syllabus — the questions test information expressed by <b>the main speaker</b>. ' +
      'Define "main speaker" operationally: <b>the person being interviewed</b>, the one who answers. The interviewer is scaffolding. ' +
      'That gives the most important habit in Exercise 5: <b>before you hear a word, decide which voice is the one that counts</b> and mark it on your paper. Then as you listen, tag every opinion as INT or MAIN. ' +
      'Also flag the 45 seconds: this is the longest reading pause in the paper, and it is there because there are eight questions.',
  },

  /* ── 28 · EX5 ATTRIBUTION ── */
  {
    id: 'ex5-attribution',
    kicker: 'Exercise 5 · technique',
    title: 'Ask “who said it?” before “is it true?”',
    body: `
      <div class="grid g2" style="align-items:start;gap:16px">
        <div class="card r"><h3>The interviewer is a trap factory</h3>
          <p>The interviewer asks, guesses and summarises. Any of those can be turned into a wrong option — because they <em>are</em> in the audio.</p>
          <p style="margin-top:12px;font-size:20px;color:var(--navy)"><em>“So it was all about the charity, then?”</em><br><em>“You must have been exhausted?”</em></p>
          <p style="margin-top:12px">Those are <b>questions, not facts.</b> The answer is in the main speaker's reply — especially if they correct it.</p></div>
        <div class="card g"><h3>Wait for the correction</h3>
          <p>When the main speaker disagrees with the interviewer, <b>the correction is the answer.</b> Listen for:</p>
          <p style="margin-top:12px;font-family:'Baloo 2';font-size:24px;color:var(--navy)">not exactly · well, not quite · that's not how I'd put it · I meant…</p>
          <p style="margin-top:12px">And distrust the interviewer's summary: the rebuttal that follows it is where the mark is.</p></div>
      </div>
      <div class="ans two" style="margin-top:16px"><span class="tag">The habit</span><div>Tag every opinion in your head: <b>INT says…</b> or <b>MAIN says…</b>. It costs nothing and it removes the single most common Exercise 5 error.</div></div>`,
    notes:
      '<span class="t">3 min</span>Attribution is <b>the</b> Exercise 5 skill. Name it and make it a habit: mentally prefix every opinion with INT or MAIN. ' +
      'Two versions to teach. First, the interviewer\'s guess becomes a wrong option ("You must have been exhausted?") — students mark it because it sounds like a description of the situation, but it is a <b>question</b>. Second, the interviewer\'s summary becomes a wrong option, and the main speaker rebuts it. ' +
      'Give them the correction markers: <em>not exactly, well not quite, that\'s not how I\'d put it, I meant</em>. ' +
      'And point back: this exact trap already appeared in Exercise 2, when the girl corrected the boy — "I meant in the kitchen." It is one idea appearing across exercises.',
  },

  /* ── 29 · Q33-34 DECIDE ── */
  {
    id: 'q33-34-decide',
    kicker: 'Real questions · Exercise 5',
    title: 'Questions 33 and 34 — the interview begins',
    reveal: true,
    body: `
      <div class="grid g2 fill" style="align-items:stretch;gap:14px">
        <div class="shot fill zoom"><img src="__IMG:ex5_q33_36__" alt="Questions 33 to 36"></div>
        <div style="display:flex;flex-direction:column;gap:12px;min-height:0">
          __PLAY:ex5_q33_34|Play Questions 33 and 34|The interview begins here__
          <div class="tape fill rv" style="overflow-y:auto">
          <span class="who">Interviewer:</span> I'm talking to fifteen-year-old Mikaela Quayle. How did it start?
          <br><span class="who">Mikaela:</span> I was learning to walk and Dad noticed I hardly ever fell over. As a skateboarder himself, <span class="kr">he said</span>, ‘Let's put her on a skateboard' — I was eighteen months old! I couldn't do anything, but the balance was there. <span class="kg">I've no memory of that</span>, but I was <span class="kr">never without my skateboard</span> as I grew up. Other kids take toys on car journeys — I had my skateboard!
          <br><br><span class="who">Mikaela:</span> When I was three, Dad took me to the skateboard park. I just stayed at the bottom. I <span class="kr">didn't necessarily admire the older skaters</span>, I just felt I was one of them. <span class="kg">I wanted to try tricks, and was shocked when I realised how hard it was.</span> But I didn't give up and eventually managed a small jump.
          </div>
        </div>
      </div>`,
    notes:
      '<span class="t">6 min</span>45 seconds of reading time, then commit. <b>Q33 = C</b> (she has forgotten first getting on a skateboard) — "I\'ve no memory of that". <b>Q34 = B</b> (surprised by the challenges involved) — "I was <b>shocked</b> when I realised how hard it was"; <em>shocked</em> re-worded as <em>surprised</em>. ' +
      'The traps are worth more than the answers here. ' +
      '<b>Q33 option A</b> — "she refused to use any transport other than her skateboard". The audio says she was "never without" it and took it on car journeys. That is close, but "refused any other transport" is an overstatement — a <b>degree shift</b>. ' +
      '<b>Q33 option B</b> — "she hoped to satisfy her father\'s dreams". The audio says it was <b>Dad\'s idea</b>, but nothing about her hoping to satisfy his dreams. That is an <b>invented motive</b> built from real content. ' +
      '<b>Q34 option C</b> — "excited to watch other skateboarders" is directly negated: "I <b>didn\'t necessarily admire</b> the older skaters." ' +
      'Finish by pointing at the word "shocked": that single word is the whole of Q34, and it is a <b>paraphrase</b> question, not a fact.',
  },

  /* ── 30 · EX5 OPINION LANGUAGE ── */
  {
    id: 'ex5-language',
    kicker: 'Exercise 5 · language',
    title: 'The words that give away an opinion',
    sub: 'L2 and L4 questions are won or lost on these phrases. Each column below does a different job.',
    body: `
      <div class="grid g3" style="align-content:start;gap:14px">
        <div class="card"><span class="pill">Column 1</span><h3 style="margin-top:10px">An opinion is coming</h3>
          <p style="font-size:19px"><b>to be honest &middot; if I&rsquo;m honest &middot; I&rsquo;d say &middot; I suppose &middot; frankly &middot; I must admit</b></p>
          <p style="margin-top:12px;font-size:19px;color:var(--orange-dk)"><b>What to do:</b> get ready. The answer is in the <b>next few words</b>.</p></div>
        <div class="card"><span class="pill">Column 2</span><h3 style="margin-top:10px">The meaning is about to flip</h3>
          <p style="font-size:19px"><b>but &middot; however &middot; although &middot; actually &middot; that said &middot; hardly &middot; only</b></p>
          <p style="margin-top:12px;font-size:19px;color:var(--orange-dk)"><b>What to do:</b> cross out whatever came <b>before</b> it. That part is the trap.</p></div>
        <div class="card"><span class="pill">Column 3</span><h3 style="margin-top:10px">A feeling, with no feeling word</h3>
          <p style="font-size:19px">it grew on me &middot; I could take it or leave it &middot; it left me cold &middot; I wasn&rsquo;t blown away &middot; it fell flat &middot; not really my thing</p>
          <p style="margin-top:12px;font-size:19px;color:var(--orange-dk)"><b>Why it matters:</b> the options paraphrase these, so you have to know what each one <b>means</b>.</p></div>
      </div>
      <div class="ans hint" style="margin-top:16px"><span class="tag">Build one page</span><div>Add every new phrase you meet to a single page in your notes. That page is worth more than another whole practice paper.</div></div>`,
    notes:
      '<span class="t">4 min</span>This is a <b>signal</b> slide, not a vocabulary list. The three columns do three different jobs, so teach them as three separate instructions rather than as one list of words. ' +
      'Column 1 tells you an opinion is arriving. Demonstrate it live: say "if I\'m honest, &hellip;" and have the class say "here it comes" back to you. When a speaker uses any of those phrases, the answer is in the next clause. That is the whole of column 1. ' +
      'Column 2 is the highest-value family in the entire paper. <b>Everything before but / however / actually / that said is the decoy.</b> You can prove it from questions they have already seen: Question 1 ("it\'s actually next to the petrol station"), Question 13 ("shame it\'s shut"), Question 10 ("improved greatly as a result" &mdash; a consequence, not a reason) and Speaker 1 in Exercise 4. Make that connection out loud: it is one idea reappearing in every single exercise. ' +
      'Column 3 is a vocabulary job, and it is finite. "It left me cold", "it fell flat", "I could take it or leave it" are exactly the kind of hedged evaluation that options paraphrase into "she was disappointed". If a student does not know the phrase, the mark is gone before technique can help. ' +
      'Set the task at the bottom: one page, added to after every practice paper. Not a textbook list &mdash; their own list.',
  },

];
