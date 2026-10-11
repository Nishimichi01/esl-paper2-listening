/* ══ 4 · EXAM CRAFT + CLOSE ══ */

export const craft = [
  /* ── sect ── */
  {
    id: 'sect-craft',
    kind: 'sect',
    num: '04',
    kicker: 'Part four',
    title: 'Exam craft',
    sub: 'The six minutes that decide your paper, the mistakes that cost the most, and a four-week plan you can start tomorrow.',
    notes:
      '<span class="t">1 min</span>Last section. Signal the shift: everything so far was about listening; this part is about <b>the mechanics of the exam room</b>, where marks are lost for reasons that have nothing to do with English.',
  },

  /* ── transfer ── */
  {
    id: 'transfer',
    kicker: 'Exam craft · the last 6 minutes',
    title: 'Forty letters. Six minutes. Do not lose them here.',
    body: `
      <div class="grid g2" style="align-items:start;gap:18px">
        <div>
          <div class="stats" style="grid-template-columns:1fr 1fr;margin-bottom:14px">
            <div class="stat"><div class="v">5:00</div><div class="k">transfer time</div></div>
            <div class="stat"><div class="v">1:00</div><div class="k">final check</div></div>
          </div>
          <ul class="list big-list">
            <li>Transfer in <b>blocks of five</b>. Check each block. Then move on.</li>
            <li><b>Cover the lines below</b> with your hand — this is the single best fix for line errors.</li>
            <li>Shade <b>one letter per question</b>. Erase completely if you change your mind.</li>
            <li>Sweep at the end: no blanks, no double-shaded lines, and your <b>last answer is on line 40</b>.</li>
          </ul>
        </div>
        <div>
          <div class="card r" style="margin-bottom:12px"><h3>The three silent disasters</h3>
            <p><b>Off by one.</b> Everything right, everything on the wrong line.</p>
            <p><b>Double-shaded.</b> Two letters on one line.</p>
            <p><b>Blank line.</b> A blank is worth zero for certain.</p></div>
          <div class="ans ok"><span class="tag">Check</span><div>Count the answer lines as you finish. <b>If your final answer is on line 40, your transfer is almost certainly aligned.</b></div></div>
        </div>
      </div>`,
    notes:
      '<span class="t">4 min</span>Do this one physically if you can — hand out a real multiple-choice answer sheet and have them shade five blocks while covering the lines below with their hand. It takes three minutes and it removes an entire category of loss. ' +
      'The numbers are real: the transcript shows a five-minute pause and then a further one-minute pause before the end of the examination — the six minutes for transferring. That is about nine seconds per line, which is comfortable. <b>The risk is not time, it is mechanical error.</b> ' +
      'Emphasise the count check, because it is arithmetic they already trust: 8 + 10 + 8 + 6 + 8 = 40. If the last answer lands on line 40, the transfer is aligned. If it lands on 39, a line was skipped and there is still time to find it. ' +
      'And say the unpopular thing: <b>a blank line is a certain zero.</b> Never leave one.',
  },

  /* ── mistakes ── */
  {
    id: 'mistakes',
    kicker: 'Exam craft',
    title: 'Eight mistakes that cost marks every year',
    body: `
      <div class="grid g2" style="align-content:start;gap:14px">
        <div class="grid" style="gap:14px">
          <div class="card r"><h3>1 · Not reading the options</h3><p>Listening to an unread question is the single biggest cause of wrong answers.</p></div>
          <div class="card r"><h3>2 · Choosing the option you recognise</h3><p>A familiar word is bait, not proof.</p></div>
          <div class="card r"><h3>3 · Missing the “but”</h3><p>Everything before the pivot is the decoy.</p></div>
          <div class="card r"><h3>4 · Answering from the interviewer</h3><p>Right idea, wrong speaker. Ask <em>who said it</em> first.</p></div>
        </div>
        <div class="grid" style="gap:14px">
          <div class="card r"><h3>5 · Re-reading everything on hearing 2</h3><p>You do not have time. Narrow to your two candidates.</p></div>
          <div class="card r"><h3>6 · Chasing a lost question</h3><p>Jump to the next number. One lost mark becomes three this way.</p></div>
          <div class="card r"><h3>7 · Writing words in the margin</h3><p>Numbers and symbols only. Every word is a second not listening.</p></div>
          <div class="card r"><h3>8 · Leaving a blank</h3><p>A guess sometimes scores. A blank never does.</p></div>
        </div>
      </div>`,
    notes:
      '<span class="t">3 min</span>Do not read all eight aloud — that is a wall of text and they will switch off. Ask instead: <b>"put your hand up if number 3 sounds like you… number 1?… number 8?"</b> You will find the same three or four attract almost everybody, and that is the point: the losses are clustered and predictable. ' +
      'Then set the ritual that fixes them: each student writes their own two worst mistakes on the front of every practice paper before starting, and ticks them off at the end. Trivial to do, and it works. ' +
      'If you only fix one, fix number 1. Reading the options in the silence is free and it is worth several marks.',
  },

  /* ── plan ── */
  {
    id: 'plan4',
    kicker: 'From today',
    title: 'A four-week plan',
    body: `
      <div class="grid g4 fill" style="align-content:start;gap:14px">
        <div class="card"><span class="pill">Week 1</span><h3 style="margin-top:10px">Find your pattern</h3>
          <ul class="list" style="font-size:18px;margin-top:8px"><li>One paper, then review with the transcript</li><li>Name the trap for <b>every</b> wrong answer</li><li>Start your paraphrase page</li></ul>
          <p style="margin-top:8px;font-size:17px;color:var(--orange-dk)"><b>Output:</b> your two weakest traps.</p></div>
        <div class="card"><span class="pill">Week 2</span><h3 style="margin-top:10px">Fix Exercise 1 and 3</h3>
          <ul class="list" style="font-size:18px;margin-top:8px"><li>Questions 1–8 and 19–26 of two more papers</li><li>Label every wrong picture: rejected / past / never said</li><li>5 min of transcript listening, 3× this week</li></ul>
          <p style="margin-top:8px;font-size:17px;color:var(--orange-dk)"><b>Output:</b> Exercise 1 at 7 or 8 out of 8.</p></div>
        <div class="card"><span class="pill">Week 3</span><h3 style="margin-top:10px">Attack 2, 4 and 5</h3>
          <ul class="list" style="font-size:18px;margin-top:8px"><li>One full paper under exam conditions</li><li>Re-do only Exercises 2, 4, 5 with the transcript</li><li>Quote the phrase that earns each mark</li></ul>
          <p style="margin-top:8px;font-size:17px;color:var(--orange-dk)"><b>Output:</b> every answer traced to a phrase.</p></div>
        <div class="card"><span class="pill">Week 4</span><h3 style="margin-top:10px">Rehearse it</h3>
          <ul class="list g" style="font-size:18px;margin-top:8px"><li>Two papers, timed, with the real answer sheet</li><li>Practise the 6-minute transfer with a pen</li><li>No new words this week — technique only</li></ul>
          <p style="margin-top:8px;font-size:17px;color:var(--green)"><b>Output:</b> a routine you do not have to think about.</p></div>
      </div>`,
    notes:
      '<span class="t">3 min</span>Present it as four focuses rather than four calendar weeks — adapt to your timetable. The discipline that makes it work is the one rule from the transcript section: <b>never do a paper without reviewing it.</b> ' +
      'Week 2 targets the cheap marks: Exercises 1 and 3 test L1 to L3 only and are 16 marks between them. The measurable milestone is Exercise 1 at 7–8 out of 8. ' +
      'Week 3 targets the 24 mark block — Exercises 2, 4 and 5 — and its discipline is the licensing quote: <b>no quote, no mark.</b> ' +
      'Week 4 is rehearsal only, including the mechanical transfer on a real answer sheet. Tell them explicitly: <b>no new vocabulary in the last week.</b> It is for stabilising a routine, not adding material.',
  },

  /* ── self check ── */
  {
    id: 'selfcheck',
    kicker: 'Be honest with yourself',
    title: 'Six things to be able to say yes to',
    sub: 'Tick only the ones that are true under exam conditions — not the ones that are true when you are relaxed.',
    body: `
      <div class="grid g2" style="align-content:start;gap:12px">
        <div class="card"><p style="font-size:21px"><b>1.</b> I read all the options during the silence, every time.</p></div>
        <div class="card"><p style="font-size:21px"><b>2.</b> I write a dash on hearing 1 and circle on hearing 2 — never the same job twice.</p></div>
        <div class="card"><p style="font-size:21px"><b>3.</b> I can name what caught me: rejected, past plan, wrong speaker, polarity flip.</p></div>
        <div class="card"><p style="font-size:21px"><b>4.</b> In Exercise 4 I build the A–H ledger before speaker 1.</p></div>
        <div class="card"><p style="font-size:21px"><b>5.</b> In Exercise 5 I ask <em>who said it?</em> before <em>is it true?</em></p></div>
        <div class="card"><p style="font-size:21px"><b>6.</b> I never leave a blank, and I have never been off by one on the answer sheet.</p></div>
      </div>
      <div class="ans hint" style="margin-top:16px"><span class="tag">Scoring</span><div><b>5–6 yes:</b> your technique is ready — keep the practice loop going. &nbsp;<b>3–4 yes:</b> pick your two weakest and make them your focus for three weeks. &nbsp;<b>0–2 yes:</b> do not do more papers — fix the routine first.</div></div>`,
    notes:
      '<span class="t">3 min</span>Have them tick honestly in pencil and count. The point of the scoring bands is to normalise the middle: most strong candidates land at 3 or 4, and that is a target list, not a failure. ' +
      'Each statement maps to a slide in this deck, so a student can self-serve the remedy: statement 1 → the T.A.C.O. slide; 2 → two hearings; 3 → the trap slides; 4 → the Exercise 4 ledger; 5 → the Exercise 5 attribution habit; 6 → the transfer slide. Tell them this — it turns the checklist into a revision map. ' +
      'The 0–2 band matters most and is the one to say out loud: if that is you, <b>more papers will not help.</b> The routine has to change first.',
  },

  /* ── takeaways ── */
  {
    id: 'takeaways',
    kicker: 'Take these with you',
    title: 'Six things to remember',
    body: `
      <div class="grid g3 fill" style="align-content:start;gap:14px">
        <div class="card"><h3>Read before you listen</h3><p>The paper gives you 15, 30, 40 and 45 seconds. Use all of it.</p></div>
        <div class="card"><h3>Two hearings, two jobs</h3><p>Hearing 1 maps it. Hearing 2 decides it.</p></div>
        <div class="card"><h3>Distrust the words you recognise</h3><p>The answer usually re-words. The trap usually repeats.</p></div>
        <div class="card"><h3>Hunt the pivot</h3><p>but · however · actually · not · instead · hardly. The answer comes after.</p></div>
        <div class="card"><h3>Ask who said it</h3><p>Especially in Exercise 5. The interviewer is a trap factory.</p></div>
        <div class="card"><h3>Review with the transcript</h3><p>One diagnosed paper beats three papers you never checked.</p></div>
      </div>
      <div class="ans hint" style="margin-top:18px"><span class="tag">Remember</span><div>Paper 2 is not mainly a test of how much English you know. It is a test of <b>how well you handle a recording you only hear twice</b>. That is a skill — and skills improve with practice.</div></div>`,
    notes:
      '<span class="t">3 min</span>Do not re-teach this — use it as a <b>retrieval quiz</b> instead. Cover the slide, read out the six headings one at a time, and ask the class to recall the detail before you reveal it. Retrieval practice beats re-reading, and it takes the same three minutes. ' +
      'The closing framing is the message of the whole workshop and it is genuinely liberating for a strong class: <b>you already have the English.</b> What separates a 26 from a 34 at this level is not more vocabulary — it is the routine. ' +
      'If you want a single sentence for them to leave with: <em>read before you listen, decide on the second hearing, distrust the words you recognise, and never leave a blank.</em>',
  },

  /* ── close ── */
  {
    id: 'thanks',
    kind: 'close',
    logo: true,
    title: 'Good luck.',
    tagline: 'You already have the English. Now you have the method.',
    meta: 'Paper 2 — Listening · 40 questions · 40 marks · you hear everything twice<br><b>Falih Junior International Academy</b>',
    body: `
      <div class="grid g3" style="margin-top:26px;text-align:left">
        <div class="card"><h3>This week</h3><p>Label every wrong answer in one paper with the trap that caught you.</p></div>
        <div class="card"><h3>Every week</h3><p>One paper, always reviewed with the transcript.</p></div>
        <div class="card"><h3>Until the exam</h3><p>Five minutes of transcript listening, three times a week.</p></div>
      </div>
      <p style="margin-top:24px;font-size:17px;color:var(--navy-soft);line-height:1.6;max-width:900px;margin-left:auto;margin-right:auto">
        All questions, pictures and scripts in this workshop are taken from Cambridge IGCSE English as a Second Language 0511/21, Paper 2 Listening, October/November 2025
        (question paper, mark scheme and transcript). Mark scheme answers: Q1 A · Q9 A · Q10 C · Q13 C · Q14 B · Q19 A · Q20 A · Q21 C · Q27 E · Q28 C · Q33 C · Q34 B.
      </p>`,
    notes:
      '<span class="t">2 min</span>Close on momentum, not on a summary. Three commitments only — this week, every week, until the exam — because three specific actions get done and a longer list does not. ' +
      'Provenance, for you as the teacher: every question, picture, option and script in this deck comes from the real <b>0511/21 October/November 2025</b> paper (question paper, mark scheme and transcript). The mark scheme answers used are listed on the slide. ' +
      'Finish with the line they should leave with: <em>you already have the English — now you have the method too.</em> Then hand out the transcript and the question paper so they can start the Week 1 task tonight.',
  },
];
