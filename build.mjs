#!/usr/bin/env node
/**
 * build.mjs — assembles dist/index.html
 *
 * Single self-contained HTML file:
 *   - Google-font woff2 subsets embedded as base64 (works fully offline)
 *   - CSS and JS inlined
 *   - every slide rendered from content/slides.mjs
 *
 * Usage:  node build.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { slides } from './content/slides.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const p = (...a) => resolve(ROOT, ...a);

const esc = (s = '') => String(s);
const attr = (s = '') => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/* ── favicon (inline SVG data URI) ─────────────────────────── */
const FAVICON =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#5B5FC7"/><path d="M9 12h9a4 4 0 0 1 0 8H9zM9 12v12" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="23" cy="10" r="2.4" fill="#4A9EFF"/></svg>`
  );

/* ── slide renderers ───────────────────────────────────────── */
function renderHero(s, idx) {
  return `
      <section class="slide slide--title" id="${s.id}" aria-label="Slide ${idx + 1}: ${attr(s.title)}">
        <div class="slide-inner title-wrap">
          ${s.kicker ? `<div class="s-kicker${s.tone ? ' ' + s.tone : ''}"><span class="dot"></span>${s.kicker}</div>` : ''}
          <h1 class="hero-title">${s.title}</h1>
          ${s.lead ? `<p class="hero-lead">${s.lead}</p>` : ''}
          ${s.sub ? `<p class="hero-sub">${s.sub}</p>` : ''}
          ${s.chips ? `<ul class="chips">${s.chips.map((c) => `<li${c.on ? ' class="on"' : ''}>${c.t ?? c}</li>`).join('')}</ul>` : ''}
          ${s.body || ''}
        </div>
        ${s.hint ? `<p class="s-hint">${s.hint}</p>` : ''}
        ${notes(s)}
      </section>`;
}

function renderSection(s, idx) {
  return `
      <section class="slide slide--section" id="${s.id}" aria-label="Slide ${idx + 1}: ${attr(s.title)}">
        <div class="slide-inner">
          ${s.num ? `<div class="sec-num">${s.num}</div>` : ''}
          <div class="s-kicker${s.tone ? ' ' + s.tone : ''}"><span class="dot"></span>${s.kicker || 'Section'}</div>
          <h2 class="s-title" style="font-size:clamp(1.7rem,3.6vw,2.7rem)">${s.title}</h2>
          ${s.sub ? `<p class="s-sub" style="font-size:1rem;max-width:760px">${s.sub}</p>` : ''}
          ${s.body || ''}
        </div>
        ${notes(s)}
      </section>`;
}

function renderContent(s, idx) {
  const cls = ['slide'];
  if (s.kind === 'close') cls.push('slide--close');
  if (s.dense) cls.push('slide--dense');
  const rv = s.reveal ? ' data-reveal=""' : '';
  return `
      <section class="${cls.join(' ')}" id="${s.id}"${rv} aria-label="Slide ${idx + 1}: ${attr(s.title)}">
        <div class="slide-inner"${s.wide ? ' style="max-width:1000px"' : ''}>
          ${s.kicker ? `<div class="s-kicker${s.tone ? ' ' + s.tone : ''}"><span class="dot"></span>${s.kicker}</div>` : ''}
          ${s.exBadge || ''}
          ${s.title ? `<h2 class="s-title">${s.title}</h2>` : ''}
          ${s.sub ? `<p class="s-sub">${s.sub}</p>` : ''}
          ${s.reveal ? '<div style="height:12px"></div><span class="reveal-hint">Press R (or click) to reveal the answers</span>' : ''}
          ${s.title || s.sub ? '<div style="height:20px"></div>' : ''}
          ${s.body || ''}
        </div>
        ${notes(s)}
      </section>`;
}

function notes(s) {
  if (!s.notes) return '';
  return `<div class="slide__notes">${s.notes}</div>`;
}

function render(s, idx) {
  if (s.kind === 'hero') return renderHero(s, idx);
  if (s.kind === 'section') return renderSection(s, idx);
  return renderContent(s, idx);
}

/* ── assemble ──────────────────────────────────────────────── */
const body = slides.map(render).join('\n');

let css = readFileSync(p('src/deck.css'), 'utf8');
css = css.replace('__FONT_LATIN__', readFileSync(p('assets/fonts/pjs-latin.woff2')).toString('base64'));
css = css.replace('__FONT_LATIN_EXT__', readFileSync(p('assets/fonts/pjs-latin-ext.woff2')).toString('base64'));

const js = readFileSync(p('src/deck.js'), 'utf8');

const ICON = {
  prev: '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>',
  next: '<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>',
  notes: '<svg viewBox="0 0 24 24"><path d="M4 5h16M4 10h16M4 15h10"/></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/></svg>',
  fs: '<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
  print: '<svg viewBox="0 0 24 24"><path d="M6 9V3h12v6M6 18H4v-6h16v6h-2M8 14h8v7H8z"/></svg>',
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ESL Answering Techniques Workshop — Paper 2: Listening (0511)</title>
<meta name="description" content="A step-by-step answering-techniques workshop for Cambridge IGCSE English as a Second Language 0511, Component 2 / Paper 2 — Listening. Syllabus for exams in 2027, 2028 and 2029.">
<meta name="color-scheme" content="dark">
<link rel="icon" href="${FAVICON}">
<style>
${css}
</style>
</head>
<body>

<header class="deck-chrome" role="toolbar" aria-label="Presentation controls">
  <div class="chrome-brand">
    <span class="chrome-mark">0511</span>
    <span>Paper&nbsp;2 — Listening</span>
    <span class="chrome-sub">Answering Techniques Workshop</span>
  </div>

  <div class="chrome-nav">
    <button class="deck-btn" id="btn-prev" aria-label="Previous slide" title="Previous (←)">${ICON.prev}</button>
    <span class="chrome-count" id="chrome-count" aria-live="polite"><b>1</b> / ${slides.length}</span>
    <button class="deck-btn" id="btn-next" aria-label="Next slide" title="Next (→ or space)">${ICON.next}</button>
  </div>

  <div class="chrome-progress" aria-hidden="true"><div class="chrome-progress-fill" id="progress-fill"></div></div>

  <div class="chrome-tools">
    <button class="deck-btn" id="btn-notes" aria-pressed="false" aria-label="Speaker notes (N)" title="Speaker notes (N)">${ICON.notes}</button>
    <button class="deck-btn" id="btn-overview" aria-pressed="false" aria-label="Overview grid (G)" title="Overview grid (G)">${ICON.grid}</button>
    <button class="deck-btn" id="btn-print" aria-label="Print / export PDF (P)" title="Print / export PDF (P)">${ICON.print}</button>
    <button class="deck-btn" id="btn-fs" aria-label="Fullscreen (F)" title="Fullscreen (F)">${ICON.fs}</button>
  </div>
</header>

<main class="deck-viewport">
  <div class="deck-stage" id="deck-stage">
${body}
  </div>
</main>

<aside class="deck-notes" id="deck-notes" aria-label="Speaker notes">
  <div class="notes-head"><span>Speaker notes</span><span style="letter-spacing:0.04em;text-transform:none;font-weight:600;color:#5C6B82">Press N to close</span></div>
  <div class="notes-body" id="notes-body"></div>
</aside>

<div class="deck-overview" id="deck-overview" aria-label="Slide overview" hidden>
  <div class="ov-head">
    <span>Overview — ${slides.length} slides</span>
    <button class="deck-btn" id="ov-close" aria-label="Close overview (Esc)" title="Close (Esc)">${ICON.prev.replace('M15 18l-6-6 6-6', 'M6 6l12 12M18 6L6 18')}</button>
  </div>
  <div class="ov-grid" id="ov-grid"></div>
</div>

<script>
${js}
</script>
</body>
</html>
`;

mkdirSync(p('dist'), { recursive: true });
writeFileSync(p('dist/index.html'), html, 'utf8');
// root copy = the file GitHub Pages publishes (branch: main, folder: /)
writeFileSync(p('index.html'), html, 'utf8');
const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
console.log(`✓ dist/index.html + index.html  —  ${slides.length} slides, ${kb} KB (self-contained, offline-ready)`);

const warn = [];
slides.forEach((s, i) => {
  if (!s.notes) warn.push(`  · slide ${i + 1} "${s.title}" has no speaker notes`);
  if (!s.id) warn.push(`  · slide ${i + 1} "${s.title}" has no id`);
});
if (warn.length) console.log('warnings:\n' + warn.join('\n'));
