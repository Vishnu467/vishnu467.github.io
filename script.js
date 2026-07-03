/* ==========================================================================
   script.js — Sai Vishnu portfolio
   Language switching (EN/DE), theme toggle, typing effect, scroll reveals,
   skill bars, counters, active-nav highlighting, mobile menu.
   No dependencies — plain vanilla JS.
   ========================================================================== */

(function () {
  'use strict';

  var doc = document;
  var LANG_KEY = 'portfolio-lang';
  var THEME_KEY = 'portfolio-theme';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------------------------------------------
     Language (i18n)
     ------------------------------------------------------------------ */
  var lang = (function () {
    try {
      var stored = localStorage.getItem(LANG_KEY);
      if (stored === 'en' || stored === 'de') return stored;
    } catch (e) { /* storage unavailable */ }
    return (navigator.language || 'en').toLowerCase().indexOf('de') === 0 ? 'de' : 'en';
  })();

  function t(key) {
    var table = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return Object.prototype.hasOwnProperty.call(table, key) ? table[key] : TRANSLATIONS.en[key];
  }

  var langToggle = doc.getElementById('langToggle');

  function applyTranslations() {
    doc.documentElement.setAttribute('lang', lang);
    doc.title = t('meta.title');

    var metaDesc = doc.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

    var nodes = doc.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var value = t(nodes[i].getAttribute('data-i18n'));
      if (typeof value === 'string') nodes[i].textContent = value;
    }

    var ariaNodes = doc.querySelectorAll('[data-i18n-aria]');
    for (var j = 0; j < ariaNodes.length; j++) {
      var ariaValue = t(ariaNodes[j].getAttribute('data-i18n-aria'));
      if (typeof ariaValue === 'string') ariaNodes[j].setAttribute('aria-label', ariaValue);
    }

    langToggle.classList.toggle('is-de', lang === 'de');
    langToggle.setAttribute('aria-checked', lang === 'de' ? 'true' : 'false');

    restartTyping();
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }

    if (reduceMotion.matches) {
      applyTranslations();
      return;
    }
    // Fade translated nodes out, swap strings, fade back in.
    doc.body.classList.add('lang-fade');
    window.setTimeout(function () {
      applyTranslations();
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          doc.body.classList.remove('lang-fade');
        });
      });
    }, 190);
  }

  langToggle.addEventListener('click', function () {
    setLang(lang === 'en' ? 'de' : 'en');
  });

  /* ------------------------------------------------------------------
     Theme
     ------------------------------------------------------------------ */
  var themeToggle = doc.getElementById('themeToggle');

  themeToggle.addEventListener('click', function () {
    var next = doc.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    doc.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
  });

  // Follow OS preference live unless the visitor made an explicit choice.
  // Guarded: old Safari's MediaQueryList has no addEventListener.
  try {
    var schemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    var onSchemeChange = function (ev) {
      var stored = null;
      try { stored = localStorage.getItem(THEME_KEY); } catch (e) { /* ignore */ }
      if (!stored) doc.documentElement.setAttribute('data-theme', ev.matches ? 'dark' : 'light');
    };
    if (schemeQuery.addEventListener) schemeQuery.addEventListener('change', onSchemeChange);
    else if (schemeQuery.addListener) schemeQuery.addListener(onSchemeChange);
  } catch (e) { /* non-fatal */ }

  /* ------------------------------------------------------------------
     Typing effect (rotating role keywords)
     ------------------------------------------------------------------ */
  var typedEl = doc.getElementById('typedText');
  var typingTimer = null;
  var wordIndex = 0;

  function scheduleTyping(fn, delay) {
    typingTimer = window.setTimeout(fn, delay);
  }

  function restartTyping() {
    if (!typedEl) return;
    if (typingTimer) window.clearTimeout(typingTimer);
    var words = t('hero.typingWords');
    if (!words || !words.length) return;
    wordIndex = 0;

    if (reduceMotion.matches) {
      // No per-letter typing: gently swap the full word instead.
      typedEl.textContent = words[0];
      scheduleTyping(function swap() {
        wordIndex = (wordIndex + 1) % words.length;
        typedEl.textContent = words[wordIndex];
        scheduleTyping(swap, 3000);
      }, 3000);
      return;
    }

    var charIndex = 0;
    var deleting = false;

    (function tick() {
      var word = words[wordIndex];
      if (!deleting) {
        charIndex++;
        typedEl.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          scheduleTyping(tick, 1900); // hold the finished word
        } else {
          scheduleTyping(tick, 65 + Math.random() * 45);
        }
      } else {
        charIndex--;
        typedEl.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          scheduleTyping(tick, 350);
        } else {
          scheduleTyping(tick, 34);
        }
      }
    })();
  }

  /* ------------------------------------------------------------------
     Scroll reveals, skill bars, counters
     ------------------------------------------------------------------ */
  function fillBar(fill) {
    fill.style.width = fill.getAttribute('data-level') + '%';
  }

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var duration = parseInt(el.getAttribute('data-duration'), 10) || 1300;
    if (reduceMotion.matches) {
      el.textContent = String(target);
      return;
    }
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = String(Math.round(eased * target));
      if (progress < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  // Stagger children inside data-reveal-group containers.
  var groups = doc.querySelectorAll('[data-reveal-group]');
  for (var g = 0; g < groups.length; g++) {
    var children = groups[g].querySelectorAll('[data-reveal]');
    for (var c = 0; c < children.length; c++) {
      children[c].style.setProperty('--reveal-delay', (c * 80) + 'ms');
    }
  }

  // Only now that reveal wiring is about to happen may content be hidden:
  // CSS scopes the hidden initial state to `.js [data-reveal]`, so if this
  // script never runs (or died earlier), every section stays visible.
  doc.documentElement.classList.add('js');

  var revealEls = doc.querySelectorAll('[data-reveal]');

  function activateReveal(el) {
    el.classList.add('in-view');
    var fills = el.querySelectorAll('.skill-fill');
    for (var f = 0; f < fills.length; f++) fillBar(fills[f]);
    var counts = el.querySelectorAll('[data-count]');
    for (var k = 0; k < counts.length; k++) animateCount(counts[k]);
  }

  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    var revealObserver = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          activateReveal(entries[i].target);
          revealObserver.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });

    for (var r = 0; r < revealEls.length; r++) revealObserver.observe(revealEls[r]);
  } else {
    for (var r2 = 0; r2 < revealEls.length; r2++) activateReveal(revealEls[r2]);
  }

  /* ------------------------------------------------------------------
     Navbar: scrolled state, progress bar, active section
     ------------------------------------------------------------------ */
  var navbar = doc.getElementById('navbar');
  var progressBar = doc.querySelector('.scroll-progress');
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      navbar.classList.toggle('scrolled', window.scrollY > 12);
      var docEl = doc.documentElement;
      var max = docEl.scrollHeight - window.innerHeight;
      progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Highlight the nav link of the section currently in view.
  var navLinks = doc.querySelectorAll('.nav-link');

  function setActiveLink(id) {
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.toggle('active', navLinks[i].getAttribute('href') === '#' + id);
    }
  }

  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) setActiveLink(entries[i].target.id);
      }
    }, { rootMargin: '-40% 0px -55% 0px' });

    // Sections without their own nav link highlight their parent group:
    // publication + certifications keep "Skills" un-highlighted rather than wrong.
    var observed = ['about', 'experience', 'projects', 'skills', 'contact'];
    for (var s = 0; s < observed.length; s++) {
      var sec = doc.getElementById(observed[s]);
      if (sec) sectionObserver.observe(sec);
    }
  }

  /* ------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------ */
  var menuToggle = doc.getElementById('menuToggle');
  var navLinksList = doc.getElementById('navLinks');

  function closeMenu() {
    navLinksList.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', function () {
    var open = navLinksList.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  for (var l = 0; l < navLinks.length; l++) {
    navLinks[l].addEventListener('click', closeMenu);
  }

  doc.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') closeMenu();
  });

  doc.addEventListener('click', function (ev) {
    if (!navLinksList.classList.contains('open')) return;
    if (!navbar.contains(ev.target)) closeMenu();
  });

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  applyTranslations();
})();
