(function () {
  var LANGS = ['en', 'zh', 'de', 'fr'];
  var STORAGE_KEY = 'lucentx-support-lang';

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'en';
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
  if (saved && LANGS.indexOf(saved) !== -1) {
    setLang(saved);
  } else {
    var browser = (navigator.language || 'en').slice(0, 2);
    setLang(LANGS.indexOf(browser) !== -1 ? browser : 'en');
  }
})();
