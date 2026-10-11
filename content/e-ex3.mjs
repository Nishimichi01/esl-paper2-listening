/* ═══ PART E — EXERCISE 3 (slides 22–26) ═══ */

export const e = [
  /* ── 22 ──────────────────────────────────────────── */
  {
    id: 'e3-anatomy',
    kicker: 'Exercise 3',
    title: 'One monologue, eight sentences, and grammar on your side',
    sub: 'The only exercise in the paper where the question paper itself can eliminate wrong answers before you hear a single word.',
    exBadge: '<div class="ex-badge"><span class="ens">3</span>Exercise 3 · 8 marks <span class="ao">SKILLS L1 · L2 · L3</span></div>',
    body: `
      <div class="stats">
        <div class="stat"><div class="k">Texts</div><div class="v">1 <small>monologue</small></div></div>
        <div class="stat"><div class="k">Questions</div><div class="v">8 <small>sentences</small></div></div>
        <div class="stat"><div class="k">Options</div><div class="v">3 <small>A–C</small></div></div>
        <div class="stat"><div class="k">Marks</div><div class="v">8 <small>1 each</small></div></div>
      </div>
      <div class="s-grid s-grid--3 mt-14">
        <div class="s-card"><h3><span class="ico">🎤</span>One speaker, no interruptions</h3>
          <p>A <b>talk or presentation</b> — one voice for the whole extract. There is no second speaker to confuse you, and no dialogue to follow.</p></div>
        <div class="s-card tint-b"><h3><span class="ico">📝</span>You get the sentences</h3>
          <p>Eight <b>incomplete sentences</b> that summarise the talk. Each has a gap, and three written options (a word or short phrase) to fill it.</p></div>
        <div class="s-card tint-g"><h3><span class="ico">🧩</span>The gap is a clue, not a gap</h3>
          <p>Because you can see the sentence around the gap, you can use <b>grammar, collocation and word class</b> to narrow three options to one before the audio begins.</p></div>
      </div>
      <div class="callout ok mt-14"><b>Two gifts in this exercise.</b> First, the sentences normally <b>follow the order of the talk</b> — in practice they act as a map of the monologue's structure (check the rubric and the items on the day rather than assuming it). Second, the options must fit <b>into a written sentence</b>, so grammar alone sometimes identifies the answer. No other exercise gives you either.</div>
      <div class="callout warn mt-10"><b>The one thing Exercise 3 never tests:</b> implied meaning (L4). The syllabus lists L1, L2 and L3 only. So do not hunt for hidden meanings here — listen for <b>information and main ideas</b>, stated plainly.</div>`,
    notes:
      '<span class="ntime">3 min</span>Exercise 3 is the second of the two "easy 16 marks" — 8 marks, and per the syllabus it tests <b>L1, L2 and L3 only</b>. No L4. Tell them that plainly: this exercise rewards clear hearing and grammatical reasoning, not inference. ' +
      'Describe the format precisely from the syllabus: candidates listen to <b>one monologue</b> (e.g. a talk or presentation) and <b>complete eight sentences</b> by selecting from three written options — each a word or a short phrase. The sentences test "understanding of information and main ideas". ' +
      'Then introduce the two structural gifts: in practice the items run in the same order as the talk, so the sentences act as a <b>structural map</b> (present it as the normal design, not a guarantee); and because the options must slot into a written sentence, <b>grammar can do elimination work</b> before the audio starts. ' +
      'This is the key contrast with Exercise 1: there you interpret pictures, here you interpret a sentence. Different cognitive skill, same one mark.',
  },

  /* ── 23 ──────────────────────────────────────────── */
  {
    id: 'e3-gap-prediction',
    dense: true,
    kicker: 'Exercise 3 — technique',
    title: 'Read the gap like a grammar question first',
    sub: 'Before the audio starts, you can often reduce three options to one without knowing anything about the topic.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="s-steps">
            <div class="s-step"><span class="sn">1</span><div class="sbody"><span class="st">What word class does the gap need?</span>
              <span class="sd">A noun? A verb form? An adjective? A number? Circle the gap and write the class above it. Now read each option and cross out anything of the wrong class.</span></div></div>
            <div class="s-step"><span class="sn">2</span><div class="sbody"><span class="st">What does the grammar force?</span>
              <span class="sd"><em>“The garden was built on land that used to be a ____”</em> → the gap must be a <b>singular countable noun</b>. Plural options and verb options die immediately. Grammar has just done work for you, for free.</span></div></div>
            <div class="s-step"><span class="sn">3</span><div class="sbody"><span class="st">Does the sentence have a polarity?</span>
              <span class="sd"><em>“The biggest problem was ____”</em> needs something <b>negative</b>. An option that is obviously positive is wrong before the audio starts.</span></div></div>
            <div class="s-step"><span class="sn">4</span><div class="sbody"><span class="st">Which options collocate with the sentence?</span>
              <span class="sd">English has strong word partnerships. If the sentence says <em>“raised a lot of ____”</em>, the option is far more likely to be <em>money</em> than <em>weather</em>.</span></div></div>
          </div>
        </div>
        <div>
          <div class="qcard">
            <div class="qno">Worked prediction — no audio needed</div>
            <div class="qtext">The site they built the garden on used to be a <span class="gap">______</span> .</div>
            <div class="mcq">
              <div class="opt"><span class="ol">A</span><span class="otx">car park<span class="why">✓ singular countable noun — fits</span></span></div>
              <div class="opt dim"><span class="ol">B</span><span class="otx">parking<span class="why">✕ uncountable; “a parking” is ungrammatical</span></span></div>
              <div class="opt dim"><span class="ol">C</span><span class="otx">cars parked<span class="why">✕ clause, not a noun phrase</span></span></div>
            </div>
          </div>
          <div class="callout ok mt-14"><b>You have already improved your odds from 1-in-3 to 1-in-1.</b> Now the audio only has to <em>confirm</em> your prediction instead of doing all the work.</div>
          <div class="callout warn mt-10"><b>Careful:</b> some items test a word or phrase rather than grammar — e.g. <em>“The speaker began the project because she ____”</em>. Here the gap needs a <b>verb phrase</b>, and the options will all be grammatically possible. When grammar cannot separate them, fall back to meaning and to the order of the talk.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>Exercise 3 is the only place in the paper where a candidate can do real elimination work <b>before</b> the audio — so teach it properly. ' +
      'Walk the four steps with the class on the worked prediction. The critical insight is that the gap imposes a word class, and word class alone can kill an option. "A ____" cannot take "parking" or "cars parked". That is a free elimination. ' +
      'Steps 3 and 4 extend the same logic to polarity and collocation — a problem-sentence wants something negative; strong collocations narrow the field further. ' +
      'Then be honest about the limit: when the options are all the same word class (three different verb phrases, say), grammar cannot decide, and you fall back on meaning and the order of the talk. Teach the ceiling of this technique so students do not over-trust it and reject a correct answer because "the grammar felt odd". ' +
      'Syllabus confirms each option is "either a word or a short phrase" — which is precisely why word-class analysis works so often.',
  },

  /* ── 24 ──────────────────────────────────────────── */
  {
    id: 'e3-margin-map',
    kicker: 'Exercise 3 — during the audio',
    title: 'Margin-map the talk instead of writing words',
    sub: 'You are not taking notes for an essay. You need a skeleton — and you need it in about twelve words.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="tape" style="font-size:0.79rem">
            <span class="sp">What you write in the margin — hearing 1:</span><br>
            <span class="hl">1</span> why / problem <span class="hl">2</span> +  <span class="hl">3</span> −  <span class="hl">4</span> but… <span class="hl">5</span> result <span class="hl">6</span> 2019 <span class="hl">7</span> opinion? <span class="hl">8</span> future
          </div>
          <div class="callout ok mt-14"><b>What that map tells you.</b> Item 2 was positive, item 3 was negative, item 4 turned on a contrast, item 7 was an opinion. Now, on hearing 2, you know exactly what to listen for — and you know which of your answers to check hardest.</div>
          <div class="callout warn mt-10"><b>Write numbers and single symbols — never words.</b> Every full word you write is a second your ear is not listening. Letters and symbols cost nothing.</div>
        </div>
        <div>
          <div class="s-card"><h3><span class="ico">🔢</span>One number per item</h3>
            <p>Before the audio, number your margin 1–8 next to the eight sentences. That is your grid.</p></div>
          <div class="s-card mt-10"><h3><span class="ico">➕</span>Symbols beat words</h3>
            <p><code>+</code> positive · <code>−</code> negative · <code>?</code> unsure · <code>X</code> ruled out · <code>→</code> cause/effect · <code>BUT</code> contrast · <code>#</code> number or date heard</p></div>
          <div class="s-card tint-a mt-10"><h3><span class="ico">🧭</span>Track the signposts</h3>
            <p>Monologues are built in stages. Mark where the speaker moves on: <em>first of all, then, the next thing, after that, now, finally</em>. Those markers tell you when to move to the next sentence.</p></div>
          <div class="callout info mt-10"><b>If you fall behind, do not catch up on the last item — jump forward.</b> Find the next question number, and rejoin there. An item you have abandoned is already lost; the next one is not.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>This is the note-taking slide, and the discipline is the opposite of what students expect. They want to write words; we want them to write <b>signals</b>. ' +
      'Demonstrate the margin map on a real monologue: play 30 seconds of any authentic talk and have the class write only numbers and symbols in the margin beside items 1–8. They will be surprised how much they recapture. ' +
      'The two rules: one number per item, and symbols instead of words. Every word written while listening is a second of hearing given away. ' +
      'Teach the signpost vocabulary as a <b>navigation</b> tool, not as vocabulary to learn — the student who hears "the next thing was" knows to move his eyes down one sentence number. ' +
      'The recovery rule at the bottom matters enormously: if you lose an item, <b>do not claw it back</b>. Redirect to the next question number. Chasing a lost item usually costs the following two. This is where candidates bleed marks in Exercise 3.',
  },

  /* ── 25 ──────────────────────────────────────────── */
  {
    id: 'e3-traps',
    kicker: 'Exercise 3 — the traps',
    title: 'Three options, and two of them were built for you',
    sub: 'Because the answer must fit a sentence, Exercise 3 traps are unusually predictable.',
    body: `
      <div class="s-grid s-grid--3">
        <div class="s-card tint-a"><span class="tag tag-a">Trap 1</span>
          <h3>The plausible-but-unsaid</h3>
          <p>An option that fits the sentence perfectly and is completely reasonable — and is simply <b>never mentioned</b>.</p>
          <p><b>Fix:</b> every option needs <b>evidence from the audio</b>. If you cannot point to the moment, you are guessing.</p>
        </div>
        <div class="s-card tint-r"><span class="tag tag-r">Trap 2</span>
          <h3>The mentioned-and-rejected</h3>
          <p>An option that IS said — attached to something else. <em>“Everyone said the hard part would be the weather. Actually, the paperwork took nine months.”</em></p>
          <p><b>Fix:</b> hunt for <code>actually</code> · <code>in fact</code> · <code>turned out</code> · <code>the real problem was</code>.</p>
        </div>
        <div class="s-card tint-v"><span class="tag tag-v">Trap 3</span>
          <h3>The wrong-relationship</h3>
          <p>The option names something from the text but attaches it to the wrong thing — wrong person, wrong time, wrong reason, wrong place.</p>
          <p><b>Fix:</b> ask <b>who?</b> and <b>when?</b> before you accept a match.</p>
        </div>
      </div>
      <div class="s-grid s-grid--2 mt-14 gap-lg">
        <div class="callout ok"><b>The evidence rule.</b> Three options, one mark, and a written sentence to complete. The correct option is the one you can <b>justify with a specific phrase from the audio</b>. If you cannot say the phrase, you have not earned the mark — you have gambled at 1-in-3.</div>
        <div class="callout warn"><b>Why "it fits the sentence" is not enough.</b> Trap 1 exists precisely because a sentence can be completed sensibly in at least two ways. <b>Plausibility is what the trap is made of.</b> Only the text decides.</div>
      </div>`,
    notes:
      '<span class="ntime">3 min</span>All three Exercise 3 traps share one root: the option has to be <b>plausible</b> to be worth writing. So plausibility is not evidence. Say that sentence twice. ' +
      '<b>Trap 1, plausible-but-unsaid:</b> fits the gap grammatically and semantically, never appears in the audio. This is the most common wrong answer for capable students, because capable students reason their way to a sensible completion instead of listening for the text. ' +
      '<b>Trap 2, mentioned-and-rejected:</b> the option <em>is</em> in the audio, attached to a rejected idea. The fix is the contrast-marker list: <em>actually, in fact, it turned out, the real problem was, in the end</em>. Underline these in the transcript during practice until they jump out. ' +
      '<b>Trap 3, wrong relationship:</b> right content, wrong attachment — the number belongs to a different year, the reason belongs to a different person. The reflective questions are simply <b>who</b> and <b>when</b>. ' +
      'Land the evidence rule: they should be able to quote the phrase that earns each mark. Train the habit by making them do it in feedback — no quote, no mark.',
  },

  /* ── 26 ──────────────────────────────────────────── */
  {
    id: 'e3-worked',
    reveal: true,
    kicker: 'Exercise 3 — worked example',
    dense: true,
    title: 'Complete the sentences — a community garden',
    sub: 'Use steps 1–4 prediction on each sentence before you consider the audio.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="qcard">
            <div class="qno">Sentence 1</div>
            <div class="qtext">The garden was created on the site of an old <span class="gap">______</span> .</div>
            <div class="mcq">
              <div class="opt correct"><span class="ol">A</span><span class="otx">car park</span></div>
              <div class="opt dim"><span class="ol">B</span><span class="otx">playground</span></div>
              <div class="opt dim"><span class="ol">C</span><span class="otx">factory</span></div>
            </div>
          </div>
          <div class="qcard mt-10">
            <div class="qno">Sentence 2</div>
            <div class="qtext">The project started after the speaker <span class="gap">______</span> .</div>
            <div class="mcq">
              <div class="opt dim"><span class="ol">A</span><span class="otx">moved house</span></div>
              <div class="opt correct"><span class="ol">B</span><span class="otx">lost her job</span></div>
              <div class="opt dim"><span class="ol">C</span><span class="otx">joined a club</span></div>
            </div>
          </div>
          <div class="callout ok mt-10"><b>1 = A.</b> “Former car park” — and only A is a singular countable noun that fits <em>“an old ____”</em>.</div>
          <div class="callout ok mt-10"><b>2 = B.</b> The audio says <b>“made redundant”</b>. No shared vocabulary with “lost her job” — a pure <b>paraphrase</b> item, and a vocabulary item as much as a listening one.</div>
        </div>
        <div>
          <div class="tape">
            <span class="sp">SPEAKER:</span> The site we got is a <span class="hl-g">former car park</span> — you can still see the white lines under the soil, which is a bit strange.<br><br>
            It all began a couple of years ago. I'd just been <span class="hl-g">made redundant</span>, so I suddenly had time on my hands and I needed something to do.
          </div>
          <div class="callout info mt-14"><b>What the prediction phase gave you:</b> for sentence 1, the article <em>“an old ____”</em> requires a singular countable noun, so all three options are grammatically possible — but the audio confirms only one. Grammar narrowed nothing here; that is an honest limit of the technique.</div>
          <div class="callout warn mt-14"><b>Sentence 2 is a vocabulary lesson, not a trap.</b> <em>Made redundant</em> = lost your job. If that phrase is not in your active vocabulary, no amount of attention wins this mark. Add it to the paraphrase journal today.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">5 min</span>Run the prediction phase for both sentences aloud before revealing the script. For sentence 1, the honest lesson is that grammar narrowed nothing — “an old ____” is satisfied by all three options, so only the audio decides. Say that, because students over-trust grammatical elimination if you only show them the cases where it works. ' +
      'Sentence 2 is the vocabulary lesson of this exercise: <b>“made redundant”</b> must be recognised as <em>lost her job</em>, with no shared words at all. For a B2/C1 cohort the word should be known — but check, because this single item is a mark and it is a very common gap. ' +
      'Then move to the next slide, which uses sentence 3 to show the trap that actually costs marks in Exercise 3. ' +
      'Reminder: this script is a teaching construction. Use the official 0511 specimen and past-paper audio for authentic practice.',
  },

  /* ── 27 ──────────────────────────────────────────── */
  {
    id: 'e3-worked-2',
    reveal: true,
    kicker: 'Exercise 3 — worked example, part 2',
    title: 'Sentence 3: the trap that costs the mark',
    sub: 'Two of the three options here are built from real words in the audio. Only one answers the question.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="qcard">
            <div class="qno">Sentence 3</div>
            <div class="qtext">The biggest difficulty at the beginning was <span class="gap">______</span> .</div>
            <div class="mcq">
              <div class="opt trap"><span class="ol">A</span><span class="otx">the weather<span class="why">✕ stated — and dismissed by <em>Actually</em></span></span></div>
              <div class="opt correct"><span class="ol">B</span><span class="otx">getting permission<span class="why">✓ “getting the council's permission — that took nine months”</span></span></div>
              <div class="opt trap"><span class="ol">C</span><span class="otx">finding volunteers<span class="why">✕ polarity flip — volunteers came without being asked</span></span></div>
            </div>
          </div>
          <div class="tape mt-14">
            <span class="sp">SPEAKER:</span> Everyone warned me that the <span class="hl-r">weather</span> would be the hard part. <span class="hl-g">Actually</span>, it was <span class="hl-g">getting the council's permission</span> — that took nine months. Once the paperwork was done, <span class="hl-r">volunteers</span> turned up without being asked.
          </div>
        </div>
        <div>
          <div class="s-card tint-r"><span class="tag tag-r">Trap A</span>
            <h3>Mentioned and rejected</h3>
            <p>The weather <b>is</b> in the audio — attributed to other people, and then cancelled by one word: <code>Actually</code>.</p></div>
          <div class="s-card tint-r mt-10"><span class="tag tag-r">Trap C</span>
            <h3>Polarity flip</h3>
            <p>Volunteers <b>are</b> in the audio — but they were <em>not</em> a difficulty. They “turned up without being asked”. The option reverses the evidence.</p></div>
          <div class="callout ok mt-14"><b>The evidence rule in action.</b> Only B has a phrase that earns it: <em>“getting the council's permission — that took nine months”</em>. If you cannot quote the phrase, you have not earned the mark.</div>
          <div class="callout warn mt-10"><b>Say the rule out loud:</b> in Exercise 3, <b>plausibility is what the trap is made of</b>. Both wrong options fit the sentence perfectly. Only the text decides.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>This is the trap demonstration for Exercise 3 and the most valuable half of the worked example. Give the class 20 seconds on sentence 3 before revealing. ' +
      'The teaching point is that <b>both wrong options are built from real audio content</b>. “Weather” is stated — and dismissed by <em>Actually</em>. “Volunteers” is stated — and the polarity is flipped, because volunteers came without being asked. So two of three options are traps made of genuine material. ' +
      'This is exactly why the evidence rule matters: the student must be able to quote the phrase that earns the mark — <em>“getting the council\'s permission — that took nine months”</em>. No quote, no mark; that is the habit to install. ' +
      'Land the generalisation: in Exercise 3, <b>plausibility is what the trap is made of</b>. Capable students reason their way to a sensible completion; the exam requires them to listen for the text instead. ' +
      'Reminder: this script is a teaching construction written to isolate the trap mechanism; use official 0511 audio for authentic practice.',
  },
];
