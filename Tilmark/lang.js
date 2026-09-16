(function () {
  var LANGS = ['en', 'zh', 'es', 'ja', 'pt'];
  var KEY = 'countdown-lang';

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'en';
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('visible', el.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.lang-btn');
    if (btn) setLang(btn.getAttribute('data-lang-btn'));
  });

  var saved = 'en';
  try { saved = localStorage.getItem(KEY) || 'en'; } catch (e) {}
  document.addEventListener('DOMContentLoaded', function () { setLang(saved); });
  setLang(saved);
})();
