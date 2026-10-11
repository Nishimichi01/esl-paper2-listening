import { a } from './a-orientation.mjs';
import { b } from './b-map.mjs';
import { c } from './c-ex1.mjs';
import { d } from './d-ex2.mjs';
import { e } from './e-ex3.mjs';
import { f } from './f-ex4.mjs';
import { g } from './g-ex5.mjs';
import { h } from './h-skills.mjs';
import { i } from './i-craft.mjs';

const D1 = {
  id: 'part-1',
  kind: 'section',
  num: '01',
  kicker: 'Part one',
  title: 'The paper itself',
  sub: 'What Paper 2 is, how it is marked, all five exercises side by side, and the one method you will use on every question.',
  body: `<div class="flow mt-18">
    <span class="flow-step"><span class="n">{{where-paper2-sits}}</span>Where Paper 2 sits</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{assessment-objectives}}</span>Objectives L1–L4</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{how-paper-built}}</span>Anatomy of the paper</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{exam-day-mechanics}}</span>Exam-day mechanics</span>
  </div>
  <div class="flow">
    <span class="flow-step"><span class="n">{{exercise-map}}</span>All five exercises mapped</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{taco-method}}</span>The T.A.C.O. method</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{two-hearings}}</span>Two hearings, two jobs</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{scan-protocol}}</span>The 20-second scan</span>
  </div>`,
  notes:
    '<span class="ntime">15 min for part 1</span>This part is orientation: eleven slides that end with the deck\'s core routine, T.A.C.O. Do not rush the assessment-objectives slide or the two-hearings slide — those two carry the most conceptual weight in the opening sequence. If you are short of time, the outcomes, agenda, anatomy and exam-day slides can be handed out as reading.',
};

const D2 = {
  id: 'part-2',
  kind: 'section',
  num: '02',
  kicker: 'Part two',
  title: 'Exercise by exercise',
  sub: 'Five exercises, twenty-five slides. Each one follows the same shape: what it is, the technique, the traps, then a worked example you break apart together.',
  body: `<div class="s-grid s-grid--3 mt-18">
    <div class="s-card tint-b"><h3><span class="s-card-n">1</span>Exercise 1 · 8 marks</h3><p>Eight short extracts, picture options. The cheapest marks on the paper — plan to bank 7 or 8.</p></div>
    <div class="s-card tint-v"><h3><span class="s-card-n">2</span>Exercise 2 · 10 marks</h3><p>Five extracts, two written questions each. The biggest block, and the first L4.</p></div>
    <div class="s-card tint-g"><h3><span class="s-card-n">3</span>Exercise 3 · 8 marks</h3><p>One monologue, eight sentence gaps. The only exercise where grammar does elimination work for you.</p></div>
    <div class="s-card tint-a"><h3><span class="s-card-n">4</span>Exercise 4 · 6 marks</h3><p>Six speakers against eight statements. A system problem, not an English problem.</p></div>
    <div class="s-card tint-r"><h3><span class="s-card-n">5</span>Exercise 5 · 8 marks</h3><p>One interview, eight questions, one speaker who counts. Attribution decides it.</p></div>
    <div class="s-card"><h3><span class="s-card-n">✓</span>Worked examples</h3><p>Every exercise ends with a real worked item. Cover the script, decide, then reveal and name the traps.</p></div>
  </div>`,
  notes:
    '<span class="ntime">45–60 min for part 2</span>This is the core of the workshop and could easily be three sessions: Exercises 1–2, then 3–4, then 5. Each exercise block has a reliable internal rhythm — anatomy, technique, traps, worked example — so students know what to expect. If you split the workshop, break it here rather than mid-exercise.',
};

const D3 = {
  id: 'part-3',
  kind: 'section',
  num: '03',
  kicker: 'Part three',
  title: 'The skills behind the questions',
  sub: 'Eight capabilities that cut across all five exercises. This is where a mid-band candidate becomes a high-band one.',
  body: `<div class="flow mt-18">
    <span class="flow-step"><span class="n">{{distractor-taxonomy}}</span>The nine traps</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{three-breakdowns}}</span>Three levels of breakdown</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{paraphrase-training}}</span>Paraphrase</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{numbers-traps}}</span>Numbers &amp; prices</span>
  </div>
  <div class="flow">
    <span class="flow-step"><span class="n">{{connected-speech}}</span>Connected speech</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{signposting}}</span>Signposting</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{tone-attitude}}</span>Tone &amp; attitude</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{inference-ladder}}</span>The inference ladder</span>
  </div>`,
  notes:
    '<span class="ntime">30–35 min for part 3</span>Do not cut the three-levels-of-breakdown slide — for a B2-high/C1 cohort it is the diagnostic that tells them <em>which</em> kind of practice they need, and it often reframes their whole attitude to revision. The connected-speech slide has the most concrete homework value: the micro-listening drill. If the group is already strong, the nine traps and the paraphrase slides are the two highest-value slides here.',
};

const D4 = {
  id: 'part-4',
  kind: 'section',
  num: '04',
  kicker: 'Part four',
  title: 'Exam craft and practice',
  sub: 'Timing, transfer, the twelve avoidable mistakes, a four-week plan and a drill menu. Everything that happens after the English is learned.',
  body: `<div class="flow mt-18">
    <span class="flow-step"><span class="n">{{timing-map}}</span>Where to spend attention</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{transfer-protocol}}</span>The 6-minute transfer</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{top-mistakes}}</span>Twelve avoidable mistakes</span>
  </div>
  <div class="flow">
    <span class="flow-step"><span class="n">{{four-week-plan}}</span>Four-week plan</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{drill-menu}}</span>Drill menu</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{metacognitive-review}}</span>Review cycle</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{self-assessment}}</span>Are you ready?</span><span class="flow-arrow">→</span>
    <span class="flow-step"><span class="n">{{exam-day}}</span>Exam-day checklist</span>
  </div>`,
  notes:
    '<span class="ntime">20–25 min for part 4</span>This part converts understanding into marks, so keep it concrete and time-bound. The transfer slide is worth rehearsing physically with a real answer sheet — it takes five minutes and removes a whole category of mechanical loss. The four-week plan and the drill menu are the take-home homework: set them as tasks rather than as reading.',
};

export const slides = [
  ...a,
  D1,
  ...b,
  D2,
  ...c,
  ...d,
  ...e,
  ...f,
  ...g,
  D3,
  ...h,
  D4,
  ...i,
];

/* Resolve {{slide-id}} tokens in section-divider roadmaps to the real
   1-based slide numbers, so the numbers can never drift out of sync. */
const indexOfId = new Map(slides.map((s, i) => [s.id, String(i + 1)]));
for (const s of slides) {
  if (typeof s.body !== 'string' || !s.body.includes('{{')) continue;
  s.body = s.body.replace(/\{\{([a-z0-9-]+)\}\}/gi, (m, id) => indexOfId.get(id) ?? m);
}
