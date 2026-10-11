#!/usr/bin/env node
/**
 * build.mjs — assembles the deck into one self-contained index.html
 *
 *  · Baloo 2 (headings) + Nunito (body) embedded as base64 woff2
 *  · every exam-paper crop embedded as base64 JPEG
 *  · CSS + JS inlined   →  works completely offline, zero HTTP requests
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { slides } from './content/slides.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const p = (...a) => resolve(ROOT, ...a);
const attr = (s = '') => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/* ── images ─────────────────────────────────────────────────── */
const imgCache = new Map();
function dataUri(name) {
  if (!imgCache.has(name)) {
    const buf = readFileSync(p('assets/img/qp', name + '.jpg'));
    imgCache.set(name, 'data:image/jpeg;base64,' + buf.toString('base64'));
  }
  return imgCache.get(name);
}
const withImages = (html = '') =>
  html.replace(/__IMG:([a-z0-9_]+)__/g, (m, n) => dataUri(n));

/* ── audio ────────────────────────────────────────────────────
   Clips ship as separate files in ./audio so the deck keeps proper speech
   quality (base64-inlining ~5 MB of MP3 mainly bloats index.html, and the
   folder still travels as one portable bundle). Set INLINE_AUDIO=1 for a
   genuine single-file build. */
const INLINE_AUDIO = process.env.INLINE_AUDIO === '1';
const audCache = new Map();
function audSrc(name) {
  if (!INLINE_AUDIO) return 'audio/' + name + '.mp3';
  if (!audCache.has(name)) {
    const buf = readFileSync(p('assets/audio', name + '.mp3'));
    audCache.set(name, 'data:audio/mpeg;base64,' + buf.toString('base64'));
  }
  return audCache.get(name);
}
const ICON_PLAY = '<svg class="ic-play" viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg>';
const ICON_PAUSE = '<svg class="ic-pause" viewBox="0 0 24 24"><rect x="7" y="5.5" width="3.6" height="13" rx="1"/><rect x="13.4" y="5.5" width="3.6" height="13" rx="1"/></svg>';

/** __PLAY:clip|Caption line 1|Caption line 2__  → a full player */
function player(clip, line1, line2, small) {
  return `<div class="player${small ? ' sm' : ''}">
          <button class="pp" aria-label="Play: ${attr(line1)}">${ICON_PLAY}${ICON_PAUSE}</button>
          <div class="pt"><div class="l1">${line1}</div>${line2 ? `<div class="l2">${line2}</div>` : ''}</div>
          <span class="dur">--:--</span>
          <div class="track"><i></i></div>
          <audio src="${audSrc(clip)}" preload="metadata"></audio>
        </div>`;
}
function expand(html = '') {
  return withImages(html)
    .replace(/__PLAYSM:([a-z0-9_]+)\|([^|]*)\|?([^_|]*)__/g, (m, c, l1, l2) => player(c, l1, l2, true))
    .replace(/__PLAY:([a-z0-9_]+)\|([^|]*)\|?([^_|]*)__/g, (m, c, l1, l2) => player(c, l1, l2, false));
}

/* ── slide renderers ────────────────────────────────────────── */
const logo = 'data:image/png;base64,' + readFileSync(p('assets/img/logo.png')).toString('base64');
const notes = (s) => (s.notes ? `<div class="slide__notes">${s.notes}</div>` : '');

function renderHero(s, i) {
  return `
      <section class="slide hero" id="${s.id}" aria-label="Slide ${i + 1}: ${attr(s.title)}">
        ${s.logo ? `<img class="hero-logo" src="${logo}" alt="Falih Junior International Academy">` : ''}
        <h1>${s.title}</h1>
        ${s.tagline ? `<p class="tagline">${s.tagline}</p>` : ''}
        <div class="rule"></div>
        ${s.meta ? `<p class="meta">${s.meta}</p>` : ''}
        ${s.body ? `<div style="margin-top:22px">${expand(s.body)}</div>` : ''}
        ${notes(s)}
      </section>`;
}

function renderSect(s, i) {
  return `
      <section class="slide sect" id="${s.id}" aria-label="Slide ${i + 1}: ${attr(s.title)}">
        <div class="no">${s.num}</div>
        ${s.kicker ? `<div class="s-kick">${s.kicker}</div>` : ''}
        <h2>${s.title}</h2>
        ${s.sub ? `<p>${s.sub}</p>` : ''}
        ${s.body ? `<div style="margin-top:24px">${expand(s.body)}</div>` : ''}
        ${notes(s)}
      </section>`;
}

function render(s, i) {
  if (s.kind === 'hero') return renderHero(s, i);
  if (s.kind === 'sect') return renderSect(s, i);

  const cls = ['slide'];
  if (s.kind === 'close') cls.push('close');
  const rv = s.reveal ? ' data-reveal=""' : '';
  const inner = s.wide ? ' style="max-width:100% ; display:flex; flex-direction:column; flex:1; min-height:0"' : ' class="body"';
  const foot = s.kind === 'close' ? '' :
    `<footer class="s-foot"><span>Falih Junior International Academy &nbsp;&middot;&nbsp; IGCSE English as a Second Language 0511 &nbsp;&middot;&nbsp; Paper 2 Listening</span><span class="pg">${i + 1}</span></footer>`;

  return `
      <section class="${cls.join(' ')}" id="${s.id}"${rv} aria-label="Slide ${i + 1}: ${attr(s.title)}">
        ${s.reveal ? '<span class="reveal-hint">Press R to reveal</span>' : ''}
        ${s.kicker ? `<div class="s-kick">${s.kicker}</div>` : ''}
        ${s.title ? `<h2 class="s-title">${s.title}</h2>` : ''}
        ${s.sub ? `<p class="s-sub">${s.sub}</p>` : ''}
        ${s.title || s.sub ? '<div style="height:18px"></div>' : ''}
        <div${inner}>${expand(s.body) || ''}</div>
        ${foot}
        ${notes(s)}
      </section>`;
}

/* ── assemble ───────────────────────────────────────────────── */
const body = slides.map(render).join('\n');

let css = readFileSync(p('src/deck.css'), 'utf8');
css = css.replace('__FONT_HEAD__', readFileSync(p('assets/fonts/Baloo2-latin.woff2')).toString('base64'));
css = css.replace('__FONT_BODY__', readFileSync(p('assets/fonts/Nunito-latin.woff2')).toString('base64'));

const js = readFileSync(p('src/deck.js'), 'utf8');

const I = {
  prev: '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>',
  next: '<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>',
  notes: '<svg viewBox="0 0 24 24"><path d="M4 5h16M4 10h16M4 15h10"/></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  fs: '<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
  print: '<svg viewBox="0 0 24 24"><path d="M6 9V3h12v6M6 18H4v-6h16v6h-2M8 14h8v7H8z"/></svg>',
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow, noarchive">
<title>Paper 2 Listening — Answering Techniques Workshop | Falih Junior International Academy</title>
<meta name="description" content="A concise step-by-step workshop on Cambridge IGCSE English as a Second Language 0511 Paper 2 (Listening), using the October/November 2025 paper. Falih Junior International Academy.">
<meta name="color-scheme" content="light">
<link rel="icon" href="${logo}">
<style>
${css}
</style>
</head>
<body>
<div class="stage"><div class="canvas" id="canvas">
<div class="deco" aria-hidden="true"><i class="ring1"></i><i class="dotgrid"></i></div>
${body}
</div></div>

<div class="chrome">
  <div class="mark"><img src="${logo}" alt=""><span>Paper 2 · Listening</span></div>
  <div class="ctr">
    <button class="btn" id="b-prev" aria-label="Previous" title="Previous (←)">${I.prev}</button>
    <span class="count" id="count" aria-live="polite"><b>1</b> / ${slides.length}</span>
    <button class="btn" id="b-next" aria-label="Next" title="Next (→ or space)">${I.next}</button>
    <button class="btn" id="b-notes" aria-pressed="false" aria-label="Speaker notes" title="Speaker notes (N)">${I.notes}</button>
    <button class="btn" id="b-ov" aria-pressed="false" aria-label="Overview" title="Overview (G)">${I.grid}</button>
    <button class="btn" id="b-print" aria-label="Print / PDF" title="Print / export PDF (P)">${I.print}</button>
    <button class="btn" id="b-fs" aria-label="Fullscreen" title="Fullscreen (F)">${I.fs}</button>
  </div>
  <div class="prog"><i id="prog"></i></div>
</div>

<aside class="notes" id="notes" aria-label="Speaker notes">
  <div class="hd"><span>Speaker notes</span><span style="text-transform:none;letter-spacing:0">N to close</span></div>
  <div class="bd" id="notes-bd"></div>
</aside>

<div class="ov" id="ov" hidden>
  <div class="hd">
    <span>Overview — ${slides.length} slides</span>
    <button class="btn" id="ov-x" aria-label="Close" style="background:rgba(255,255,255,.14)">${I.prev.replace('M15 18l-6-6 6-6', 'M6 6l12 12M18 6L6 18')}</button>
  </div>
  <div class="g" id="ov-g"></div>
</div>

<div class="lb" id="lb" hidden><img id="lb-img" alt="Exam paper detail"></div>

<script>
${js}
</script>
</body>
</html>
`;

mkdirSync(p('dist'), { recursive: true });
mkdirSync(p('dist/audio'), { recursive: true });
writeFileSync(p('dist/index.html'), html, 'utf8');
writeFileSync(p('index.html'), html, 'utf8');
const audioFiles = readdirSync(p('assets/audio'));
if (!INLINE_AUDIO) {
  for (const f of audioFiles) {
    copyFileSync(p('assets/audio', f), p('dist/audio', f));
    copyFileSync(p('assets/audio', f), p('audio', f));
  }
}
const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`✓ ${slides.length} slides · ${kb} KB html — ${imgCache.size} paper crops, ${audioFiles.length} audio clips${INLINE_AUDIO ? ' (inlined)' : ' (./audio/)'}, fonts embedded`);

const warn = [];
slides.forEach((s, i) => {
  if (!s.notes) warn.push(`  · slide ${i + 1} "${s.title}" has no notes`);
  if (!s.id) warn.push(`  · slide ${i + 1} "${s.title}" has no id`);
});
if (warn.length) console.log('warnings:\n' + warn.join('\n'));
