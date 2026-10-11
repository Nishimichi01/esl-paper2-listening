/* ═══ PART H — CROSS-CUTTING SKILLS (slides 37–44) ═══ */

export const h = [
  /* ── 37 ──────────────────────────────────────────── */
  {
    id: 'distractor-taxonomy',
    kicker: 'Cross-cutting skills · 1 of 8',
    title: 'The nine traps the whole paper is built from',
    dense: true,
    sub: 'Every wrong option in all five exercises is a version of one of these. Learn the list and you stop being surprised.',
    body: `
      <div class="s-grid s-grid--3">
        <div class="s-card tint-r"><span class="tag tag-r">1 · word-spotting</span>
          <h3>The familiar word</h3>
          <p>Repeats a striking word from the audio. You recognise it, feel safe, and stop listening.</p>
          <p style="color:#FFB3C0"><b>Feel the reflex — then check.</b></p></div>
        <div class="s-card tint-r"><span class="tag tag-r">2 · verbatim vs paraphrase</span>
          <h3>The quoting distractor</h3>
          <p>Distractors quote the audio; the correct option <b>re-words</b> it.</p>
          <p style="color:#FFB3C0"><b>Distrust the echo.</b></p></div>
        <div class="s-card tint-a"><span class="tag tag-a">3 · wrong speaker</span>
          <h3>Right words, wrong mouth</h3>
          <p>True of the other speaker, or of the interviewer's guess. Classic in Exercise 5.</p>
          <p style="color:#FFE09B"><b>Ask: who said it?</b></p></div>
        <div class="s-card tint-a"><span class="tag tag-a">4 · half-true</span>
          <h3>First half right</h3>
          <p>The option's first clause matches; the second clause contradicts the text.</p>
          <p style="color:#FFE09B"><b>Read the option to its end.</b></p></div>
        <div class="s-card tint-v"><span class="tag tag-v">5 · temporal reversal</span>
          <h3>Cause and effect swapped</h3>
          <p>Event placed at the wrong point, or a reason and a result exchanged.</p>
          <p style="color:#D6C6FF"><b>Order the story in the margin.</b></p></div>
        <div class="s-card tint-r"><span class="tag tag-r">6 · negation &amp; contrast</span>
          <h3>“Not the problem”</h3>
          <p>The option names something the speaker explicitly rejected.</p>
          <p style="color:#FFB3C0"><b>Hunt <code>not</code> · <code>actually</code> · <code>turned out</code>.</b></p></div>
        <div class="s-card tint-a"><span class="tag tag-a">7 · near-miss number</span>
          <h3>The other figure</h3>
          <p>A number that belongs to a different referent, or a slightly different figure.</p>
          <p style="color:#FFE09B"><b>Write both numbers down.</b></p></div>
        <div class="s-card tint-b"><span class="tag tag-b">8 · plausible world</span>
          <h3>True, but not here</h3>
          <p>Reasonable in real life, unsupported by this recording.</p>
          <p style="color:#9FD0FF"><b>Only the text counts.</b></p></div>
        <div class="s-card tint-v"><span class="tag tag-v">9 · scope &amp; degree</span>
          <h3>The overstated version</h3>
          <p><em>some → all</em>, <em>sometimes → always</em>, <em>could → will</em>, <em>unsure → furious</em>.</p>
          <p style="color:#D6C6FF"><b>Match the intensity.</b></p></div>
      </div>
      <div class="footnote"><b>How to use this on paper:</b> when you get an item wrong in practice, do not write “careless”. Write the <b>number</b> from this list. Within three papers you will discover that most of your losses come from two or three of these nine — and those are the only ones you need to fix.</div>`,
    notes:
      '<span class="ntime">5 min</span>This is the reference slide students should photograph and keep. Nine trap types, and the reassuring structural point: <b>every wrong option in all five exercises is a version of one of these.</b> ' +
      'The taxonomy is grounded in listening-assessment research — lexical overlap and word-spotting (Field 2003, <em>ELT Journal</em> 57/4; Field 2008), verbatim-versus-paraphrase key construction and plausible-world distractors (Buck 2001, <em>Assessing Listening</em>), wrong-speaker and half-true options (Nissan, DeVincenzi & Tang 1995; Freedle & Kostin 1996). Some of the finer labels are practitioner conventions; the mechanisms are documented. ' +
      'Do not lecture all nine. Instead, run a quick game: read out a distractor scenario and have students shout the number. That builds the retrieval reflex far better than explanation. ' +
      'That explains why this is the most important exercise on the slide. Students who write "careless" learn nothing, because "careless" has no fix. Students who write "negation" have a specific remedy: hunt for <em>not, actually, turned out</em>. ' +
      'If you only have time to teach three, teach 1, 6 and 9 — in my experience with this specification those three account for the majority of avoidable losses for a B2-high/C1 cohort.',
  },

  /* ── 38 ──────────────────────────────────────────── */
  {
    id: 'three-breakdowns',
    dense: true,
    kicker: 'Cross-cutting skills · 2 of 8',
    title: 'Why you lose marks: three different failures',
    sub: '“I didn\'t understand” hides three completely different problems — and each has a different cure. Diagnose yours before you practise more.',
    body: `
      <div class="s-grid s-grid--3">
        <div class="s-card tint-b"><span class="tag tag-b">Level 1 · PERCEPTION</span>
          <h3>“I did not even hear the word.”</h3>
          <p><b>What it looks like:</b> a word you know perfectly becomes an unrecognisable blur; you cannot find where one word ends and the next begins; you miss the very first words.</p>
          <p><b>The real cause:</b> connected speech — weak forms, linking, elision. Not vocabulary.</p>
          <p><b>The cure:</b> <span style="color:#9FD0FF">micro-listening transcription</span> — 5–10 minutes, 2–3× a week.</p>
        </div>
        <div class="s-card tint-a"><span class="tag tag-a">Level 2 · PARSING</span>
          <h3>“I heard every word and forgot it instantly.”</h3>
          <p><b>What it looks like:</b> you understand each sentence as it arrives, then cannot recall the argument; you lose the thread by item 4.</p>
          <p><b>The real cause:</b> no structure in working memory. You never built a skeleton.</p>
          <p><b>The cure:</b> <span style="color:#FFE09B">margin-mapping</span> — numbers and symbols, never prose. And never translate word-by-word in your head.</p>
        </div>
        <div class="s-card tint-v"><span class="tag tag-v">Level 3 · UTILISATION</span>
          <h3>“I understood it all — and still chose wrong.”</h3>
          <p><b>What it looks like:</b> the words were clear, the meaning was clear, and the option you chose was the trap. Or you got the message but missed the <b>intent</b>.</p>
          <p><b>The real cause:</b> you answered the wrong question, or missed the stance.</p>
          <p><b>The cure:</b> <span style="color:#D6C6FF">question-word discipline</span> and the trap taxonomy.</p>
        </div>
      </div>
      <div class="s-grid s-grid--2 mt-14 gap-lg">
        <div class="callout ok"><b>Diagnose before you drill.</b> Track your errors across three practice papers and label each one <b>1</b>, <b>2</b> or <b>3</b>. If most are level 1, stop doing more mock papers — your time belongs in micro-listening. If most are level 3, your English is fine and your <b>technique</b> is the problem. Most B2-high/C1 students lose marks at level <b>3</b>, not level 1.</div>
        <div class="callout warn"><b>The hidden habit: mental translation.</b> Translating each phrase into your first language consumes the exact working memory you need for the next sentence. It feels thorough; it is the most expensive habit in the room. Practise listening for <b>meaning</b>, not for word-for-word equivalents.</div>
      </div>
      <div class="footnote">Classification based on Goh (2000), <em>System</em> 28(1): listening breakdowns fall into perception, parsing and utilisation failures; the metacognitive questionnaire in Vandergrift, Goh, Mareschal &amp; Tafaghodtari (2006) identifies mental translation as a distinct, testable listening habit.</div>`,
    notes:
      '<span class="ntime">5 min</span>This is a diagnostic slide and it may be the most practically useful one for your specific cohort. The framework is Goh (2000): breakdowns in L2 listening fall into <b>perception</b> (decoding the stream), <b>parsing</b> (building a representation) and <b>utilisation</b> (using the representation to answer). ' +
      'The single most valuable sentence for a B2-high/C1 class: <b>most of you are not losing marks at level 1 or 2 — you are losing them at level 3.</b> That means more English practice will not help much. Question-word discipline and trap awareness will. Say that explicitly, because most students respond to lost marks by doing more listening, which is the wrong medicine if the problem is technique. ' +
      'For students who genuinely fail at level 1, the prescription is micro-listening transcription (Field 2003), not harder tests. Field\'s key insight is that failure of <b>lexical segmentation</b> — finding where words begin and end — is a primary cause of breakdown, and it is independent of vocabulary size. So a student with excellent vocabulary can still fail to hear "an ice cream" as three words. ' +
      'The mental-translation warning comes from the MALQ (Vandergrift et al. 2006), which identifies translation as a distinct and measurable listening problem. Have students notice the habit in themselves this week; naming it is half the cure.',
  },

  /* ── 39 ──────────────────────────────────────────── */
  {
    id: 'paraphrase-training',
    dense: true,
    kicker: 'Cross-cutting skills · 3 of 8',
    title: 'Paraphrase is the real vocabulary test',
    sub: 'The paper rarely repeats your words. It says the same thing differently, and you have to recognise the match.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="s-steps">
            <div class="s-step"><span class="sn">1</span><div class="sbody"><span class="st">Keep a paraphrase journal</span>
              <span class="sd">One column: <b>what the audio said</b>. Other column: <b>how the option said it</b>. Every practice paper adds ten entries. This is the highest-yield revision artefact you can build.</span></div></div>
            <div class="s-step"><span class="sn">2</span><div class="sbody"><span class="st">Notice the four paraphrase moves</span>
              <span class="sd"><b>Synonym</b> (redundant → lost your job) · <b>Idiom</b> (pack it in → quit) · <b>Nominalisation</b> (we chose → the choice) · <b>Polarity flip</b> (wasn't cheap → expensive).</span></div></div>
            <div class="s-step"><span class="sn">3</span><div class="sbody"><span class="st">Practise it as a task, not as listening</span>
              <span class="sd">Take a transcript. Cover the audio. For each option, find the word or phrase that licenses or kills it. <b>Five minutes, no audio.</b> This trains the exact skill the exam tests.</span></div></div>
            <div class="s-step g"><span class="sn">4</span><div class="sbody"><span class="st">Learn the hedged evaluatives</span>
              <span class="sd">The phrases that carry opinions are a finite, recurring list — and options paraphrase them constantly. Build the list.</span></div></div>
          </div>
        </div>
        <div>
          <div class="tbl-wrap">
            <table class="tbl">
              <thead><tr><th>What the audio says</th><th>The option says</th><th class="cen">Move</th></tr></thead>
              <tbody>
                <tr><td>“I was made redundant.”</td><td>She lost her job.</td><td class="cen"><span class="pill pill-b">synonym</span></td></tr>
                <tr><td>“I was packing it in.”</td><td>She nearly quit.</td><td class="cen"><span class="pill pill-b">idiom</span></td></tr>
                <tr><td>“It grew on me.”</td><td>She came to enjoy it.</td><td class="cen"><span class="pill pill-b">idiom</span></td></tr>
                <tr><td>“It wasn't cheap.”</td><td>It was expensive.</td><td class="cen"><span class="pill pill-v">polarity</span></td></tr>
                <tr><td>“We decided to…”</td><td>The decision was…</td><td class="cen"><span class="pill pill-a">nominal</span></td></tr>
                <tr><td>“I'd rather not.”</td><td>She is unwilling.</td><td class="cen"><span class="pill pill-b">synonym</span></td></tr>
                <tr><td>“It's not really my thing.”</td><td>He dislikes it.</td><td class="cen"><span class="pill pill-v">hedged → flat</span></td></tr>
                <tr><td>“Ask me again next year.”</td><td>She is undecided.</td><td class="cen"><span class="pill pill-a">indirect</span></td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout ok mt-14"><b>Why this works.</b> The design rule of the paper is that the key paraphrases and the distractors quote (Buck 2001; Field 2008). If you train paraphrase recognition deliberately, you are training exactly what is measured.</div>
          <div class="callout warn mt-10"><b>Do not learn paraphrase as a word list alone.</b> Learn it as <b>pairs</b> — audio version next to option version. Pairs are what you will recognise under time pressure.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">5 min</span>Frame it bluntly: <b>Paper 2 does not test whether you know the word; it tests whether you recognise the word when it is said differently.</b> That is why a student with strong vocabulary can still score 22/40. ' +
      'The paraphrase journal is the single most valuable artefact you can ask them to keep. Two columns: audio version, option version. Ten entries per practice paper. By the exam they will have a personal dictionary of the moves Cambridge actually uses — which is far more useful than a generic vocabulary list. ' +
      'Teach the four moves explicitly: <b>synonym</b> (redundant → lost your job), <b>idiom</b> (pack it in → quit), <b>nominalisation</b> (we decided → the decision), and <b>polarity flip</b> (wasn\'t cheap → expensive). The polarity flip is the most dangerous, because the meaning is inverted rather than re-worded. ' +
      'Step 3 is a genuinely efficient drill: transcript plus options, no audio, five minutes, draw the licensing line. It trains the discrimination skill in isolation, without the perceptual load. Research supports explicit strategy instruction producing transferable gains (Graham & Macaro 2008, <em>Language Learning</em> 58/4 — gains after roughly ten weeks of clustered strategy work).',
  },

  /* ── 40 ──────────────────────────────────────────── */
  {
    id: 'numbers-traps',
    dense: true,
    kicker: 'Cross-cutting skills · 4 of 8',
    title: 'Numbers, times, dates and prices',
    sub: 'Numbers are the most trap-rich content in the paper, because they can be said twice and both times can be true of something different.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="s-card tint-r"><h3><span class="ico">🔁</span>Self-repair</h3>
            <p>“It's three fifteen — sorry, three fifty.” <b>The first number is the trap.</b> Wait for the full sentence, and always let a correction finish.</p></div>
          <div class="s-card tint-a mt-10"><h3><span class="ico">👥</span>Two-referent numbers</h3>
            <p>“The coat was £40 and the scarf £15.” Three possible answers exist: 40, 15, 55. <b>Match the number to its owner.</b></p></div>
          <div class="s-card tint-v mt-10"><h3><span class="ico">≈</span>Approximate vs exact</h3>
            <p>“About two hundred” then “two hundred and eighteen”. If the question asks <em>how many exactly</em>, only the precise figure answers it.</p></div>
          <div class="s-card tint-b mt-10"><h3><span class="ico">÷</span>Unit and scope switch</h3>
            <p><em>per person vs total</em>, <em>per night vs per week</em>, <em>£ vs €</em>, <em>per cent vs amount</em>. The number is right; the unit is wrong.</p></div>
        </div>
        <div>
          <div class="s-card tint-a"><h3><span class="ico">🔉</span>-teen and -ty</h3>
            <p><b>thirteen / thirty · fourteen / forty · fifteen / fifty · sixteen / sixty</b><br>Stress is the only difference. Drill these aloud until they are automatic — this trap appears again and again.</p></div>
          <div class="s-card mt-10"><h3><span class="ico">🔢</span>Ordinal vs cardinal</h3>
            <p>“the third of May” vs “May the third” — and “the third attempt” vs “three attempts”. Listen for the word <b>the</b> and the noun after it.</p></div>
          <div class="s-card mt-10"><h3><span class="ico">🔤</span>Spelled names &amp; homophones</h3>
            <p>Phone letters (S for Sierra), plus confusables: <b>B/V · G/J · S/F · M/N</b>. Homophones: <b>wait/weight · eight/ate · one/won · knew/new</b>.</p></div>
          <div class="callout ok mt-14"><b>The three-minute drill.</b> Twenty numbers dictated in three minutes: one self-repair, one two-referent pair, one <em>-teen/-ty</em> pair, one unit switch. Twice a week. This is the cheapest mark-recovery drill in the whole deck.</div>
          <div class="footnote">The typology above is practitioner-standard rather than item-validated; the supporting research evidence for number items is that options with more numerical detail are harder (Nissan et al. 1995; Freedle &amp; Kostin 1996).</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>Numbers feel easy and are not. The reason is structural: a number can be spoken twice and both utterances can be true of different things — so recognising the number is not the same as answering the question. ' +
      'Walk the four patterns on the left, then the three on the right. The <b>-teen/-ty</b> pair deserves real choral drilling: say thirteen, thirty, fourteen, forty, and let students hear how little separates them. This is a genuine perceptual problem for many learners and it is trivially fixable with practice. ' +
      'The <b>self-repair</b> pattern is the most common and the most exploitable: "three fifteen — sorry, three fifty". The correction is the answer; the first figure is the trap. Teach students that a number followed by <em>sorry / I mean / actually</em> is unfinished business. ' +
      'Be honest about the evidence base: the specific trap list is practitioner-standard, while the research supports the general finding that number-dense options are harder. That does not make the drills less useful — it just means you should verify against your own past papers. ' +
      'Prescribe the three-minute drill. Twenty numbers, twice a week, with the four trap types deliberately embedded. It is the highest return-on-time activity in the whole practice plan.',
  },

  /* ── 41 ──────────────────────────────────────────── */
  {
    id: 'connected-speech',
    kicker: 'Cross-cutting skills · 5 of 8',
    title: 'Why fast English defeats you — and the five-minute fix',
    sub: 'You know the words. You cannot hear them. That is not a vocabulary problem, and more vocabulary will not fix it.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="tbl-wrap">
            <table class="tbl">
              <thead><tr><th>Feature</th><th>Written</th><th>What reaches your ear</th></tr></thead>
              <tbody>
                <tr><td><b>Weak forms</b></td><td>a cup <b>of</b> tea</td><td>“a cup ə tea”</td></tr>
                <tr><td><b>Contractions</b></td><td>should not have</td><td>“shouldn't've” → “ʃʊdnəv”</td></tr>
                <tr><td><b>Linking</b></td><td>turn it off</td><td>“tur-ni-toff”</td></tr>
                <tr><td><b>Assimilation</b></td><td>would you / in bed</td><td>“wudja” / “im bed”</td></tr>
                <tr><td><b>Elision</b></td><td>next day / last night</td><td>“nex' day” / “las' night”</td></tr>
                <tr><td><b>Reductions</b></td><td>going to / want to</td><td>“gonna” / “wanna”</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout warn mt-14"><b>The real diagnosis.</b> Research on L2 listening shows that failure to find <b>word boundaries</b> in the stream is a primary cause of breakdown — and it is <b>independent of vocabulary size</b> (Field 2003). You can have excellent vocabulary and still fail to hear <em>“an ice cream”</em> as three words.</div>
        </div>
        <div>
          <div class="s-card tint-g"><h3><span class="ico">✂️</span>The micro-listening drill — 5–10 min, 2–3× a week</h3>
            <p><b>1.</b> Take 10–12 words of authentic audio (a past-paper extract is perfect).<br>
               <b>2.</b> Play it at natural speed, twice. <b>Transcribe exactly what you hear.</b><br>
               <b>3.</b> Compare with the transcript.<br>
               <b>4.</b> <b>Name the feature</b> that defeated you — “elision”, “weak form”, “linking”.</p>
            <p style="margin-top:8px">This is decoding practice, not comprehension practice. Keep it short and frequent.</p></div>
          <div class="callout ok mt-10"><b>Why short and frequent?</b> Because you are training a perceptual reflex, not building knowledge. Ten focused minutes beat an hour of passive listening, and the naming step in (4) is what makes it transfer to the exam.</div>
          <div class="callout info mt-10"><b>And feed the reflex.</b> Evidence suggests automaticity with fast speech comes from large volumes of <b>easy</b> listening — content you understand without effort (Renandya &amp; Farrell 2011). So: micro-listening for precision, plus 15–20 minutes of easy listening for speed.</div>
          <div class="footnote">Features from Brown (1977/90), <em>Listening to Spoken English</em>, and Cauldwell (2013), <em>Phonology for Listening</em>.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">5 min</span>This slide fixes a misconception that costs marks every year: students hear the problem as "my vocabulary is too small" and respond by learning more words. But Field (2003) shows that failure of <b>lexical segmentation</b> — finding word boundaries — is a primary cause of listening breakdown and is independent of vocabulary size. ' +
      'Demonstrate two or three features with your voice. Say "a cup of tea" naturally and then say "a cup ə tea". Say "turn it off" as "tur-ni-toff". Students find this immediately convincing because they recognise their own experience. ' +
      'Then prescribe the drill precisely: 10–12 words, natural speed, twice, transcribe, compare, <b>name the feature</b>. Step 4 is what most people skip and it is what makes the practice transfer, because naming turns an incident into a category. ' +
      'Two cautions. First, keep it short and frequent — this trains a reflex, not knowledge. Second, do not let micro-listening replace comprehension work. Renandya & Farrell (2011) argue automaticity with fast speech comes from volume of <b>easy</b> listening, so prescribe 15–20 minutes of comfortable listening alongside the precision drill. ' +
      'If you do one homework task from this whole workshop, this is the one with the clearest measurable effect for your cohort.',
  },

  /* ── 42 ──────────────────────────────────────────── */
  {
    id: 'signposting',
    kicker: 'Cross-cutting skills · 6 of 8',
    title: 'Signposting: the map is spoken out loud',
    sub: 'Every monologue announces its own structure. If you can hear the signposts, you always know where you are — and when to move to the next question.',
    body: `
      <div class="s-grid s-grid--3">
        <div class="s-card"><h3><span class="ico">1️⃣</span>Sequencing</h3>
          <p><em>first of all · to begin with · then · after that · next · meanwhile · finally · to finish</em></p>
          <p style="color:#9FB0C7">→ <b>Move your eyes to the next question number.</b></p></div>
        <div class="s-card"><h3><span class="ico">➕</span>Addition</h3>
          <p><em>also · as well as · on top of that · in addition · not only… but also</em></p>
          <p style="color:#9FB0C7">→ A second, related answer is coming. Do not move on yet.</p></div>
        <div class="s-card tint-v"><h3><span class="ico">↩️</span>Contrast</h3>
          <p><em>but · however · although · whereas · actually · in fact · that said · having said that</em></p>
          <p style="color:#D6C6FF">→ <b>The answer almost always comes after this word.</b></p></div>
        <div class="s-card tint-a"><h3><span class="ico">➡️</span>Cause &amp; effect</h3>
          <p><em>because · since · so · as a result · consequently · that's why · led to</em></p>
          <p style="color:#FFE09B">→ L3 questions live here. Note the direction: cause → effect.</p></div>
        <div class="s-card"><h3><span class="ico">🗂️</span>Exemplifying</h3>
          <p><em>for example · for instance · such as · like · take… for example</em></p>
          <p style="color:#9FB0C7">→ A detail after a general statement. Often the answer.</p></div>
        <div class="s-card tint-g"><h3><span class="ico">🏁</span>Concluding &amp; evaluating</h3>
          <p><em>so overall · in the end · the main point is · what I'd say is · if you take one thing away</em></p>
          <p style="color:#8BEBC6">→ <b>The speaker's own summary. Frequently the L4 answer.</b></p></div>
      </div>
      <div class="s-grid s-grid--2 mt-14 gap-lg">
        <div class="callout ok"><b>Use signposts as a clock.</b> In Exercise 3, you have eight sentences and one monologue. The sequencing markers tell you when the speaker has finished with sentence 3 and moved to sentence 4. Without them, you are guessing where you are.</div>
        <div class="callout warn"><b>Train your ear on contrast words first.</b> Of all six families, <b>contrast</b> carries the most marks, because it is how the exam flips a distractor into an answer: “Everyone said X would be the problem. <b>Actually</b>, it was Y.”</div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>Signposting is the structural inverse of vocabulary: students do not need to produce these words, they need to <b>hear</b> them as navigation instructions. Reframe them as a clock and a map rather than as language to learn. ' +
      'The most useful framing is on the first card: sequencing markers tell you <b>when to move your eyes to the next question number</b>. In Exercise 3 in particular, students who miss "the next thing was" stay parked on sentence 3 and lose sentence 4. Teaching signposts as a clock fixes that. ' +
      'Then prioritise: if you only teach one family, teach <b>contrast</b>. It carries the most marks across the paper because it is the mechanism by which a stated distractor is cancelled and the answer supplied — "everyone said the weather; actually, it was the paperwork". This is the same mechanism as the negation trap from Exercise 1 and the concession structures from Exercise 5. Make the connection explicit for students: it is one idea appearing in five exercises. ' +
      'Cause-and-effect markers are the L3 tell. For connection questions, have students physically draw the arrow in the margin: cause → effect, or effect ← cause. Seeing the direction written down prevents the temporal-reversal trap.',
  },

  /* ── 43 ──────────────────────────────────────────── */
  {
    id: 'tone-attitude',
    kicker: 'Cross-cutting skills · 7 of 8',
    title: 'Tone carries meaning that words do not',
    sub: 'The same sentence can mean approval or contempt. In L2 and L4 questions, intonation is evidence.',
    body: `
      <div class="s-grid s-grid--2 gap-lg">
        <div>
          <div class="s-card tint-v"><h3><span class="ico">🎭</span>Understatement</h3>
            <p><em>“Well… that was an interesting evening.”</em> With a flat, slow delivery, <b>interesting</b> means the opposite. English speakers soften negative opinions constantly — and examination questions test whether you noticed.</p></div>
          <div class="s-card tint-a mt-10"><h3><span class="ico">🔀</span>Contrastive stress</h3>
            <p>Stress decides the meaning:<br>
              <em>“<b>I</b> didn't say that.”</em> → someone else did.<br>
              <em>“I didn't say <b>that</b>.”</em> → I meant something else.<br>
              <em>“I didn't <b>say</b> it.”</em> → I implied it.</p></div>
          <div class="s-card mt-10"><h3><span class="ico">📉</span>Trailing off</h3>
            <p><em>“The food was lovely, the staff were great…”</em> and then nothing. The sentence that was <b>never finished</b> carries the verdict. Listen for the omission.</p></div>
        </div>
        <div>
          <div class="s-card tint-b"><h3><span class="ico">🎚️</span>Read the three dials</h3>
            <p><b>1. Speed</b> — hesitation and slowing mean discomfort or doubt.<br>
               <b>2. Pitch</b> — a rise on an apparently positive word can signal sarcasm.<br>
               <b>3. Stress</b> — the emphasised word is the speaker's real focus.</p>
            <p style="margin-top:8px">When the words and the delivery disagree, <b>trust the delivery</b>.</p></div>
          <div class="callout ok mt-14"><b>How this wins marks.</b> An L4 option like <em>“She was less impressed than she expected”</em> is usually supported by <b>one hedged phrase and one flat tone</b>, not by a statement. If you only process words, you cannot answer it.</div>
          <div class="callout warn mt-10"><b>Do not over-read tone.</b> If a question is purely factual (L1), ignore delivery entirely and answer from the content. Tone is for L2 and L4 — do not let it talk you out of a clear factual answer.</div>
          <div class="callout info mt-10"><b>Where the marking scheme sits:</b> every option is worth one mark, and there is no partial credit for “nearly right”. So the difference between “disappointed” and “furious” is a whole mark — which is exactly what degree and tone are testing.</div>
        </div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>This slide teaches students to use <b>paralinguistic</b> evidence — the part of listening that the question paper cannot print. It matters because L2 and L4 options frequently generalise from tone: "she was less impressed than she expected" is supported by a hedge plus a flat delivery, not by a sentence. ' +
      'Demonstrate the contrastive-stress set yourself, with exaggerated stress. Change the stressed word in "I didn\'t say that" and let the class tell you what each version means. This is memorable and it transfers directly to exam items where the stressed word is the distinguishing evidence. ' +
      'Understatement is the highest-value item on this slide for British-English exam material: "that was an interesting evening" meaning "it was awful", "it wasn\'t terrible" meaning "it was bad". Have students collect these hedged negatives from real papers. ' +
      'Include the caution on the right. Teaching tone-awareness can produce over-correction: students start inventing sarcasm where there is none and second-guessing clear factual answers. Rule: <b>tone is for L2 and L4; for L1, answer from content.</b> ' +
      'The closing note about no partial credit is worth saying: one mark per question means "nearly right" scores zero, which is precisely why degree and intensity matter so much.',
  },

  /* ── 44 ──────────────────────────────────────────── */
  {
    id: 'inference-ladder',
    kicker: 'Cross-cutting skills · 8 of 8',
    title: 'The inference ladder: L1 up to L4',
    sub: 'The four assessment objectives are a ladder, not four separate skills. Climb it deliberately on every extract — and know when to stop.',
    body: `
      <div class="ladder">
        <div class="rung l4"><span class="rl">L4 · implied</span><span class="rt">You assemble the answer from evidence. <em>“Physically I was fine, but I missed people and it was hard.”</em> → <b>lonely</b>. The word is never said.<br><b>Ask:</b> what would I conclude if I were in the room?</span></div>
        <div class="rung"><span class="rl">L3 · connections</span><span class="rt">You link two ideas. <em>“Because the buses stopped, she walked.”</em> → <b>the reason she walked</b>.<br><b>Ask:</b> cause → effect, or earlier → later? Which direction?</span></div>
        <div class="rung"><span class="rl">L2 · stance</span><span class="rt">You identify an opinion. <em>“Honestly, it was a waste of money.”</em> → <b>she regrets it</b>.<br><b>Ask:</b> positive or negative, and how strongly?</span></div>
        <div class="rung"><span class="rl">L1 · stated fact</span><span class="rt">You match information. <em>“The tour leaves at nine fifteen.”</em> → <b>time = 9:15</b>.<br><b>Ask:</b> was it stated, and was it later changed?</span></div>
      </div>
      <div class="s-grid s-grid--3 mt-14">
        <div class="callout ok"><b>Climb every time.</b> A secure habit: after each extract, ask yourself the four questions from bottom to top. Items are not evenly distributed — 24 of the 40 marks involve L4 — but the ladder keeps you from stopping at L1 by default.</div>
        <div class="callout warn"><b>Do not over-climb.</b> Exercise 3 tests only L1–L3, and many items elsewhere are honestly just L1. Inventing an implication where none exists is as expensive as missing one. The question and the option wording tell you how high to go.</div>
        <div class="callout info"><b>How to know a question is L4:</b> usually the option wording is a <b>feeling, judgement or intention</b> — “disappointed”, “keen to return”, “unsure”, “wanted to prove something” — rather than a fact. Feeling words in options are your L4 alarm.</div>
      </div>`,
    notes:
      '<span class="ntime">4 min</span>The ladder is the synthesis of the whole deck: L1 to L4 is not four separate skills but four levels of processing the same recording, and students can climb deliberately. ' +
      'The practical alarm is on the bottom right and it is the most usable heuristic: <b>if an option names a feeling, judgement or intention rather than a fact, expect L4.</b> Words like disappointed, keen, unsure, reluctant, and "wanted to…" are the tell. Teach that as a scan-time flag: circle those options during the pre-listening silence. ' +
      'The over-climbing warning matters for this cohort in particular. B2-high/C1 students who have been taught inference often over-apply it: they reject a plainly stated fact because it "seems too obvious" and choose a sophisticated implication instead. Rule: <b>the question and the option wording tell you how high to climb</b> — and Exercise 3 is explicitly L1–L3 only. ' +
      'Remind them of the numbers: 24 of the 40 marks are in exercises that include L4 — Exercises 2, 4 and 5. So the ladder is not academic; two thirds of the paper rewards the top rung.',
  },
];
