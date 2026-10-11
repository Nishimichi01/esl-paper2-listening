/* ═══════════════════════════════════════════════════════════════
   ESL ANSWERING TECHNIQUES WORKSHOP — deck chrome
   Navigation · progress · speaker notes · overview grid ·
   answer reveals (R) · fullscreen · print
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var total = slides.length;
  if (!total) return;

  var stage    = document.getElementById('deck-stage');
  var elCount  = document.getElementById('chrome-count');
  var elFill   = document.getElementById('progress-fill');
  var btnPrev  = document.getElementById('btn-prev');
  var btnNext  = document.getElementById('btn-next');
  var btnNotes = document.getElementById('btn-notes');
  var btnOv    = document.getElementById('btn-overview');
  var btnFs    = document.getElementById('btn-fs');
  var btnPrint = document.getElementById('btn-print');
  var notes    = document.getElementById('deck-notes');
  var notesBody= document.getElementById('notes-body');
  var ov       = document.getElementById('deck-overview');
  var ovGrid   = document.getElementById('ov-grid');

  var cur = 0, notesOn = false, ovOn = false;

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function slugOf(s, i) { return s.id || ('slide-' + (i + 1)); }

  function updateChrome() {
    elCount.innerHTML = '<b>' + (cur + 1) + '</b> / ' + total;
    elFill.style.width = ((cur + 1) / total * 100).toFixed(2) + '%';
    var s = slides[cur];
    var n = s.querySelector('.slide__notes');
    notesBody.innerHTML = n ? n.innerHTML : '<em>No notes for this slide.</em>';
    if (history.replaceState) history.replaceState(null, '', '#' + slugOf(s, cur));
  }

  function show(i, scrollTop) {
    i = Math.max(0, Math.min(total - 1, i));
    if (i === cur) { updateChrome(); return; }
    slides[cur].classList.remove('is-active');
    cur = i;
    for (var k = 0; k < total; k++) {
      slides[k].classList.toggle('is-active', k === cur);
      slides[k].classList.toggle('is-prev', k < cur);
    }
    if (scrollTop !== false) slides[cur].scrollTop = 0;
    updateChrome();
    if (ovOn) markCurrentOverview();
  }

  function next() { show(cur + 1); }
  function prev() { show(cur - 1); }

  /* ── auto-fit: never let a slide overflow its stage ────── */
  function fitSlide(s) {
    var inner = s.querySelector('.slide-inner');
    if (!inner) return;
    inner.style.transform = '';
    s.style.overflowY = '';
    var cs = getComputedStyle(s);
    var avail = s.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    var natural = inner.offsetHeight;
    if (!avail || !natural) return;
    if (natural > avail + 1) {
      var scale = Math.max(0.66, avail / natural);
      inner.style.transformOrigin = 'center center';
      inner.style.transform = 'scale(' + scale.toFixed(4) + ')';
      s.style.overflowY = 'hidden';
    }
  }
  function fitAll() { slides.forEach(fitSlide); }

  /* ── reveals ───────────────────────────────────────────── */
  function toggleReveal(force) {
    var s = slides[cur];
    var on = (typeof force === 'boolean') ? force : !s.classList.contains('revealed');
    s.classList.toggle('revealed', on);
  }

  /* ── notes ─────────────────────────────────────────────── */
  function toggleNotes(force) {
    notesOn = (typeof force === 'boolean') ? force : !notesOn;
    notes.classList.toggle('open', notesOn);
    btnNotes.setAttribute('aria-pressed', String(notesOn));
  }

  /* ── fullscreen ────────────────────────────────────────── */
  function toggleFs() {
    if (document.fullscreenElement) { document.exitFullscreen(); }
    else if (document.documentElement.requestFullscreen) { document.documentElement.requestFullscreen().catch(function(){}); }
  }

  /* ── overview ──────────────────────────────────────────── */
  function buildOverview() {
    ovGrid.innerHTML = '';
    var w = stage.clientWidth || window.innerWidth;
    var h = stage.clientHeight || (window.innerHeight - 54);
    var scale = 232 / w;
    slides.forEach(function (s, i) {
      var item = document.createElement('div');
      item.className = 'ov-item' + (i === cur ? ' current' : '');
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      item.dataset.idx = i;

      var thumb = document.createElement('div');
      thumb.className = 'ov-thumb';
      thumb.style.width = '232px';
      thumb.style.height = Math.round(h * scale) + 'px';

      var clone = s.cloneNode(true);
      clone.className = 'slide is-active revealed';
      clone.removeAttribute('id');
      clone.style.cssText = 'position:absolute;top:0;left:0;width:' + w + 'px;height:' + h + 'px;' +
        'transform:scale(' + scale + ');transform-origin:top left;pointer-events:none;opacity:1;visibility:visible;';

      var num = document.createElement('span');
      num.className = 'ov-num';
      num.textContent = i + 1;

      thumb.appendChild(clone);
      item.appendChild(thumb);
      item.appendChild(num);

      function go() { closeOverview(); show(i); }
      item.addEventListener('click', go);
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
      });
      ovGrid.appendChild(item);
    });
  }
  function markCurrentOverview() {
    Array.prototype.forEach.call(ovGrid.children, function (el, i) {
      el.classList.toggle('current', i === cur);
    });
  }
  function openOverview() { buildOverview(); ov.hidden = false; ovOn = true; btnOv.setAttribute('aria-pressed', 'true'); }
  function closeOverview() { ov.hidden = true; ovOn = false; btnOv.setAttribute('aria-pressed', 'false'); }
  function toggleOverview() { ovOn ? closeOverview() : openOverview(); }

  /* ── wiring ────────────────────────────────────────────── */
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);
  btnNotes.addEventListener('click', function () { toggleNotes(); });
  btnOv.addEventListener('click', toggleOverview);
  btnFs.addEventListener('click', toggleFs);
  if (btnPrint) btnPrint.addEventListener('click', function () { window.print(); });
  document.getElementById('ov-close').addEventListener('click', closeOverview);

  /* click anywhere on a slide advances the reveal first, then the slide */
  stage.addEventListener('click', function (e) {
    if (e.target.closest('a, button')) return;
    var s = slides[cur];
    if (s.querySelector('.rv') && !s.classList.contains('revealed')) { toggleReveal(true); return; }
    if (e.clientX > window.innerWidth * 0.62) next();
    else if (e.clientX < window.innerWidth * 0.38) prev();
  });

  /* ── keyboard ──────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;

    if (ovOn) {
      if (e.key === 'Escape' || e.key === 'g' || e.key === 'G') { e.preventDefault(); closeOverview(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); closeOverview(); next(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); closeOverview(); prev(); }
      return;
    }

    switch (e.key) {
      case 'ArrowRight': case 'PageDown': case ' ': case 'Enter':
        e.preventDefault();
        if (slides[cur].classList.contains('revealed') === false && slides[cur].querySelector('.rv') && (e.key === ' ')) { toggleReveal(true); }
        else next();
        break;
      case 'ArrowLeft': case 'PageUp':
        e.preventDefault(); prev(); break;
      case 'Home': e.preventDefault(); show(0); break;
      case 'End':  e.preventDefault(); show(total - 1); break;
      case 'r': case 'R': e.preventDefault(); toggleReveal(); break;
      case 'n': case 'N': toggleNotes(); break;
      case 'g': case 'G': toggleOverview(); break;
      case 'f': case 'F': toggleFs(); break;
      case 'p': case 'P': e.preventDefault(); window.print(); break;
      case 'Escape':
        if (notesOn) toggleNotes(false);
        else if (document.fullscreenElement) toggleFs();
        break;
    }
  });

  /* ── touch swipe ───────────────────────────────────────── */
  var tX = 0, tY = 0;
  stage.addEventListener('touchstart', function (e) { tX = e.changedTouches[0].clientX; tY = e.changedTouches[0].clientY; }, { passive: true });
  stage.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - tX, dy = e.changedTouches[0].clientY - tY;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev(); }
  }, { passive: true });

  var fitTimer = null;
  function scheduleFit() {
    clearTimeout(fitTimer);
    fitTimer = setTimeout(function () { fitAll(); if (ovOn) buildOverview(); }, 120);
  }
  window.addEventListener('resize', scheduleFit);
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(scheduleFit); }
  window.addEventListener('load', scheduleFit);

  window.addEventListener('hashchange', function () {
    var h = (location.hash || '').replace('#', '');
    if (!h) return;
    for (var i = 0; i < total; i++) {
      if (slugOf(slides[i], i) === h && i !== cur) { show(i); break; }
    }
  });

  /* ── init ──────────────────────────────────────────────── */
  (function init() {
    var h = (location.hash || '').replace('#', '');
    var idx = 0;
    if (h) { for (var i = 0; i < total; i++) { if (slugOf(slides[i], i) === h) { idx = i; break; } } }
    cur = 0;
    for (var k = 0; k < total; k++) {
      slides[k].classList.toggle('is-active', k === idx);
      slides[k].classList.toggle('is-prev', k < idx);
    }
    cur = idx;
    updateChrome();
    fitAll();
    requestAnimationFrame(fitAll);
  })();

  window.__deck = { show: show, next: next, prev: prev, total: total, reveal: toggleReveal, fit: fitAll };
})();
