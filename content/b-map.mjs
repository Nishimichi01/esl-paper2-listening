/* ═══ PART B — THE EXERCISE MAP & UNIVERSAL METHOD (slides 8–11) ═══ */

export const b = [
  /* ── 8 ───────────────────────────────────────────── */
  {
    id: 'exercise-map',
    kicker: 'The map',
    title: 'All five exercises in one frame',
    sub: 'Same paper, five different games. The columns on the right are the ones that decide your score.',
    body: `
      <div class="tbl-wrap">
        <table class="tbl">
          <thead>
            <tr><th class="ex">Ex</th><th>Texts</th><th class="cen">Qs</th><th>Answer format</th><th>Skills tested</th><th class="cen">Marks</th><th class="cen">Effort</th></tr>
          </thead>
          <tbody>
            <tr>
              <td class="ex">1</td><td>8 very short extracts</td><td class="cen num">8</td>
              <td>4 pictures, A–D</td>
              <td><span class="pill pill-b">L1</span> <span class="pill pill-b">L2</span> <span class="pill pill-b">L3</span></td>
              <td class="cen num">8</td><td class="cen"><span class="pill pill-g">Low</span></td>
            </tr>
            <tr>
              <td class="ex">2</td><td>5 short extracts</td><td class="cen num">10</td>
              <td>3 written options, A–C</td>
              <td><span class="pill pill-b">L1</span> <span class="pill pill-b">L2</span> <span class="pill pill-b">L3</span> <span class="pill pill-v">L4</span></td>
              <td class="cen num">10</td><td class="cen"><span class="pill pill-a">Medium</span></td>
            </tr>
            <tr>
              <td class="ex">3</td><td>1 monologue</td><td class="cen num">8</td>
              <td>8 sentence gaps, A–C</td>
              <td><span class="pill pill-b">L1</span> <span class="pill pill-b">L2</span> <span class="pill pill-b">L3</span></td>
              <td class="cen num">8</td><td class="cen"><span class="pill pill-a">Medium</span></td>
            </tr>
            <tr>
              <td class="ex">4</td><td>6 short monologues</td><td class="cen num">6</td>
              <td>Match to 8 statements</td>
              <td><span class="pill pill-b">L1</span> <span class="pill pill-b">L2</span> <span class="pill pill-b">L3</span> <span class="pill pill-v">L4</span></td>
              <td class="cen num">6</td><td class="cen"><span class="pill pill-r">High</span></td>
            </tr>
            <tr>
              <td class="ex">5</td><td>1 interview</td><td class="cen num">8</td>
              <td>3 written options, A–C</td>
              <td><span class="pill pill-b">L1</span> <span class="pill pill-b">L2</span> <span class="pill pill-b">L3</span> <span class="pill pill-v">L4</span></td>
              <td class="cen num">8</td><td class="cen"><span class="pill pill-r">High</span></td>
            </tr>
            <tr class="tot"><td colspan="5">Total</td><td class="cen num">40</td><td></td></tr>
          </tbody>
        </table>
      </div>
      <div class="s-grid s-grid--3 mt-14">
        <div class="s-card tint-v"><h3><span class="ico">🎯</span>24 of 40 marks involve L4</h3><p>Exercises 2, 4 and 5 all test <b>implied meaning</b>. If you only listen for stated facts, you cap yourself at about 16 marks.</p></div>
        <div class="s-card tint-g"><h3><span class="ico">💰</span>16 cheap marks sit in E1 and E3</h3><p>Two exercises, 8 marks each, both L1–L3 only, and both built on one clear speaker or one clear extract at a time.</p></div>
        <div class="s-card tint-r"><h3><span class="ico">⚠️</span>E4: most effort, fewest marks</h3><p>Six separate speakers plus eight statements to track — for only <b>6 marks</b>, the lowest on the paper. Do not let it consume Exercise 5's attention.</p></div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>This is the strategic slide. Read the table top to bottom once, then teach the three insights below it — they are the reason the table exists. ' +
      '<b>Insight 1 (AO coverage):</b> the syllabus assigns L4 — implied meaning — to Exercises 2, 4 and 5. That is 24 of the 40 marks. A student who only hunts for stated facts is competing for roughly 16 marks. ' +
      '<b>Insight 2 (value):</b> Exercises 1 and 3 test only L1–L3, and they are 16 marks between them. These are the training-priority marks for a B2/C1 student. ' +
      '<b>Insight 3 (effort):</b> Exercise 4 is six separate monologues and eight statements for just six marks. It also has the most complex marking logic — eight statements against six speakers, so if options may be used only once, <b>two are left over</b> and none repeat. Warn them: if they are behind time or panicking, E4 is where they should make peace with losing a mark rather than destabilising E5. ' +
      'Note the difficulty labels are my professional judgement of cognitive load, not a Cambridge label — say so if asked.',
  },

  /* ── 9 ───────────────────────────────────────────── */
  {
    id: 'taco-method',
    kicker: 'The universal method',
    title: 'Every question, in four beats: the T.A.C.O. loop',
    sub: 'One routine you can run on all 40 questions, in all five exercises, without thinking. Learn it until it is automatic.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div class="s-steps">
          <div class="s-step"><span class="sn">T</span><div class="sbody">
            <span class="st">Target the question — before the audio starts</span>
            <span class="sd">Read the question and every option. Underline the <b>key noun</b> and the <b>question word</b>. Decide what kind of answer it wants: a place? a time? a feeling? <b>Free marks happen here.</b></span>
          </div><span class="stag">silence</span></div>

          <div class="s-step"><span class="sn">A</span><div class="sbody">
            <span class="st">Attend — hearing 1 is for the shape of the text</span>
            <span class="sd">Do not chase every word. Get the <b>topic</b>, who is speaking, and where each answer is likely to fall. Write a pencil mark beside any option that seems right. <b>Nothing is final yet.</b></span>
          </div><span class="stag">hearing 1</span></div>

          <div class="s-step"><span class="sn">C</span><div class="sbody">
            <span class="st">Confirm — hearing 2 decides, and hunts the trap</span>
            <span class="sd">Now you know the text, so listen <b>narrowly</b>: check your pencil answer, then ask <em>“which option did they deliberately put here to catch me?”</em> Change only with a reason.</span>
          </div><span class="stag">hearing 2</span></div>

          <div class="s-step"><span class="sn">O</span><div class="sbody">
            <span class="st">Output — commit and move on</span>
            <span class="sd">Circle your final letter. <b>Never leave a blank.</b> Do not re-open a question you have committed to — the next extract starts in seconds and it needs your full attention.</span>
          </div><span class="stag">always</span></div>
        </div>
        <div>
          <div class="callout ok"><b>Why it works.</b> It gives the same job to every hearing. If you always do the same thing, you stop spending your working memory on <em>“what should I be doing now?”</em> and spend it on English.</div>
          <div class="callout warn mt-14"><b>The most common failure is skipping T.</b> Candidates start listening with unread options, hear a familiar word, and lock it in. That is exactly how the paper is designed to catch you.</div>
          <div class="callout bad mt-14"><b>Never do this on hearing 2:</b> re-reading all four options from scratch. You do not have time between extracts, and you will miss the opening words of the text.</div>
          <div class="callout info mt-14"><b>Make it visible.</b> On your question paper it should physically look like this: <code>T</code> underlined keywords · <code>A</code> pencil dash beside a candidate ⟶ <code>C</code> circled final letter · <code>O</code> letter transferred.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>This is the single most important slide in the deck. Teach T.A.C.O. as a routine, not a suggestion — the point is that it removes decisions, and decisions cost time and working memory. ' +
      'Run it physically: tell students to hold up their pen and show you what "A" looks like on a page (a small pencil dash, not a circle) versus "C/O" (a firm circle). If it is not visually distinguishable they will not know whether they have committed. ' +
      'Land the two warnings: (1) <b>skipping T</b> is the number-one cause of trap answers, because unread options plus a familiar word equals a confident wrong answer; (2) <b>on hearing 2, never re-read everything</b> — narrow to confirming your choice and interrogating the nearest distractor. ' +
      'Every exercise slide that follows applies this loop, so use it as a refrain: "What is T here? What is A here?" By Exercise 5 they should be answering before you ask.',
  },

  /* ── 10 ──────────────────────────────────────────── */
  {
    id: 'two-hearings',
    kicker: 'The two hearings',
    title: 'Hearing 1 and hearing 2 are two different jobs',
    sub: 'Students who score 20/40 usually use both hearings for the same task. Students who score 35+/40 use them for different tasks.',
    body: `
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th></th><th><span class="pill pill-b">Hearing 1</span></th><th><span class="pill pill-g">Hearing 2</span></th></tr></thead>
          <tbody>
            <tr><td><b>Your goal</b></td><td>Understand the <b>whole text</b>: topic, speakers, structure</td><td><b>Decide each answer</b> with evidence</td></tr>
            <tr><td><b>Your eyes</b></td><td>Mostly on the <b>question paper</b>, glancing up</td><td>Mostly <b>listening</b>, eyes flicking to your two best options</td></tr>
            <tr><td><b>Your pen</b></td><td>A small dash beside a <b>possible</b> answer</td><td>A firm circle around the <b>final</b> letter</td></tr>
            <tr><td><b>What you must not do</b></td><td>Lock an answer in — it is a draft</td><td>Re-read every option from zero</td></tr>
            <tr><td><b>Recovery trick</b></td><td>—</td><td>If you missed something, use the <b>discourse markers</b> (“however”, “actually”, “the problem is”) to locate the answer</td></tr>
          </tbody>
        </table>
      </div>
      <div class="s-grid s-grid--3 mt-14">
        <div class="s-card tint-b"><h3><span class="ico">1️⃣</span>The 1st hearing is your map</h3><p>You are building a mental model: who, where, why, and in what order the answers arrive. Mark territory, do not plant a flag.</p></div>
        <div class="s-card tint-g"><h3><span class="ico">2️⃣</span>The 2nd hearing is your judgment</h3><p>Now listen for the <b>exact words that decide</b> between two options — often a single word: <em>not, only, already, instead, unless</em>.</p></div>
        <div class="s-card tint-a"><h3><span class="ico">🚨</span>Between the two: the 8-second gap</h3><p>Each extract is followed by a pause. Use it: commit your dash to a letter, peek at the next question, breathe.</p></div>
      </div>`,
    notes:
      '<span class="ntime">3 min</span>This slide is the highest-leverage behavioural change in the workshop. Most mid-band candidates use hearing 1 to answer and hearing 2 to check they were right — which means they never actually use hearing 2 analytically. ' +
      'Teach the split explicitly: <b>hearing 1 = build the map, mark territory; hearing 2 = listen narrowly for the deciding word, plant the flag.</b> ' +
      'The deciding-word list is worth writing on the board: <em>not, never, only, already, instead, rather, unless, but, actually, the problem was, in the end, at first</em>. These words are where Cambridge reverses meaning, and they are almost always the hinge between the trap and the answer. ' +
      'Also give them the inter-hearing ritual: when the recording stops, do not relax — finalise the letter, then look at the next question. That 8-second gap is where a disciplined candidate steals a mark from a passive one.',
  },

  /* ── 11 ──────────────────────────────────────────── */
  {
    id: 'scan-protocol',
    kicker: 'Step T in practice',
    title: 'The 20 seconds that are worth 5 marks',
    sub: 'Before every extract you get a short silence. It is not a rest — it is the only time in the exam when you control the information.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="flow">
            <span class="flow-step"><span class="n">1</span>Read the question</span>
            <span class="flow-arrow">→</span>
            <span class="flow-step"><span class="n">2</span>Underline the key noun</span>
            <span class="flow-arrow">→</span>
            <span class="flow-step"><span class="n">3</span>Underline the wh-word</span>
          </div>
          <div class="flow">
            <span class="flow-step"><span class="n">4</span>Name the answer type</span>
            <span class="flow-arrow">→</span>
            <span class="flow-step"><span class="n">5</span>Predict 2–3 words</span>
            <span class="flow-arrow">→</span>
            <span class="flow-step"><span class="n">6</span>Spot the odd option out</span>
          </div>
          <div class="callout mt-14"><b>Then stop and look up.</b> The scan is finished when you know what you are listening for. Continuing to stare at the paper while the audio plays is how answers are missed.</div>
        </div>
        <div class="tape">
          <span class="sp">Question 3.</span> What will the weather be like at the weekend?<br>
          <span class="sp">A</span> sunny <span class="sp">B</span> rainy <span class="sp">C</span> snowy <span class="sp">D</span> windy
          <div style="margin-top:12px;font-size:0.78rem;color:#9FB0C7;line-height:1.6">
            <b style="color:#fff">Key noun:</b> <span class="hl">weather at the weekend</span><br>
            <b style="color:#fff">Wh-word:</b> <span class="hl">What… like</span> → the answer is a <b>condition</b>, not a time or a place<br>
            <b style="color:#fff">Answer type:</b> one of four weather conditions — so I am listening for ONE adjective<br>
            <b style="color:#fff">Predict:</b> <em>rain, sun, cold, wind, cloud, storm, mild</em><br>
            <b style="color:#fff">Odd one out:</b> all four are weather — there is no easy elimination here, so the <b>intensity</b> will decide it
          </div>
        </div>
      </div>
      <div class="s-grid s-grid--2 mt-14">
        <div class="dd-col do"><h4>Do</h4><ul>
          <li>Predict the <b>type</b> of answer, not the exact answer.</li>
          <li>Notice words that will be said differently: <em>weekend → Saturday, Sunday</em>.</li>
          <li>Read <b>all</b> options before the audio starts — a trap lives in the option you skipped.</li>
        </ul></div>
        <div class="dd-col dont"><h4>Don't</h4><ul>
          <li>Don't read ahead to the next exercise — you will miss this one.</li>
          <li>Don't lock in an option just because it is the first one you read.</li>
          <li>Don't keep your head down once the audio begins.</li>
        </ul></div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>Deliver the six-step scan as a physical drill. Put a question on the board and read it aloud with the class doing steps 2–6 out loud, so they hear what a scan sounds like in the head. ' +
      'The worked example is deliberately about <b>weather</b> because it exposes the hardest part of pre-listening: when all four options belong to the same category, prediction cannot eliminate anything — so you must predict the <b>dimension</b> instead (intensity, timing, degree). That is a genuine exam skill, not a trick. ' +
      'Stress the "then stop and look up" instruction. The most common error is a candidate who keeps reading during the extract and misses the first five words — and the first five words are usually where the topic and the speaker\'s attitude are set. ' +
      'DON\'T read ahead: the paper is sequential. There is no strategic advantage to skipping forward, and there is a large cost.',
  },
];
