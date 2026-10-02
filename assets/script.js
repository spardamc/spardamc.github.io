/* Sparda team site — progressive enhancement only. Pages work without JS. */
(function () {
  'use strict';

  /* --- Mark the current page in the header navs ---
     Exact-URL matching (works from file:// too). Mod pills already carry
     their .current state server-side so they read correctly with JS off. */
  function samePage(href) {
    if (!href || href.charAt(0) === '#' || href.indexOf('://') !== -1) return false;
    try {
      return new URL(href, location.href).pathname === location.pathname;
    } catch (e) {
      return false;
    }
  }

  document.querySelectorAll('.site-header a.nav').forEach(function (a) {
    if (samePage(a.getAttribute('href'))) a.classList.add('active');
  });

  /* --- Mobile nav: the burger toggles the collapsible header panel.
     Without JS the panel is forced visible by the <noscript> fallback,
     so navigation never depends on this. --- */
  var header = document.getElementById('site-header');
  var burger = document.querySelector('.burger');

  function closeNav() {
    if (header) header.classList.remove('open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && header) {
    burger.addEventListener('click', function () {
      var open = header.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeNav();
        if (document.activeElement === burger) burger.blur();
      }
    });
  }

  /* --- Copy-to-clipboard on code blocks --- */
  document.querySelectorAll('.copy-wrap').forEach(function (wrap) {
    var pre = wrap.querySelector('pre');
    if (!pre || wrap.querySelector('.copy-btn')) return;

    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy code to clipboard');
    btn.addEventListener('click', function () {
      var text = pre.innerText;
      var done = function () {
        btn.textContent = 'Copied';
        btn.classList.add('done');
        setTimeout(function () {
          btn.textContent = 'Copy';
          btn.classList.remove('done');
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () {});
      } else {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); done(); } catch (e) {}
        document.body.removeChild(ta);
      }
    });
    wrap.appendChild(btn);
  });
})();
