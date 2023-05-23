
function getCodeLocale(language) {
    return language.substring(0,2);
}

function localize (language) {
    console.log(language)
  if (['en', 'ru'].includes(language)) {
    let lang = ':lang(' + language + ')';
    let hide = '[lang]:not(' + lang + ')';
    document.querySelectorAll(hide).forEach(function (node) {
      node.style.display = 'none';
    });
    let show = '[lang]' + lang;
    document.querySelectorAll(show).forEach(function (node) {
      node.style.display = 'block';
    });
  }
}


//localize(getCodeLocale(window.navigator.language));
localize("en");



const getLanguage = () => navigator.userLanguage || (navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || navigator.browserLanguage || navigator.systemLanguage || 'en';

console.log(getLanguage());