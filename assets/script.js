/* Sparda team site — progressive enhancement only. Pages work without JS. */
(function () {
  'use strict';

  /* --- Mark the current page in the sidebar --- */
  var here = location.pathname.split('/').pop() || 'index.html';
  // One docs section per mod; a link is "in section" when it points there.
  function sectionOf(path) {
    if (path.includes('/docs/')) return 'docs';
    if (path.includes('/florarium/')) return 'florarium';
    if (path.includes('/divinity/')) return 'divinity';
    return 'team';
  }
  var current = sectionOf(location.pathname);

  document.querySelectorAll('.sidebar a.nav').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    // Skip in-page anchors and external links.
    if (!href || href.charAt(0) === '#' || href.indexOf('://') !== -1) return;
    var linkPage = href.split('/').pop() || 'index.html';
    if (linkPage !== here) return;
    // A link with an explicit section prefix only matches inside that
    // section; a bare filename matches the page's own directory.
    var linkSection = current;
    if (href.indexOf('docs/') !== -1) linkSection = 'docs';
    else if (href.indexOf('florarium/') !== -1) linkSection = 'florarium';
    else if (href.indexOf('divinity/') !== -1) linkSection = 'divinity';
    if (linkSection === current) a.classList.add('active');
  });

  /* --- Mobile nav --- */
  var sidebar = document.querySelector('.sidebar');
  var burger = document.querySelector('.burger');
  var scrim = document.createElement('div');
  scrim.className = 'scrim';
  document.body.appendChild(scrim);

  function closeNav() {
    if (sidebar) sidebar.classList.remove('open');
    scrim.classList.remove('on');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && sidebar) {
    burger.addEventListener('click', function () {
      var open = sidebar.classList.toggle('open');
      scrim.classList.toggle('on', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    scrim.addEventListener('click', closeNav);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* --- Copy-to-clipboard on code blocks --- */
  document.querySelectorAll('.copy-wrap').forEach(function (wrap) {
    var pre = wrap.querySelector('pre');
    if (!pre) return;

    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.textContent = 'Copy';
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
