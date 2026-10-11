/* ═══ PART G — EXERCISE 5 (slides 32–36) ═══ */

export const g = [
  /* ── 32 ──────────────────────────────────────────── */
  {
    id: 'e5-anatomy',
    kicker: 'Exercise 5',
    title: 'One interview, eight questions, one speaker who counts',
    sub: 'The longest extract in the paper and the highest concentration of L4. The single most important instruction is printed in the syllabus itself.',
    exBadge: '<div class="ex-badge"><span class="ens">5</span>Exercise 5 · 8 marks <span class="ao">SKILLS L1 · L2 · L3 · L4</span></div>',
    body: `
      <div class="stats">
        <div class="stat"><div class="k">Speakers</div><div class="v">2 <small>interview</small></div></div>
        <div class="stat"><div class="k">Questions</div><div class="v">8 <small>A–C</small></div></div>
        <div class="stat"><div class="k">Options</div><div class="v">3 <small>words → short sentences</small></div></div>
        <div class="stat"><div class="k">Marks</div><div class="v">8 <small>1 each</small></div></div>
      </div>
      <div class="callout info mt-14" style="font-size:0.88rem"><b>The syllabus says it precisely:</b> “Candidates listen to an interview between two speakers. Candidates answer eight multiple-choice questions… The questions test understanding of details, opinions, ideas and implied information expressed by <b>the main speaker</b>.”</div>
      <div class="s-grid s-grid--3 mt-14">
        <div class="s-card tint-g"><h3><span class="ico">🎯</span>One speaker is the target</h3>
          <p>The interviewer exists to ask, prompt and summarise. <b>Answers come from the interviewee</b> — the person being asked the questions. Every single question.</p></div>
        <div class="s-card tint-r"><h3><span class="ico">⚠️</span>So the interviewer is a trap factory</h3>
          <p>A distractor option will often be exactly what the <b>interviewer</b> said — in a question, a guess, or a summary. It is true of the audio and false as an answer.</p></div>
        <div class="s-card tint-v"><h3><span class="ico">🧠</span>Options get longer here</h3>
          <p>Options may be words, phrases or <b>short sentences</b>. Longer options are harder to hold — so read them carefully and reduce each to a gist before the audio.</p></div>
      </div>
      <div class="callout warn mt-14"><b>Mental habit to install:</b> before the audio starts, say to yourself <em>“who is the main speaker?”</em> and keep a physical mark — a tiny circle on the paper — for that voice. When you hear an idea you like, your first question is not “is this true?” but <b>“who said it?”</b></div>`,
    notes:
      '<span class="ntime">3 min</span>Exercise 5 is the longest extract and the densest L4 content. The syllabus sentence on this slide is the whole strategy: questions test information "expressed by <b>the main speaker</b>". Say it out loud twice. ' +
      'Define "main speaker" operationally for the class: the person being interviewed — the one who answers. The interviewer\'s voice is scaffolding. ' +
      'Then introduce the second-order insight: because the answers come only from the interviewee, the <b>interviewer becomes a trap factory</b>. Distractors get built from the interviewer\'s questions, guesses and summaries. There is a documented distractor type for exactly this — correct content, wrong speaker (Nissan et al. 1995). ' +
      'Also flag that Exercise 5 options can be short sentences, which is new. Holding three full sentences in mind while listening is hard, so the pre-audio gist reduction (same skill as Exercise 4) is essential. ' +
      'Practical habit: students should physically mark the main speaker — e.g. a small circle in the margin. It sounds trivial; it prevents the most expensive category of error in the final exercise.',
  },

  /* ── 33 ──────────────────────────────────────────── */
  {
    id: 'e5-attribution',
    kicker: 'Exercise 5 — technique',
    title: 'Attribution: the skill that decides Exercise 5',
    sub: 'Every question is really asking the same hidden question: who said this, and did they mean it?',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="s-steps">
            <div class="s-step"><span class="sn">1</span><div class="sbody"><span class="st">Fix the two voices before they speak</span>
              <span class="sd">Note the timbre. The interviewer is usually the higher, more clipped voice reading prepared questions; the interviewee is the one who explains, hesitates and tells stories.</span></div></div>
            <div class="s-step"><span class="sn">2</span><div class="sbody"><span class="st">Tag every opinion as you hear it</span>
              <span class="sd">In your head, prefix each evaluative statement with <b>“INT says…”</b> or <b>“MAIN says…”</b>. It costs nothing and it removes the whole wrong-speaker category.</span></div></div>
            <div class="s-step r"><span class="sn">3</span><div class="sbody"><span class="st">Distrust anything the interviewer states as fact</span>
              <span class="sd"><em>INT: “So it must have been terrifying?”</em> — that is a <b>guess</b>, not a fact. Wait for the main speaker to agree or correct. If they correct, the correction is the answer.</span></div></div>
            <div class="s-step"><span class="sn">4</span><div class="sbody"><span class="st">Watch the interviewer's summary traps</span>
              <span class="sd"><em>INT: “So the money was the main thing.” MAIN: “Not exactly — I'd have done it anyway.”</em> The interviewer's summary is a ready-made distractor. The rebuttal is the answer.</span></div></div>
          </div>
        </div>
        <div>
          <div class="tape" style="font-size:0.79rem">
            <span class="sp">INT:</span> So it was all about the <span class="hl-r">charity</span>, then?<br>
            <span class="sp">MAIN:</span> People assume that — and yes, we raised a lot. But honestly, I'd had a hard year and I wanted to prove I could <span class="hl-g">finish something</span>. That was the real reason.
          </div>
          <div class="callout ok mt-14"><b>What a question would do here:</b> <em>“Why did she do the walk?”</em><br>
            <span class="pill pill-r">A the charity</span> — the interviewer's guess, echoed by the main speaker as an assumption → <b>trap</b>.<br>
            <span class="pill pill-g">B to prove she could finish something</span> — the main speaker's “real reason” → <b>answer</b>.</div>
          <div class="callout warn mt-10"><b>Note the double bluff:</b> the trap is <em>true</em> (they did raise a lot) and the answer is <em>modest</em> (“prove I could finish something”). Real reasons are usually the quieter ones — introduced by <em>honestly, really, actually, the real reason is</em>.</div>
          <div class="callout info mt-10"><b>Never answer from the interviewer's sentence.</b> It is a question paper artefact, not evidence. If you can only cite the interviewer, you have not found the answer.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">5 min</span>Attribution is <b>the</b> Exercise 5 skill. Name it and make it a physical habit: mentally prefix every evaluative statement with INT or MAIN. ' +
      'Step 3 is the trap most students fall for: the interviewer offers a plausible emotional guess — "it must have been terrifying?" — and students mark it as true because it sounds like a description of the situation. But it is a <b>question</b>. The main speaker\'s response is the evidence, and if they disagree, the disagreement is the answer. ' +
      'Step 4 is the summary trap: interviewers paraphrase constantly, and their paraphrase is a ready-made distractor. "So the money was the main thing" → "Not exactly." Train students to wait for the rebuttal. ' +
      'Notice on the worked exchange how the trap is stronger than the answer: the charity element is genuinely true. Real reasons get hedged and softened — "honestly", "the real reason was" — and students must learn to weight those markers heavily. ' +
      'Say the closing rule out loud and have them write it: <b>if you can only cite the interviewer, you have not found the answer.</b>',
  },

  /* ── 34 ──────────────────────────────────────────── */
  {
    id: 'e5-attitude-language',
    kicker: 'Exercise 5 — language bank',
    title: 'The words that carry opinions and attitudes',
    sub: 'L2 and L4 questions are answered by evaluative language, not content words. This is what to listen for.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="s-card tint-b"><h3><span class="ico">🗣️</span>Stance markers — “this is my real view”</h3>
            <p><b>to be honest</b> · <b>if I'm honest</b> · <b>if anything</b> · <b>I'd say</b> · <b>I suppose</b> · <b>frankly</b> · <b>I must admit</b> · <b>the real reason is</b></p>
            <p>When you hear these, the next clause is almost always the answer.</p></div>
          <div class="s-card tint-a mt-10"><h3><span class="ico">📏</span>Degree — how strong is it?</h3>
            <p><b>hardly</b> · <b>barely</b> · <b>not remotely</b> · <b>a bit</b> · <b>fairly</b> · <b>rather</b> · <b>absolutely</b> · <b>completely</b> · <b>the best thing about it</b></p>
            <p>Degree is the difference between two similar options in the same set.</p></div>
          <div class="s-card tint-v mt-10"><h3><span class="ico">↩️</span>Concession — “here comes the real verdict”</h3>
            <p><b>I'll grant you… but</b> · <b>admittedly… however</b> · <b>sure… though</b> · <b>to be fair… still</b> · <b>that said</b></p>
            <p>Everything before the pivot is the decoy. <b>The verdict lives after the pivot.</b></p></div>
        </div>
        <div>
          <div class="s-card tint-g"><h3><span class="ico">✅</span>Positive without saying “good”</h3>
            <p><b>it grew on me</b> · <b>I'd go back tomorrow</b> · <b>worth every penny</b> · <b>I couldn't fault it</b> · <b>it lived up to the hype</b> · <b>I'm glad I stuck with it</b></p></div>
          <div class="s-card tint-r mt-10"><h3><span class="ico">❌</span>Negative without saying “bad”</h3>
            <p><b>it left me cold</b> · <b>I can take it or leave it</b> · <b>not really my thing</b> · <b>I wasn't blown away</b> · <b>it promised more than it delivered</b> · <b>I'd think twice</b> · <b>it fell flat</b></p></div>
          <div class="s-card tint-a mt-10"><h3><span class="ico">❓</span>Uncertainty without saying “I don't know”</h3>
            <p><b>I'm in two minds</b> · <b>it's hard to say</b> · <b>I've yet to be convinced</b> · <b>ask me again next year</b> · <b>on balance, probably</b></p></div>
          <div class="callout ok mt-14"><b>Build your own list from every practice paper.</b> These phrases recur across years. A page of them, learned properly, is worth more than another full mock.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>This is a vocabulary slide, but teach it as a <b>listening-signal</b> slide: these words tell you where the answer is, before you even know what the answer is. ' +
      '<b>Stance markers</b> are the strongest signal. When a speaker says "if I\'m honest" or "the real reason is", the answer is in the next clause. Practise by reading sentences and having students call out "here it comes" at the marker. ' +
      '<b>Degree</b> is what separates similar options. Warning: this is one of the hardest things to hear at speed, so teach the pairs explicitly — hardly vs completely, a bit vs absolutely. ' +
      '<b>Concession</b> is the most reliable structural marker in the whole paper: everything before <em>but / however / that said</em> is the decoy. This single insight converts several L2 questions per paper from guesses into certainties. ' +
      'The positive/negative lists do real work: "it grew on me", "I can take it or leave it", "it fell flat" are exactly the kind of hedged evaluation that L4 options paraphrase. Have students add to these lists from authentic papers — the vocabulary is finite and highly reusable. ' +
      'Research note to keep in mind: idiom and evaluative vocabulary gaps here are <b>utilisation</b> failures in Goh\'s (2000) terms — the student heard every word and still missed the message. That is where the marks actually are.',
  },

  /* ── 35 ──────────────────────────────────────────── */
  {
    id: 'e5-traps',
    kicker: 'Exercise 5 — the traps',
    title: 'Four ways Exercise 5 takes a mark off you',
    sub: 'Three of the four are attribution failures. All four are avoidable with a habit you already have.',
    body: `
      <div class="s-grid s-grid--2">
        <div class="s-card tint-r"><span class="tag tag-r">Trap 1 · the loudest</span>
          <h3>Correct content, wrong speaker</h3>
          <p>The option is exactly what the <b>interviewer</b> said — often in a leading question.</p>
          <p><b>Defence:</b> the INT/MAIN tagging habit. <em>Who said it?</em> before <em>is it true?</em></p>
        </div>
        <div class="s-card tint-a"><span class="tag tag-a">Trap 2</span>
          <h3>The interviewer's paraphrase</h3>
          <p>The interviewer summarises, the main speaker corrects. The option matches the <b>summary</b>, not the correction.</p>
          <p><b>Defence:</b> always listen through to the main speaker's reply. The rebuttal is the answer — watch for <code>not exactly</code> · <code>well, not quite</code> · <code>that's not how I'd put it</code>.</p>
        </div>
        <div class="s-card tint-v"><span class="tag tag-v">Trap 3</span>
          <h3>Degree shift</h3>
          <p>The option turns a mild view into a strong one, or the reverse: <em>“it wasn't ideal”</em> becomes <em>“she was furious”</em>.</p>
          <p><b>Defence:</b> match the <b>intensity</b>, not just the direction. A negative option is only right if the speech was negative to that degree.</p>
        </div>
        <div class="s-card tint-b"><span class="tag tag-b">Trap 4</span>
          <h3>The plausible-world option</h3>
          <p>True of life in general, false of this interview. Often involves what “experts say” or what “anyone would feel”.</p>
          <p><b>Defence:</b> you are tested on what <b>these two people said</b>. Nothing else counts.</p>
        </div>
      </div>
      <div class="callout info mt-14"><b>The two-question close.</b> Before you commit your final letter in Exercise 5, ask: <b>(1) Who said it?</b> <b>(2) How strongly did they say it?</b> Those two questions resolve the large majority of Exercise 5 errors — and neither requires any new English.</div>`,
    notes:
      '<span class="ntime">4 min</span>Teach these four as a family — three of the four are attribution failures, which is why Exercise 5 rewards a habit rather than more vocabulary. ' +
      '<b>Trap 1 is the loudest</b> and the most common: correct content, wrong speaker. This is a documented distractor type (Nissan, DeVincenzi & Tang 1995). The defence is the INT/MAIN tagging from the previous slide. ' +
      '<b>Trap 2</b> is the interviewer\'s paraphrase. In real interviews, interviewers summarise constantly, and their summary is a ready-made distractor. The correction markers to listen for: <em>not exactly, well not quite, that\'s not how I\'d put it, I wouldn\'t say that</em>. ' +
      '<b>Trap 3, degree shift</b>, is the subtle one: both options point the same direction, but one overstates. A student who hears "it wasn\'t ideal" and marks "she was furious" has the polarity right and the intensity wrong. This is scope/degree shifting, and it is a recognised difficulty source. ' +
      '<b>Trap 4</b> is the plausible-world option. Same warning as Exercise 2: the only evidence is these two speakers. ' +
      'Close with the two-question ritual — who said it, how strongly. Students should be able to recite it by the end of the session, and it costs nothing to apply.',
  },

  /* ── 36 ──────────────────────────────────────────── */
  {
    id: 'e5-worked',
    reveal: true,
    kicker: 'Exercise 5 — worked example',
    title: 'Two questions, and one answer that is never said',
    dense: true,
    sub: 'Mark the main speaker. Then read both questions before you listen.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="qcard">
            <div class="qno">Question 1</div>
            <div class="qtext">Why did she decide to do the walk?</div>
            <div class="mcq">
              <div class="opt trap"><span class="ol">A</span><span class="otx">to raise money for charity<span class="why">✕ the interviewer's assumption</span></span></div>
              <div class="opt correct"><span class="ol">B</span><span class="otx">to prove she could finish something<span class="why">✓ “that was the real reason”</span></span></div>
              <div class="opt dim"><span class="ol">C</span><span class="otx">to see parts of the country she had not visited</span><span class="why">— never mentioned</span></div>
            </div>
          </div>
          <div class="qcard mt-10">
            <div class="qno">Question 2 · <span style="color:#D6C6FF">L4</span></div>
            <div class="qtext">How did she feel during the first week?</div>
            <div class="mcq">
              <div class="opt trap"><span class="ol">A</span><span class="otx">physically exhausted<span class="why">✕ explicitly denied: “physically I was fine”</span></span></div>
              <div class="opt correct"><span class="ol">B</span><span class="otx">lonely<span class="why">✓ inferred — never said</span></span></div>
              <div class="opt dim"><span class="ol">C</span><span class="otx">bored<span class="why">— never mentioned</span></span></div>
            </div>
          </div>
        </div>
        <div>
          <div class="tape" style="font-size:0.78rem">
            <span class="sp">INT:</span> So why did you sign up? It was all about the <span class="hl-r">charity</span>, I imagine?<br>
            <span class="sp">MAIN:</span> People assume that, and yes, we raised a lot. But honestly, I'd had a difficult year and I wanted to prove to myself I could <span class="hl-g">finish something</span>. That was the real reason.<br><br>
            <span class="sp">INT:</span> And the first week — you must have been <span class="hl-r">exhausted</span>?<br>
            <span class="sp">MAIN:</span> Physically I was <span class="hl-r">fine</span>, surprisingly. What I hadn't expected was how much I'd <span class="hl-g">miss people</span>. I'd never spent that long on my own. I found it <span class="hl-g">quite hard</span>, if I'm honest.
          </div>
          <div class="callout ok mt-10"><b>Q1 = B.</b> The “real reason”. A is the interviewer's guess, echoed with <em>“people assume that”</em>. Note the double bluff again — A is <b>true</b> (they raised a lot). Only B answers <em>why</em>.</div>
          <div class="callout ok mt-10"><b>Q2 = B, and it is never said.</b> This is L4 at work: <em>“how much I'd miss people”</em> + <em>“never spent that long on my own”</em> + <em>“found it quite hard”</em> = <b>lonely</b>.</div>
          <div class="callout bad mt-10"><b>Q2 option A is the negation trap.</b> “You must have been exhausted?” is the interviewer's guess, and the main speaker kills it explicitly: <em>“physically I was fine”</em>. Two marks on this slide were lost to the <b>interviewer</b>.</div>
          <div class="callout info mt-10"><b>The transferable move:</b> when two clues in the main speaker's answer point the same emotional direction, and no option names them, look for the option that names the <b>feeling</b>. That is how L4 is answered.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">7 min</span>This is the final worked example and it should feel like a summary of everything: the interviewer trap, the negation trap, the paraphrase, and one genuine L4 inference. ' +
      '<b>Q1 = B.</b> Note that option A is <em>true</em> — “yes, we raised a lot” — and still wrong, because the question asks <em>why</em>. The leading guess (“it was all about the charity, I imagine?”) is where the distractor was built. This is trap 1 and trap 2 from the previous slide in a single item. ' +
      '<b>Q2 = B, "lonely".</b> The word never appears. The inference chain is: misses people + never been alone that long + found it hard. Teach students to watch for <b>two or three clues pointing the same way</b> — that convergence is the signal that an L4 answer is available. ' +
      'Option A is pure negation: the interviewer guesses "exhausted" and the main speaker rejects it with "physically I was fine". Two of the four marks demonstrated on this slide were lost to the interviewer\'s voice. ' +
      'Finish by naming the transferable move on the bottom right: when no option names the emotion directly, choose the option that <em>names the feeling</b> rather than the option that names the circumstance. ' +
      'Reminder: these scripts are teaching constructions designed to isolate the trap mechanisms; use official 0511 specimen and past-paper audio for authentic practice.',
  },
];
