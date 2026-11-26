/* =====================================================================
   Lam James Akol — Portfolio
   Shared script for every page. No dependencies beyond Bootstrap's bundle.

   1. Theme toggle (dark / light, remembered per browser)
   2. Scroll progress bar
   3. Back-to-top button
   4. Scroll reveal
   5. Animated counters (home page stats)
   6. Typing effect (home page hero)
   7. Project filter (projects page)
   8. Copy email buttons
   9. Contact form validation
   10. Footer year
   ===================================================================== */

(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Storage can be blocked (private windows, strict settings): never let it break the page. */
  function store(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch (e) { return null; }
    return null;
  }


  /* 1. THEME TOGGLE ---------------------------------------------------- */
  /* The saved theme is applied by a one-line script in each page's <head>,
     before the page paints, so there is no flash of the wrong theme. */
  var toggle = document.getElementById('themeToggle');
  var announcer = document.getElementById('themeAnnouncement');

  function syncToggle() {
    if (!toggle) return;
    var isDark = root.getAttribute('data-bs-theme') !== 'light';
    var icon = toggle.querySelector('i');
    if (icon) icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    var label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('title', label);
  }

  if (toggle) {
    syncToggle();
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-bs-theme', next);
      store('theme', next);
      syncToggle();
      if (announcer) announcer.textContent = (next === 'dark' ? 'Dark' : 'Light') + ' mode on';
    });
  }


  /* 2. SCROLL PROGRESS + 3. BACK TO TOP -------------------------------- */
  var progress = document.getElementById('scrollProgress');
  var backToTop = document.getElementById('backToTop');
  var ticking = false;

  function onScroll() {
    var scrolled = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? Math.min(scrolled / max, 1) : 0;
    if (progress) {
      progress.style.transform = 'scaleX(' + ratio + ')';
      progress.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
    }
    if (backToTop) backToTop.classList.toggle('is-visible', scrolled > 600);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      var skip = document.querySelector('.skip-link');
      if (skip) skip.focus({ preventScroll: true });
    });
  }


  /* 4. SCROLL REVEAL ---------------------------------------------------- */
  var revealItems = document.querySelectorAll('.reveal');
  if (revealItems.length && 'IntersectionObserver' in window && !reduceMotion) {
    root.classList.add('js-reveal');
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach(function (el) { revealObserver.observe(el); });
  }


  /* 5. ANIMATED COUNTERS ------------------------------------------------ */
  /* Each .stat-number has its final value in the HTML, so it reads
     correctly with JavaScript off. The animation counts up to it. */
  var counters = document.querySelectorAll('[data-count]');

  function runCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var valueEl = el.querySelector('.value');
    if (!valueEl || isNaN(target)) return;
    var start = null;
    var duration = 1400;
    function step(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      valueEl.textContent = String(Math.round(target * eased));
      if (t < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  if (counters.length && 'IntersectionObserver' in window && !reduceMotion) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  }


  /* 6. TYPING EFFECT ----------------------------------------------------- */
  var typing = document.getElementById('typingText');
  if (typing && !reduceMotion) {
    var phrases;
    try { phrases = JSON.parse(typing.getAttribute('data-phrases') || '[]'); } catch (e) { phrases = []; }
    var textEl = typing.querySelector('.typing-value');
    if (phrases.length > 1 && textEl) {
      var p = 0, c = phrases[0].length, deleting = true;
      var tick = function () {
        var word = phrases[p];
        if (deleting) {
          c--;
          textEl.textContent = word.slice(0, c);
          if (c === 0) { deleting = false; p = (p + 1) % phrases.length; }
          window.setTimeout(tick, c === 0 ? 350 : 32);
        } else {
          word = phrases[p];
          c++;
          textEl.textContent = word.slice(0, c);
          if (c === word.length) { deleting = true; window.setTimeout(tick, 2400); }
          else window.setTimeout(tick, 58);
        }
      };
      window.setTimeout(tick, 2600);
    }
  }


  /* 7. PROJECT FILTER ---------------------------------------------------- */
  var filterButtons = document.querySelectorAll('.filter-btn');
  var projectCols = document.querySelectorAll('.project-col');
  var filterStatus = document.getElementById('filterStatus');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      var shown = 0;
      filterButtons.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      projectCols.forEach(function (col) {
        var cats = (col.getAttribute('data-category') || '').split(' ');
        var match = filter === 'all' || cats.indexOf(filter) !== -1;
        col.classList.toggle('is-hidden', !match);
        if (match) shown++;
      });
      if (filterStatus) filterStatus.textContent = 'Showing ' + shown + ' project' + (shown === 1 ? '' : 's');
    });
  });


  /* 8. COPY EMAIL BUTTONS ------------------------------------------------ */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var original = btn.textContent;
      function done(msg) {
        btn.textContent = msg;
        window.setTimeout(function () { btn.textContent = original; }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done('Copied'); }, function () { done('Copy failed'); });
      } else {
        done('Copy failed');
      }
    });
  });


  /* 9. CONTACT FORM ------------------------------------------------------ */
  /* GitHub Pages has no server, so the form validates in the browser and
     then opens the visitor's email app with the message filled in. */
  var form = document.getElementById('contactForm');
  if (form) {
    var feedback = document.getElementById('formFeedback');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
      if (!form.checkValidity()) {
        var firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var subject = form.elements.subject.value.trim();
      var message = form.elements.message.value.trim();
      var body = message + '\n\n— ' + name + ' (' + email + ')';
      var href = 'mailto:lamjamesakol@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);
      window.location.href = href;
      if (feedback) {
        feedback.hidden = false;
        feedback.focus();
      }
    });
  }


  /* 10. FOOTER YEAR ------------------------------------------------------ */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
