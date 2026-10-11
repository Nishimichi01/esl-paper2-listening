/* ═══ PART I — EXAM CRAFT & PRACTICE (slides 45–54) ═══ */

export const i = [
  /* ── 45 ──────────────────────────────────────────── */
  {
    id: 'timing-map',
    kicker: 'Exam craft · 1 of 6',
    title: 'Where your attention is worth spending',
    sub: 'Every question is worth exactly one mark — but the questions do not cost the same amount of effort. Spend accordingly.',
    body: `
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th class="ex">Ex</th><th>What you are managing</th><th class="cen">Marks</th><th class="cen">Audio per mark</th><th>Attention strategy</th></tr></thead>
          <tbody>
            <tr><td class="ex">1</td><td>8 tiny extracts, fast rhythm</td><td class="cen num">8</td><td class="cen">short</td><td><span class="pill pill-g">Commit instantly</span> — no value in deliberating</td></tr>
            <tr><td class="ex">2</td><td>5 extracts × 2 questions</td><td class="cen num">10</td><td class="cen">short</td><td><span class="pill pill-b">Highest value</span> — protect this concentration</td></tr>
            <tr><td class="ex">3</td><td>1 long monologue, 8 items</td><td class="cen num">8</td><td class="cen">medium</td><td><span class="pill pill-b">Margin-map</span> — track the signposts, do not drift</td></tr>
            <tr><td class="ex">4</td><td>6 speakers vs 8 statements</td><td class="cen num">6</td><td class="cen">medium</td><td><span class="pill pill-a">Highest load</span> — the ledger does the remembering</td></tr>
            <tr><td class="ex">5</td><td>1 long interview, 8 questions</td><td class="cen num">8</td><td class="cen">longest</td><td><span class="pill pill-v">Attribution</span> — tag INT/MAIN, watch the endgame</td></tr>
          </tbody>
        </table>
      </div>
      <div class="s-grid s-grid--3 mt-14">
        <div class="s-card tint-g"><h3><span class="ico">🪙</span>16 marks are “cheap”</h3><p>Exercises 1 and 3 test only L1–L3 and are 8 marks each. <b>These are the marks a well-drilled B2/C1 student can almost bank.</b></p></div>
        <div class="s-card tint-r"><h3><span class="ico">🧠</span>Exercise 4 is a load problem</h3><p>Six speakers plus eight statements is more than working memory holds — for just 6 marks. <b>The written ledger is not optional; it is the answer.</b></p></div>
        <div class="s-card tint-a"><h3><span class="ico">🏁</span>Do not fade at the end</h3><p>Exercise 5 has the longest audio for the same one mark per question. <b>The last 10 minutes decide whether a 30 becomes a 34.</b></p></div>
      </div>
      <div class="footnote">The syllabus specifies “approximately 50 minutes (including 6 minutes' transfer time)” and 40 marks. Per-exercise audio durations vary by series and are not published in advance — the column above is a relative description, not a timetable.</div>`,
    notes:
      '<span class="ntime">3 min</span>This is an attention-allocation slide, not a stopwatch slide. Be careful to state the honest position: the syllabus specifies only "approximately 50 minutes, including 6 minutes\' transfer time", with 40 marks. Per-exercise durations vary and are not published, so do not present exact seconds as fact. ' +
      'The strategic content is the three cards. First, <b>18 cheap marks</b> sit in Exercises 1 and 3 — the two exercises that test only L1 to L3. For your cohort, those are the marks that should already be banked, and any loss there is a technique bug. ' +
      'Second, <b>Exercise 4 is a working-memory problem</b>, not an English problem: 14 items to track for six marks, where each statement is used only once. The written ledger is what makes it survivable. ' +
      'Third, the endgame. Exercise 5 is the longest extract with the same one mark per question, and it is where fatigue shows. Students who fade there lose 3–4 marks they had the English to win. Practically: warn them to keep pen and attention alive through the final extract, and to use the transfer minutes to re-check Exercise 5 first, since it is the most recently loaded. ' +
      'Also note honestly: Exercises 2 and 4 include L4, so they are not purely technique. But Exercises 1 and 3 genuinely are L1–L3 only, which is why they are the training priority.',
  },

  /* ── 46 ──────────────────────────────────────────── */
  {
    id: 'transfer-protocol',
    kicker: 'Exam craft · 2 of 6',
    title: 'The six-minute transfer protocol',
    sub: 'Six minutes. Forty answers. This is the only part of the paper you fully control — and it is where quiet catastrophes happen.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="s-steps">
            <div class="s-step"><span class="sn">0</span><div class="sbody"><span class="st">Before: write your letter once, clearly, beside each question</span>
              <span class="sd">The transfer is a copying exercise. It only goes wrong if the source is ambiguous. Circle your final letters <b>firmly</b> during the test.</span></div></div>
            <div class="s-step"><span class="sn">1</span><div class="sbody"><span class="st">Minutes 1–4: transfer in blocks of five</span>
              <span class="sd">Questions 1–5, then check the block, then 6–10. Blocks give you restart points. Do not transfer one at a time from 1 to 40.</span></div><span class="stag">4 min</span></div>
            <div class="s-step a"><span class="sn">2</span><div class="sbody"><span class="st">Cover the rest of the sheet with your hand</span>
              <span class="sd">This is the single most effective anti-“off-by-one” technique. You cannot drift to the wrong line if you cannot see the next line.</span></div></div>
            <div class="s-step r"><span class="sn">3</span><div class="sbody"><span class="st">Minutes 5–6: sweep for blanks and line-up</span>
              <span class="sd">Check: every line has a letter · no double-shaded answers · the count matches (8 + 10 + 8 + 6 + 8 = 40) · your candidate number is correct.</span></div><span class="stag">2 min</span></div>
          </div>
        </div>
        <div>
          <div class="callout bad"><b>The three transfer disasters.</b>
            <ul class="s-bullets no mt-6">
              <li><b>Off-by-one.</b> One skipped line late in the sheet misaligns everything after it. Fix: blocks of five + cover the lines below.</li>
              <li><b>Double-shading.</b> Two letters shaded on one line — typically marked wrong. If you change your mind, erase <em>completely</em>.</li>
              <li><b>Blank lines.</b> A blank line is a certain zero; a guess may be right. Cambridge does not deduct marks for wrong answers on multiple-choice papers.</li>
            </ul></div>
          <div class="callout ok mt-14"><b>The count check is your safety net.</b> 8 + 10 + 8 + 6 + 8 = <b>40</b>. If your last answer is on line 40, you almost certainly transferred correctly. If it is on line 39, you skipped a line — and you have two minutes to find it.</div>
          <div class="callout info mt-14"><b>Six minutes for forty lines is comfortable.</b> Roughly nine seconds per answer. That is enough time to be careful — so there is no excuse for rushing, and no reason to skip the sweep.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>The syllabus is explicit: after the last exercise, candidates <b>transfer their answers onto a separate answer sheet and have six minutes to do this</b>. Six minutes for 40 lines is about nine seconds per answer — genuinely comfortable. The risk here is not time pressure, it is mechanical error. ' +
      'Teach the block-of-five method and explain why blocks work: they give you restart points. A candidate who transfers 1 to 40 in one continuous run has no checkpoint, so a skipped line late in the sheet is invisible until the end. ' +
      'The hand-covering technique is the most effective single fix for off-by-one errors and it takes one second to adopt. Demonstrate it. ' +
      'Then the count check — this is the real safety net and it is arithmetic the students already know: 8 + 10 + 8 + 6 + 8 = 40. If the final answer lands on line 40, the transfer is almost certainly aligned. If it lands on 39, a line was skipped and there are still minutes to find it. ' +
      'Finally, say the unpopular thing out loud: <b>a blank line is a certain zero</b>, and Cambridge does not deduct marks for wrong answers on multiple-choice papers, so an educated guess is always better than nothing. Illustrate with Exercise 1: four options means a blind guess is worth 0.25 of a mark on average, so eight blank lines hand back about two marks. ' +
      'One more practical point worth adding verbally: tell them to fill in candidate details <b>before</b> the audio starts if they are allowed to, and to check the digits, not just write them.',
  },

  /* ── 47 ──────────────────────────────────────────── */
  {
    id: 'top-mistakes',
    kicker: 'Exam craft · 3 of 6',
    title: 'Twelve avoidable mistakes — ranked by cost',
    dense: true,
    sub: 'None of these are about English ability. Every one of them is a decision you can pre-make today.',
    body: `
      <div class="s-grid s-grid--3">
        <div>
          <div class="s-card tint-r"><h3><span class="ico">1</span>Not reading the options in the silence</h3><p>Unread options plus a familiar word equals a confident wrong answer.</p></div>
          <div class="s-card tint-r mt-10"><h3><span class="ico">2</span>Choosing the option you recognise</h3><p>Word-spotting is the single most productive distractor design. Distrust the echo.</p></div>
          <div class="s-card tint-r mt-10"><h3><span class="ico">3</span>Missing a negation</h3><p><em>“Not nine.”</em> <em>“It wasn't expensive.”</em> One small word reverses the answer.</p></div>
          <div class="s-card tint-r mt-10"><h3><span class="ico">4</span>Missing the <em>but</em></h3><p>Everything before the pivot is the decoy. The verdict comes after.</p></div>
        </div>
        <div>
          <div class="s-card tint-a"><h3><span class="ico">5</span>Answering from the interviewer</h3><p>Right content, wrong mouth. Ask <b>who said it</b> before <b>is it true</b>.</p></div>
          <div class="s-card tint-a mt-10"><h3><span class="ico">6</span>Re-reading all options on hearing 2</h3><p>You do not have time. Narrow to your two candidates and hunt the trap.</p></div>
          <div class="s-card tint-a mt-10"><h3><span class="ico">7</span>Chasing a lost item</h3><p>Abandoned marks stay abandoned. Redirect to the next question number immediately.</p></div>
          <div class="s-card tint-a mt-10"><h3><span class="ico">8</span>Writing words instead of symbols</h3><p>Every word written is a second not heard. Numbers and symbols only.</p></div>
        </div>
        <div>
          <div class="s-card tint-v"><h3><span class="ico">9</span>Translating in your head</h3><p>It consumes the working memory you need for the next sentence. Listen for meaning.</p></div>
          <div class="s-card tint-v mt-10"><h3><span class="ico">10</span>Leaving blanks</h3><p>A blank is a certain zero; a guess is not. Cambridge does not deduct marks for wrong MCQ answers.</p></div>
          <div class="s-card tint-v mt-10"><h3><span class="ico">11</span>Off-by-one transfer</h3><p>Right answers, wrong lines. Blocks of five and cover the sheet below.</p></div>
          <div class="s-card tint-v mt-10"><h3><span class="ico">12</span>Fading in the last 10 minutes</h3><p>Exercise 5 is the longest extract and the easiest place to lose 3–4 recoverable marks.</p></div>
        </div>
      </div>
      <div class="callout ok mt-14"><b>Take one and own it.</b> Each of these is fixed by a decision, not by more study — and you will get every one of them right in the mock if you choose to. <b>Choose the two that already sound like you, and write them on the front of your question paper habitually.</b></div>`,
    notes:
      '<span class="ntime">4 min</span>Do not read all twelve aloud — that is a wall of text. Instead, ask the class to identify two that sound like them, and take a show of hands per item. You will find that items 1, 2, 3 and 12 attract almost everybody, which is exactly the point: <b>the losses are clustered and predictable</b>. ' +
      'Ranking note: items 1–4 are the most expensive because they operate across all five exercises. Item 12 is the most expensive in terms of recoverable-but-lost marks, because the final exercise is the longest and fatigue is guaranteed. ' +
      'The closing instruction is the important one: each mistake is fixed by a <b>decision</b>, not by more study. That is a genuinely motivating framing for a Year 10 group who may feel that the exam is about ability. It is not — a large fraction of the paper is about procedure. ' +
      'Practical follow-up you can set: have each student write their two personal mistakes on the front of every practice paper before starting, and tick them off at the end. It is a trivial ritual with a measurable effect.',
  },

  /* ── 48 ──────────────────────────────────────────── */
  {
    id: 'four-week-plan',
    kicker: 'Exam craft · 4 of 6',
    title: 'The four-week practice plan',
    sub: 'Structure beats volume. What matters is that each week has one focus, one paper, and one review that names your errors.',
    body: `
      <div class="s-grid s-grid--4">
        <div class="s-card tint-b"><span class="tag tag-b">Week 1</span>
          <h3>Diagnose, do not improve</h3>
          <ul class="s-bullets mt-6" style="font-size:0.8rem">
            <li>One full paper, untimed, with the transcript afterwards.</li>
            <li>Label <b>every</b> error with the trap number (1–9).</li>
            <li>Classify each error: <b>perception / parsing / utilisation</b>.</li>
            <li>Start the paraphrase journal — 10 entries.</li>
          </ul>
          <p class="mt-10" style="color:#9FD0FF"><b>Output:</b> a list of your two weakest trap types.</p>
        </div>
        <div class="s-card tint-a"><span class="tag tag-a">Week 2</span>
          <h3>Attack the weak exercise</h3>
          <ul class="s-bullets mt-6" style="font-size:0.8rem">
            <li>Micro-listening transcription, 3× (5–10 min).</li>
            <li>Number/date dictation, 2× (3 min).</li>
            <li>Twenty Exercise-1 and Exercise-3 items, full speed.</li>
            <li>Target the exercise you scored worst in, not the easiest one.</li>
          </ul>
          <p class="mt-10" style="color:#FFE09B"><b>Output:</b> your Exercise-1 score should reach 7–8.</p>
        </div>
        <div class="s-card tint-v"><span class="tag tag-v">Week 3</span>
          <h3>Attack the interpretive marks</h3>
          <ul class="s-bullets mt-6" style="font-size:0.8rem">
            <li>One full paper under exam conditions.</li>
            <li>Then re-do <b>only</b> Exercises 2, 4 and 5 with the transcript.</li>
            <li>Quote the phrase that licenses each answer — no quote, no mark.</li>
            <li>Build the stance-language list from part 7.</li>
          </ul>
          <p class="mt-10" style="color:#D6C6FF"><b>Output:</b> every answer traced to a specific phrase.</p>
        </div>
        <div class="s-card tint-g"><span class="tag tag-g">Week 4</span>
          <h3>Rehearse the whole thing</h3>
          <ul class="s-bullets mt-6" style="font-size:0.8rem">
            <li>Two full papers, timed, including the 6-minute transfer.</li>
            <li>Practise the transfer with a real answer sheet and a pen.</li>
            <li>Run the self-assessment checklist.</li>
            <li>No new vocabulary this week — only technique.</li>
          </ul>
          <p class="mt-10" style="color:#8BEBC6"><b>Output:</b> a consistent score, and a repeatable routine.</p>
        </div>
      </div>
      <div class="callout warn mt-14"><b>The rule that makes the plan work:</b> never do a paper without reviewing it. A paper you do not analyse teaches you almost nothing — you simply rehearse your existing habits. <b>An hour of review is worth three papers of practice.</b></div>`,
    notes:
      '<span class="ntime">4 min</span>Present the plan as a system with a rule rather than as four lists. The rule is at the bottom and it is the most important sentence: <b>never do a paper without reviewing it.</b> Students default to volume — paper after paper — and rehearse their existing habits instead of changing them. ' +
      'Week 1 is deliberate: diagnose, do not improve. Making the first week analysis-only is counter-intuitive and effective, because it produces the target list the rest of the month is aimed at. ' +
      'Week 2 targets the cheap marks — Exercises 1 and 3, which test only L1 to L3, plus the perceptual drills. The measurable output is Exercise 1 reaching 7–8. That is a concrete, achievable milestone for a B2-high cohort. ' +
      'Week 3 targets the interpretive marks — Exercises 2, 4 and 5, which include L4 and account for 24 of the 40 marks. The discipline is the licensing quote: no quote, no mark. ' +
      'Week 4 is rehearsal, including the mechanical transfer with a real answer sheet. Explicitly tell them <b>no new vocabulary in the last week</b> — technique only. The last week is for stabilising a routine, not for adding material. ' +
      'Adapt the timetable freely: this is four focus-areas, not four calendar weeks. Some classes will want one week per focus per exercise set.',
  },

  /* ── 49 ──────────────────────────────────────────── */
  {
    id: 'drill-menu',
    kicker: 'Exam craft · 5 of 6',
    title: 'The drill menu — what to do, and how long for',
    sub: 'Six activities, all evidence-linked, all short. Pick two or three and run them consistently rather than all six occasionally.',
    body: `
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Drill</th><th>What it trains</th><th class="cen">Time</th><th class="cen">Frequency</th><th>Why it works</th></tr></thead>
          <tbody>
            <tr><td><b>Micro-listening transcription</b></td><td>Perception — hearing word boundaries</td><td class="cen">5–10 min</td><td class="cen">2–3×/week</td><td>Targets decoding, independently of vocabulary size (Field 2003)</td></tr>
            <tr><td><b>Number &amp; date dictation</b></td><td>The trap-rich content type</td><td class="cen">3 min</td><td class="cen">2×/week</td><td>Cheapest mark-recovery drill available</td></tr>
            <tr><td><b>Dictogloss</b></td><td>L1/L3 — reconstructing a text</td><td class="cen">20–30 min</td><td class="cen">per fortnight</td><td>Forces structure-building, not word-catching</td></tr>
            <tr><td><b>Shadowing</b></td><td>Perception, tolerance of speech rate</td><td class="cen">10–15 min</td><td class="cen">daily block</td><td>Trains processing speed through repetition</td></tr>
            <tr><td><b>Narrow listening</b></td><td>Topic-specific vocabulary in context</td><td class="cen">15–20 min</td><td class="cen">weekly</td><td>Several short recordings on one topic</td></tr>
            <tr><td><b>Easy extensive listening</b></td><td>Automaticity with fast speech</td><td class="cen">15–20 min</td><td class="cen">habitual</td><td>Speed comes from volume of <em>comfortable</em> input (Renandya &amp; Farrell 2011)</td></tr>
            <tr><td><b>Full-paper + metacognitive review</b></td><td>Monitoring and repair</td><td class="cen">30–40 min</td><td class="cen">weekly</td><td>The review, not the paper, produces the gain</td></tr>
          </tbody>
        </table>
      </div>
      <div class="s-grid s-grid--3 mt-14">
        <div class="callout ok"><b>If you only have 15 minutes a week:</b> micro-listening, 3 × 5 minutes. Highest evidence, lowest cost, and it targets the most common B2/C1 breakdown.</div>
        <div class="callout info"><b>If you have an hour a week:</b> add number dictation (2 × 3 min) and one full-paper review (30 min). That is a complete programme.</div>
        <div class="callout warn"><b>Do not do seven drills badly.</b> Consistency beats variety here. Two drills, every week, for a term, will outperform a different activity each week.</div>
      </div>
      <div class="footnote">Evidence links: Field (2003) <em>ELT Journal</em> 57(4) on lexical segmentation and micro-listening; Vandergrift &amp; Tafaghodtari (2010) <em>Language Learning</em> 60(2) on the metacognitive cycle; Graham &amp; Macaro (2008) <em>Language Learning</em> 58(4) on clustered strategy instruction; Renandya &amp; Farrell (2011) <em>ELT Journal</em> 65(1) on extensive listening. Session timings are practical estimates rather than measured dosages, except where a study duration is named.</div>`,
    notes:
      '<span class="ntime">4 min</span>This is the "what do I actually do tonight" slide, so keep it practical. Six activities, each with a time and a frequency, and each linked to a body of evidence. Do not read the table — point at the two or three you want your class to adopt. ' +
      'For a B2-high/C1 Year 10 group, my recommendation is the first two rows: <b>micro-listening transcription</b> (5–10 minutes, two or three times a week) and <b>number dictation</b> (3 minutes, twice a week). Together that is under 30 minutes a week, it targets the most common decoding failures, and it is easy to sustain. Everything else is optional enrichment. ' +
      'Explain the theory in one line so the drills do not feel arbitrary: Field (2003) showed that failure to find word boundaries is a primary cause of breakdown and is independent of vocabulary size — so transcription practice works on the real bottleneck rather than on vocabulary. And Renandya &amp; Farrell (2011) argue automaticity with fast speech comes from <b>volume of easy input</b>, which is why "extensive easy listening" appears here as a serious activity rather than as a reward. ' +
      'For the metacognitive cycle, the key line is that <b>the review produces the gain, not the paper</b>. Vandergrift & Tafaghodtari (2010) found cycle-trained groups significantly outperformed controls over a semester — and notably the <b>less-skilled</b> listeners gained most. ' +
      'Be transparent about the evidence: the dril d timings are practical estimates, not measured dosages, except where a study duration is named. Say so if a student challenges the numbers — it models good academic honesty.',
  },

  /* ── 50 ──────────────────────────────────────────── */
  {
    id: 'metacognitive-review',
    dense: true,
    kicker: 'Exam craft · 6 of 6',
    title: 'The review cycle that actually raises your score',
    sub: 'Five steps after every practice paper. This is the metacognitive listening cycle adapted for self-study — and it is where the improvement happens.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="s-steps">
            <div class="s-step"><span class="sn">1</span><div class="sbody"><span class="st">Plan — predict before you listen</span>
              <span class="sd">Before starting a paper, scan the questions and say what you expect: topics, answer types, likely vocabulary. Write three predictions down. This is the "T" step made deliberate.</span></div></div>
            <div class="s-step"><span class="sn">2</span><div class="sbody"><span class="st">First listen — no stopping, no rewinding</span>
              <span class="sd">Full exam conditions for this listen, even in practice. Mark your confidence with ✓ or ? beside each answer.</span></div></div>
            <div class="s-step"><span class="sn">3</span><div class="sbody"><span class="st">Second listen — find where it broke</span>
              <span class="sd">Before marking, replay and note the <b>exact moment</b> you lost each question. Not the answer — the moment. This is the diagnostic gold.</span></div></div>
            <div class="s-step a"><span class="sn">4</span><div class="sbody"><span class="st">Analyse — with the transcript</span>
              <span class="sd">For each error: what phrase licensed the right answer? Name the <b>trap type</b> (1–9) and the <b>breakdown level</b> (perception / parsing / utilisation). Add two entries to your paraphrase journal.</span></div></div>
            <div class="s-step g"><span class="sn">5</span><div class="sbody"><span class="st">Reflect — set one goal only</span>
              <span class="sd">Not five. One. <em>“This week I will catch every negation.”</em> One goal per paper, carried into the next — that is how a habit is built.</span></div></div>
          </div>
        </div>
        <div>
          <div class="callout ok"><b>Why this beats doing more papers.</b> A paper you do not analyse rehearses your existing habits. The metacognitive cycle forces you to compare your prediction with the reality, locate the breakdown, and name the cause — and it is the step that has been shown to produce measurable improvement over a term (Vandergrift &amp; Tafaghodtari 2010).</div>
          <div class="callout warn mt-14"><b>The temptation at step 4: writing “careless”.</b> “Careless” is not diagnosable and therefore cannot be fixed. Every error must be labelled with a trap number or a breakdown level, or it will simply repeat.</div>
          <div class="callout info mt-14"><b>The one-goal rule at step 5 is not soft.</b> Five goals is the same as no goals — nothing gets attention. One goal per paper, written at the top of the next paper, is how a specific listening habit is installed in about three weeks.</div>
          <div class="callout mt-14"><b>Do this with three papers and you will know your own profile</b>: which exercises cost you marks, which trap types recur, and whether your problem is decoding, structure or interpretation. That knowledge is worth more than another ten mock papers.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>This is the method slide you most want students to take home, and its content is the <b>metacognitive pedagogical cycle</b> from Vandergrift & Goh — plan, listen, listen again, analyse, reflect. The research finding is important and worth stating: cycle-trained groups significantly outperformed controls over a semester, and the <b>less-skilled</b> listeners gained most (Vandergrift & Tafaghodtari 2010, <em>Language Learning</em> 60(2)). ' +
      'Step 3 is the one most students have never done: find the <b>moment</b> you lost the question, not just the right answer. Knowing you lost item 5 during a number sequence is actionable; knowing item 5 was wrong is not. ' +
      'Step 4 carries the rule about "careless" — make it a class rule: no error may be labelled careless. It must get a trap number or a breakdown level. This turns feedback from an emotional event into a technical one, which is much better for Year 10. ' +
      'Step 5, the one-goal rule, is easy to say and easy to drop. Enforce it structurally: the goal goes at the top of the <em>next</em> paper. One goal, carried forward, for three weeks. ' +
      'If you can only get your class to do one thing from the whole workshop outside lessons, make it steps 3 and 4 of this cycle.',
  },

  /* ── 51 ──────────────────────────────────────────── */
  {
    id: 'self-assessment',
    kicker: 'Self-assessment',
    title: 'Are you actually exam-ready?',
    sub: 'Ten statements. Tick the ones that are genuinely, reliably true — not the ones that are true when you are fresh and the room is quiet.',
    body: `
      <div class="check">
        <div class="ci"><span class="box"></span><span>I can scan all options for a question in under 20 seconds and name what I am listening for.</span></div>
        <div class="ci"><span class="box"></span><span>I always write a draft mark on hearing 1 and a final answer on hearing 2 — never the same thing twice.</span></div>
        <div class="ci"><span class="box"></span><span>I can name at least six of the nine trap types and I spot them in practice.</span></div>
        <div class="ci"><span class="box"></span><span>I always answer the question that was asked, not the one I expected.</span></div>
        <div class="ci"><span class="box"></span><span>I hear the difference between <em>thirteen</em> and <em>thirty</em> reliably, without extra listening.</span></div>
        <div class="ci"><span class="box"></span><span>I use numbers and symbols in the margin instead of writing words.</span></div>
        <div class="ci"><span class="box"></span><span>In Exercise 4 I build the written ledger before speaker 1 and count at the end.</span></div>
        <div class="ci"><span class="box"></span><span>In Exercise 5 I remember to ask “who said it?” before “is it true?”.</span></div>
        <div class="ci"><span class="box"></span><span>When I hear an option's exact words in the audio, I become suspicious rather than confident.</span></div>
        <div class="ci"><span class="box"></span><span>I have never left a blank line on an answer sheet, and I have never been off by one.</span></div>
      </div>
      <div class="s-grid s-grid--3 mt-14">
        <div class="callout ok"><b>9–10 ticks:</b> your technique is exam-ready. Your remaining work is vocabulary breadth and steady pace — keep the practice loop running but do not redesign anything.</div>
        <div class="callout warn"><b>5–8 ticks:</b> exactly where a strong B2/C1 student normally sits. Pick your two weakest statements and make them your two goals for the next three weeks. That alone is typically worth several marks.</div>
        <div class="callout bad"><b>0–4 ticks:</b> your English is not the limit — your routine is. Work through parts 3–7 of this workshop exercise by exercise before doing another full paper. Technique first, volume later.</div>
      </div>`,
    notes:
      '<span class="ntime">3 min</span>Have students tick these honestly and in pencil, then count. The point of the scoring bands is to normalise the middle: most strong candidates land at 5–8, and that is not a failure — it is a target list. ' +
      'Each statement maps to a specific technique in the deck, so students can self-serve the remedy: statement 1 → slide 11; statement 2 → slide 10; statement 3 → slide 37; statement 4 → slide 19; statement 5 → slide 40; statement 6 → slide 24; statement 7 → slide 29; statement 8 → slide 33; statement 9 → slide 19; statement 10 → slide 46. Tell them this — it turns the checklist into a navigation tool. ' +
      'Note the deliberate phrasing "genuinely, reliably true — not the ones that are true when you are fresh". Self-assessment is only useful if it is honest. Ask them to only tick something they have done under timed conditions. ' +
      'The 0–4 band is important not to gloss over. If a student lands there with strong English, the message is that more papers will not help — the routine must change first. ' +
      'Follow-up you can run in five minutes next lesson: students write their two weakest statements on a card, and you collect them. That gives you an instant, data-driven plan for what to teach next.',
  },

  /* ── 52 ──────────────────────────────────────────── */
  {
    id: 'exam-day',
    dense: true,
    kicker: 'Exam day',
    title: 'The final checklist',
    sub: 'Read this the night before. Everything on it is a decision already made — on the day you only execute.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="s-card tint-b"><h3><span class="ico">🌙</span>The night before</h3>
            <ul class="s-bullets mt-6" style="font-size:0.83rem">
              <li>No new vocabulary. Review your <b>paraphrase journal</b> and your <b>trap list</b> only.</li>
              <li>Re-read your two personal mistakes from the top-mistakes slide.</li>
              <li>Sleep. Listening performance is the most fatigue-sensitive part of the exam.</li>
              <li>Pack: pencil(s), eraser, pen, candidate details, water.</li>
            </ul></div>
          <div class="s-card tint-g mt-10"><h3><span class="ico">⏱️</span>On arrival</h3>
            <ul class="s-bullets ok mt-6" style="font-size:0.83rem">
              <li>Sit as close to the front speakers as the invigilator allows. <b>Position is a real advantage.</b></li>
              <li>Check your audio is audible <b>before</b> the test starts. If not, raise your hand now.</li>
              <li>Write your candidate number on the answer sheet carefully and check the digits.</li>
            </ul></div>
        </div>
        <div>
          <div class="s-card tint-a"><h3><span class="ico">📝</span>During the paper</h3>
            <ul class="s-bullets mt-6" style="font-size:0.83rem">
              <li><b>Always</b> read the options in the silence. Never listen to an unread question.</li>
              <li>Draft marks on hearing 1, firm circles on hearing 2. Never the same job twice.</li>
              <li>Write only numbers and symbols in the margin.</li>
              <li>If you lose an item, jump to the next question number immediately.</li>
              <li>Never leave a blank. Guess, and move on.</li>
            </ul></div>
          <div class="s-card tint-v mt-10"><h3><span class="ico">✍️</span>Transfer and finish</h3>
            <ul class="s-bullets mt-6" style="font-size:0.83rem">
              <li>Blocks of five. Check each block. Cover the lines below with your hand.</li>
              <li>Sweep for blanks, double-shaded lines, and the total count of 40.</li>
              <li>Stop changing answers unless you have a clear reason. First instincts are usually right; panic edits are usually wrong.</li>
            </ul></div>
        </div>
      </div>
      <div class="callout ok mt-14"><b>The one-sentence version, if you remember nothing else:</b> <span style="font-size:0.92rem;color:#fff">read before you listen, decide on the second hearing, distrust the words you recognise, and never leave a blank.</span></div>`,
    notes:
      '<span class="ntime">3 min</span>This is a practical slide, so deliver it practically — it can be read rather than taught. The highest-value items: <b>sit near the speakers</b> (position genuinely affects scores and students rarely think of it), <b>check audibility before the test</b> (reporting a fault during the test is what allows the centre to act), and <b>no new vocabulary the night before</b>. ' +
      'The fatigue point is worth emphasis: listening is the most attention-sensitive paper in the qualification, and Exercise 5 sits at the end. Sleep is a performance intervention, not a moral one. ' +
      'On the transfer: give the counter-intuitive advice explicitly — <b>stop changing answers unless you have a clear reason.</b> Panic editing during the last minutes is reliably net-negative. Changing an answer is right only when you can name the evidence that made you change. ' +
      'Close the slide by having the class read the one-sentence version aloud together. It is a genuinely useful summary of 50 slides, and saying it once out loud makes it stick far better than hearing it.',
  },

  /* ── 53 ──────────────────────────────────────────── */
  {
    id: 'takeaways',
    dense: true,
    kicker: 'Key takeaways',
    title: 'Eight things to carry into the exam hall',
    sub: 'If the rest of this workshop fades, keep these.',
    body: `
      <div class="s-grid s-grid--2">
        <div class="s-card tint-b"><h3><span class="ico">1</span>Read before you listen</h3><p>The silence before each extract is the only information you control. Never listen to an unread question.</p></div>
        <div class="s-card tint-b"><h3><span class="ico">2</span>Two hearings, two jobs</h3><p>Hearing 1 builds the map. Hearing 2 plants the flag. Never use both for the same task.</p></div>
        <div class="s-card tint-r"><h3><span class="ico">3</span>Distrust the words you recognise</h3><p>The key paraphrases; distractors quote. Recognition should make you suspicious, not comfortable.</p></div>
        <div class="s-card tint-r"><h3><span class="ico">4</span>Hunt the pivot</h3><p><em>But, however, actually, not, in fact, that said.</em> The answer nearly always lives after the pivot.</p></div>
        <div class="s-card tint-v"><h3><span class="ico">5</span>Ask who said it</h3><p>Before “is it true?”, ask “who said it?”. The interviewer's voice is a trap factory.</p></div>
        <div class="s-card tint-v"><h3><span class="ico">6</span>Symbols, not words</h3><p>Numbers and symbols in the margin. Every word written while listening is a second not heard.</p></div>
        <div class="s-card tint-g"><h3><span class="ico">7</span>Never leave a blank</h3><p>A blank is a certain zero. Cambridge does not deduct marks for wrong MCQ answers — a four-option guess is worth 0.25 of a mark on average.</p></div>
        <div class="s-card tint-g"><h3><span class="ico">8</span>Review beats repetition</h3><p>One analysed paper outperforms three unexamined ones. Name the trap; never write “careless”.</p></div>
      </div>
      <div class="callout mt-14"><b>The overall message:</b> Paper 2 is not primarily a test of how much English you know. It is a test of <b>how well you handle a recording you only hear twice.</b> That is a skill — and skills improve with deliberate practice, not with hoping.</div>`,
    notes:
      '<span class="ntime">3 min</span>This is the recap and it should be delivered with confidence and pace, not re-taught. If you have time, use it as a retrieval quiz instead of a summary: cover the slide text, read out the eight numbers, and ask the class to recall the principle before you reveal it. Retrieval practice is far more effective than re-reading. ' +
      'The framing sentence at the bottom is the message of the whole workshop and worth saying slowly: <b>Paper 2 is not primarily a test of how much English you know — it is a test of how well you handle a recording you only hear twice.</b> For a B2-high/C1 cohort that is liberating, because it means the remaining marks are winnable by technique. ' +
      'If you run this workshop over multiple sessions, end each session with two or three of these eight rather than all of them. Eight items is a summary; two items is a lesson.',
  },

  /* ── 54 ──────────────────────────────────────────── */
  {
    id: 'close',
    kind: 'close',
    kicker: 'End of workshop',
    title: 'Now go and beat the paper.',
    lead: '40 questions. 40 marks. Five exercises. Two hearings each.',
    sub: 'You already have the English. What you now have as well is a method — and a method is what turns a 26 into a 34.',
    body: `
      <div class="s-grid s-grid--3 mt-6" style="text-align:left">
        <div class="s-card tint-g"><h3><span class="ico">✅</span>This week</h3><p>Label every error from one paper with a trap number and a breakdown level. Start the paraphrase journal.</p></div>
        <div class="s-card tint-a"><h3><span class="ico">🔁</span>Every week</h3><p>Micro-listening transcription, 3 × 5 minutes. Number dictation, 2 × 3 minutes. Non-negotiable.</p></div>
        <div class="s-card tint-b"><h3><span class="ico">🎯</span>Until the exam</h3><p>One full paper a week, always reviewed. One goal per paper, carried into the next.</p></div>
      </div>
      <div class="callout info mt-14" style="text-align:left"><b>Built on the official specification:</b> Cambridge IGCSE English as a Second Language 0511 (Count-in Speaking), Component 2 / Paper 2 — Listening. Syllabus for examinations in <b>2027, 2028 and 2029</b>, version 1, published September 2024. Five exercises · 40 multiple-choice questions · 40 marks · approximately 50 minutes including 6 minutes' transfer time · each recorded text heard twice.</div>
      <div class="footnote" style="text-align:left">Scripts, questions and option sets in this deck are <b>teaching constructions</b> written to demonstrate trap mechanisms — they are not Cambridge materials and will not appear in a live paper. Use the official specimen paper and past papers for authentic practice. Pedagogical references: Buck (2001); Field (2003, 2004, 2008); Goh (2000); Vandergrift &amp; Tafaghodtari (2010); Graham &amp; Macaro (2008); Renandya &amp; Farrell (2011); Ginther (2002); Nissan, DeVincenzi &amp; Tang (1995); Freedle &amp; Kostin (1996).</div>`,
    notes:
      '<span class="ntime">2 min</span>Close on momentum, not on a summary. Three commitments only — this week, every week, until the exam — because three specific actions will be done and a longer list will not. ' +
      'State the provenance plainly if you are showing this to colleagues: this deck is built on the <b>official 2027–2029 syllabus for 0511 Component 2</b> — five exercises, 40 multiple-choice questions, 40 marks, approximately 50 minutes including six minutes\' transfer, each text heard twice. ' +
      'Be equally plain about the scripts: the audio excerpts, questions and option sets are <b>teaching constructions</b> written to isolate the trap mechanisms. They are pedagogically accurate but they are not Cambridge material, and authentic practice must come from the official specimen and past papers. Saying this protects both you and your students. ' +
      'Finish with the line students should leave with: <em>you already have the English — now you have a method too.</em> That is the whole workshop in one sentence, and for this cohort it happens to be true.',
  },
];
