(function() {
  var params = new URLSearchParams(window.location.search);
  var urlLang = params.get('lang');
  var stored = localStorage.getItem('reboulot_lang');
  var supported = ['ar', 'en'];
  var lang = (urlLang && supported.indexOf(urlLang) !== -1) ? urlLang :
             (stored && supported.indexOf(stored) !== -1) ? stored : 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
})();