/* ═══ PART F — EXERCISE 4 (slides 27–31) ═══ */

export const f = [
  /* ── 27 ──────────────────────────────────────────── */
  {
    id: 'e4-anatomy',
    kicker: 'Exercise 4',
    title: 'Six speakers, eight statements, six marks',
    sub: 'The most complex marking logic in the paper — and the worst marks-per-minute rate. Here you need a system, not attention.',
    exBadge: '<div class="ex-badge"><span class="ens">4</span>Exercise 4 · 6 marks <span class="ao">SKILLS L1 · L2 · L3 · L4</span></div>',
    body: `
      <div class="stats">
        <div class="stat"><div class="k">Speakers</div><div class="v">6 <small>monologues</small></div></div>
        <div class="stat"><div class="k">Questions</div><div class="v">6 <small>one per speaker</small></div></div>
        <div class="stat"><div class="k">Statements</div><div class="v">8 <small>A–H</small></div></div>
        <div class="stat"><div class="k">Marks</div><div class="v">6 <small>1 each</small></div></div>
      </div>
      <div class="s-grid s-grid--3 mt-14">
        <div class="s-card"><h3><span class="ico">👥</span>Six separate short monologues</h3>
          <p>Six different people, usually on <b>one shared topic</b> — six opinions on the same thing. Each speaker is short, and each is played twice.</p></div>
        <div class="s-card tint-b"><h3><span class="ico">🗂️</span>You match, you do not choose</h3>
          <p>There is no A/B/C in the question. You pick the <b>statement</b> (A–H) that best fits each speaker, and you record it against that speaker.</p></div>
        <div class="s-card tint-r"><h3><span class="ico">♻️</span>The marking logic matters</h3>
          <p>Eight statements, six speakers. If statements may be used <b>at most once</b> — check the rubric on the day — then two statements are left over and <b>none are repeated</b>.</p></div>
      </div>
      <div class="callout warn mt-14"><b>Why this exercise is the hardest to keep straight.</b> Six speakers and eight statements is fourteen pieces of information to hold, while the audio keeps moving. Without a written system you will assign the same statement twice and not notice. <b>The system is the skill here.</b></div>
      <div class="callout info mt-10"><b>And the worst value on the paper.</b> Six marks for the most complex task — versus ten marks for Exercise 2. If you are running out of composure, do not sacrifice a calmer exercise to rescue this one.</div>`,
    notes:
      '<span class="ntime">3 min</span>Exercise 4 is cognitively the densest part of the paper and it is worth the <b>fewest</b> marks — six. Say that plainly, because it reframes where students should invest anxiety. ' +
      'Format from the syllabus: candidates listen to <b>six short monologues</b>; this is a <b>multiple-matching</b> task; for each extract they select from a <b>choice of eight statements</b>; the statements test "details, opinions, ideas and implied information". Objectives include L4. One mark each. ' +
      'Be careful and honest about the marking logic: the syllabus says candidates select from eight statements for six extracts, but it does not spell out reuse on the page you have. Tell students: <b>read the rubric at the top of the exercise on the day</b>, and assume statements are used only once unless the rubric says otherwise. Teaching the assumption is safe; teaching it as certainty is not. ' +
      'The core message: this exercise is about <b>information management</b>. Six speakers plus eight statements is more than working memory holds, so the student who scores here has a written system, not better English.',
  },

  /* ── 28 ──────────────────────────────────────────── */
  {
    id: 'e4-gist-labels',
    kicker: 'Exercise 4 — technique',
    title: 'Reduce all eight statements to three words each',
    sub: 'You cannot hold eight sentences in your head while listening. You can hold eight three-word labels.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="s-steps">
            <div class="s-step"><span class="sn">1</span><div class="sbody"><span class="st">Read all eight statements before the first speaker</span>
              <span class="sd">Yes, all eight. This is the one exercise where reading ahead is the technique, because the statements are the answer bank.</span></div></div>
            <div class="s-step"><span class="sn">2</span><div class="sbody"><span class="st">Write a 2–3 word gist label beside each</span>
              <span class="sd"><em>surprised / quick progress</em> · <em>nearly quit</em> · <em>wanted to start earlier</em> · <em>social &gt; activity</em>. Now you are holding labels, not sentences.</span></div></div>
            <div class="s-step"><span class="sn">3</span><div class="sbody"><span class="st">Spot the pairs that differ only in direction</span>
              <span class="sd">Some statements share a topic but point opposite ways: <em>“prefers doing it alone”</em> vs <em>“the social side matters more”</em>. Circle those pairs — that is where the discrimination will be.</span></div></div>
            <div class="s-step"><span class="sn">4</span><div class="sbody"><span class="st">Match topic AND stance, never a keyword</span>
              <span class="sd">A keyword match is the classic failure here: two statements can both contain “group”, one positively and one negatively. You are matching the <b>whole opinion</b>.</span></div></div>
          </div>
        </div>
        <div>
          <div class="match">
            <div class="stmt"><span class="sl">A</span><span><b>surprised / fast progress</b></span></div>
            <div class="stmt"><span class="sl">B</span><span><b>only started because asked</b></span></div>
            <div class="stmt"><span class="sl">C</span><span><b>cost hard to justify</b></span></div>
            <div class="stmt"><span class="sl">D</span><span><b>wish I'd started sooner</b></span></div>
            <div class="stmt"><span class="sl">E</span><span><b>social &gt; the activity</b></span></div>
            <div class="stmt"><span class="sl">F</span><span><b>nearly quit early on</b></span></div>
            <div class="stmt"><span class="sl">G</span><span><b>disappointed: too time-consuming</b></span></div>
            <div class="stmt"><span class="sl">H</span><span><b>prefers doing it alone</b></span></div>
          </div>
          <div class="callout warn mt-14"><b>E and H are a polarity pair.</b> Both are about solo versus social. Only one can be right for a given speaker — and a speaker can mention both (“I go on my own sometimes…”) while choosing one. <b>Listen for which one they commit to.</b></div>
          <div class="callout ok mt-10"><b>Two labels will never be used</b> if statements are not reused. Knowing that lets you accept a leftover without panic — and it also gives you a cross-check at the end.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">5 min</span>This is the technique slide that makes Exercise 4 survivable. The cognitive principle: working memory holds roughly four chunks, and six speakers plus eight sentences vastly exceeds that. <b>Compressing each statement to a 2–3 word label is the only way to hold the answer bank.</b> ' +
      'Have the class do the compression live. Read out a statement and take labels from students; write the best one on the board. They will produce better labels than yours, which is the point — the label only has to mean something to the person using it. ' +
      'Step 3 is the highest-value move: find the <b>polarity pairs</b>. E and H on this slide are a perfect example — same topic (solo vs social), opposite direction. In real papers, at least one such pair usually appears, and it is deliberately designed so that both are discussed. The student must hear which one the speaker <b>commits to</b>. ' +
      'Step 4 is the documented distractor mechanism: shared keyword, wrong stance (Field 2008; Nissan et al. 1995). Teach it as a warning: "if the statement contains a word I heard, I have only matched the topic — I have not yet matched the opinion."',
  },

  /* ── 29 ──────────────────────────────────────────── */
  {
    id: 'e4-grid',
    kicker: 'Exercise 4 — the system',
    title: 'The elimination grid: cross it out, then count',
    sub: 'One written system removes almost all of the error in Exercise 4. It takes ten seconds to set up.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="tape" style="font-size:0.79rem">
            <span class="sp">YOUR QUESTION PAPER — set-up before speaker 1</span><br><br>
            Speaker 1 → ___ &nbsp;&nbsp; Speaker 2 → ___ &nbsp;&nbsp; Speaker 3 → ___<br>
            Speaker 4 → ___ &nbsp;&nbsp; Speaker 5 → ___ &nbsp;&nbsp; Speaker 6 → ___<br><br>
            A ___ &nbsp; B ___ &nbsp; C ___ &nbsp; D ___<br>
            E ___ &nbsp; F ___ &nbsp; G ___ &nbsp; H ___
          </div>
          <div class="callout ok mt-14"><b>Use it as a ledger.</b> When speaker 2 matches statement F, write <b>S2</b> beside F. Now you can see at a glance what is gone, and you can never assign F twice.</div>
        </div>
        <div>
          <div class="s-steps">
            <div class="s-step g"><span class="sn">1</span><div class="sbody"><span class="st">Write the statement letters in a column</span><span class="sd">A B C D E F G H. Three seconds of work.</span></div></div>
            <div class="s-step g"><span class="sn">2</span><div class="sbody"><span class="st">The moment you match, write the speaker number beside the letter</span><span class="sd">Not the letter beside the speaker — the <b>speaker beside the letter</b>. The letters are the ledger; the ledger is what you check.</span></div></div>
            <div class="s-step a"><span class="sn">3</span><div class="sbody"><span class="st">On hearing 2, verify — then cross it out</span><span class="sd">A line through the letter means “done, do not revisit”. This is what stops you re-litigating.</span></div></div>
            <div class="s-step a"><span class="sn">4</span><div class="sbody"><span class="st">At the end, count: six speakers, six letters used, two crossed out as spare</span><span class="sd">If two speakers point at one letter, you have an error — go back to that speaker. <b>The count is a free error detector.</b></span></div></div>
          </div>
          <div class="callout warn mt-14"><b>Do not leave a speaker blank.</b> If you truly cannot decide, write the letter that is least likely and move on. A reasoned guess on a 1-in-4 or 1-in-6 choice is still worth marks across the paper.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>The grid is a ten-second setup that eliminates the characteristic Exercise 4 error — assigning the same statement to two speakers without noticing. ' +
      'Make students physically build it with you. Draw the six speaker slots and the eight letters on paper. Then play one speaker and have them write the speaker number beside the matched letter. Physically doing it once beats describing it five times. ' +
      'Step 4 is the part students never think of: <b>counting is an error detector</b>. Six speakers should consume six distinct letters. If two speakers point at F, there is a mistake, and they know exactly where to look. That self-check can recover a mark without re-listening. ' +
      'Practical note: some candidates find it faster to write the letter next to the speaker and strike the letter off the bank. Either works, provided one of the two directions is a visible ledger. What must not happen is remembering matches only in the head. ' +
      'Also: never leave a speaker blank. There is no penalty for a wrong answer, and a reasoned elimination is often right.',
  },

  /* ── 30 ──────────────────────────────────────────── */
  {
    id: 'e4-traps',
    kicker: 'Exercise 4 — the traps',
    title: 'When two statements are both about the same thing',
    sub: 'Exercise 4 is built on statements that share a topic and differ in direction, scope or intensity.',
    body: `
      <div class="s-grid s-grid--3">
        <div class="s-card tint-r"><span class="tag tag-r">Same topic, opposite direction</span>
          <h3>“Prefers doing it alone” vs “The social side matters more”</h3>
          <p>The speaker may mention both. Only one is their <b>committed position</b>.</p>
          <p><b>Listen for:</b> <code>but</code> · <code>honestly</code> · <code>the real reason</code> · <code>what keeps me coming back</code></p>
        </div>
        <div class="s-card tint-a"><span class="tag tag-a">Same topic, different degree</span>
          <h3>“I was a little unsure” vs “I nearly quit”</h3>
          <p>Both are doubt. The intensity is completely different, and the audio will be explicit about which.</p>
          <p><b>Listen for:</b> <code>almost</code> · <code>nearly</code> · <code>a bit</code> · <code>completely</code> · <code>seriously considered</code></p>
        </div>
        <div class="s-card tint-v"><span class="tag tag-v">Same topic, wrong time</span>
          <h3>“I wish I had started sooner” vs “I was surprised how quickly I improved”</h3>
          <p>Both are positive reflections on progress — but one is about the <b>past decision</b>, the other about the <b>rate of improvement</b>.</p>
          <p><b>Listen for:</b> what the sentence is actually about, not how it feels.</p>
        </div>
      </div>
      <div class="s-grid s-grid--2 mt-14 gap-lg">
        <div class="callout ok"><b>The two-question filter.</b> Before you commit a statement to a speaker, ask:<br><b>(1)</b> Is this the speaker's <em>committed</em> view, not something they merely mentioned?<br><b>(2)</b> Is the <em>scope and intensity</em> right — not a bigger or smaller version? Both questions kill most Exercise 4 errors.</div>
        <div class="callout bad"><b>The keyword reflex.</b> Hearing “on my own” and immediately choosing “prefers doing it alone” is the single most common Exercise 4 error. <b>A keyword match is only a topic match.</b> You still need the stance — and the stance is usually in the second half of the sentence.</div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>All Exercise 4 difficulty comes from one design principle: <b>statements share a topic and differ in direction, degree or time.</b> Teach those three axes. ' +
      '<b>Direction:</b> solo vs social, excited vs reluctant, cheap vs costly. The speaker usually mentions both sides — you must catch the commitment, which is signalled by <em>honestly, but, the real reason, what keeps me coming back</em>. ' +
      '<b>Degree:</b> "a little unsure" versus "nearly quit". This is a documented distractor mechanism — scope and degree shifts (some→all, sometimes→always, could→will). Get students to notice <em>almost, nearly, a bit, seriously considered, completely</em>. ' +
      '<b>Time:</b> both statements can be positive and still be about different things — a past decision versus a rate of improvement. Here the fix is to name what the statement is <em>about</em>, not how it feels. This is exactly why the gist labels on slide 28 must capture the proposition, not just the mood. ' +
      'Close with the keyword reflex warning and make it physical: tell students that the moment they feel certain because they heard a word, they should stop and listen to the rest of the sentence. The stance lives in the second half.',
  },

  /* ── 31 ──────────────────────────────────────────── */
  {
    id: 'e4-worked',
    reveal: true,
    kicker: 'Exercise 4 — worked example',
    title: 'Three speakers, three decisions',
    dense: true,
    sub: 'Read all eight statements first, write your gist labels, then match these three speakers.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="match" style="grid-template-columns:1fr 1fr">
            <div class="stmt used"><span class="sl">S1</span><span><b>D</b> — wish I'd started sooner</span></div>
            <div class="stmt used"><span class="sl">S2</span><span><b>F</b> — nearly quit early on</span></div>
            <div class="stmt used"><span class="sl">S3</span><span><b>E</b> — social &gt; the activity</span></div>
            <div class="stmt unused"><span class="sl">?</span><span><b>H</b> — prefers doing it alone</span></div>
          </div>
          <div class="tape mt-14" style="font-size:0.78rem">
            <span class="sp">SPEAKER 1:</span> I'd wanted to try it for years and kept putting it off. Honestly, I should have started a <span class="hl-g">decade ago</span> — I've no idea what I was waiting for.<br><br>
            <span class="sp">SPEAKER 2:</span> The first three weeks were grim, I won't pretend otherwise — I told my partner I was <span class="hl-g">packing it in</span>. Then something clicked.<br><br>
            <span class="sp">SPEAKER 3:</span> I often <span class="hl-r">go on my own</span>, and that's fine — but honestly the reason I <span class="hl-g">keep going back</span> is the <span class="hl-g">group</span>. Half the time we barely do anything; we just sit and talk.
          </div>
        </div>
        <div>
          <div class="callout ok"><b>S1 = D.</b> “Should have started a decade ago” — a <b>past decision</b>, paraphrased. A (“surprised how quickly I improved”) is a different proposition entirely: nothing about rate of progress is said.</div>
          <div class="callout ok mt-10"><b>S2 = F.</b> “I was packing it in.” <b>No shared vocabulary</b> with “nearly quit” — this is a paraphrase-and-idiom item. A student who does not know <em>pack it in</em> loses the mark even with perfect attention.</div>
          <div class="callout ok mt-10"><b>S3 = E, and H is the trap.</b> H is built directly from “I often go on my own”. But the speaker <b>subordinates</b> it: “and that's fine — <b>but</b> honestly the reason I keep going back is the group.” Direction decided by <code>but</code>.</div>
          <div class="callout warn mt-10"><b>Note what the trap was made of:</b> a real phrase from the audio, in the right topic, pointing the wrong way. That is Exercise 4 in one sentence.</div>
          <div class="callout info mt-10"><b>Marking check:</b> three speakers, three different statements, no repetition — and H left spare. If you had written E twice, the ledger would have shown it immediately.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">6 min</span>Set this up properly: read all eight statements with the class, take gist labels from students, then play (or read) these three speakers. Then reveal. ' +
      '<b>S1 = D</b> is the "different proposition" trap — A is also positive and about the same experience, but it is about rate of improvement, not a regret about the start date. This is why the gist label must capture the proposition. ' +
      '<b>S2 = F</b> is a straight vocabulary gap for many students: <em>pack it in</em> = quit. Note that this is not an inference question at all — it is idiom knowledge. For a B2/C1 class, drill a short list of these: pack it in, give it a go, get the hang of it, be put off, take to something, come round to. ' +
      '<b>S3 = E versus H</b> is the centrepiece. H is derived verbatim from the audio ("I often go on my own") and is wrong because the speaker subordinates it with <b>and that\'s fine — but honestly, the reason I keep going back is the group.</b> This is the keyword reflex in its purest form. ' +
      'Finish on the ledger: three speakers, three distinct statements, H left spare — the count confirms it. ' +
      'Reminder: these speaker scripts are teaching constructions written to isolate the trap mechanisms; use official 0511 audio for authentic practice.',
  },
];
