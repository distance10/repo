(function () {
  var LANGS = ['en', 'zh', 'es', 'hi', 'fr'];
  var STORAGE_KEY = 'zorixpdf-site-lang';

  function normalize(lang) {
    if (!lang) return 'en';
    var l = lang.toLowerCase();
    if (l.indexOf('zh') === 0) return 'zh';
    if (l.indexOf('es') === 0) return 'es';
    if (l.indexOf('hi') === 0) return 'hi';
    if (l.indexOf('fr') === 0) return 'fr';
    return 'en';
  }

  function setLang(lang) {
    lang = normalize(lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('visible', el.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-set-lang'));
    });
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  setLang(saved || navigator.language || 'en');
})();
