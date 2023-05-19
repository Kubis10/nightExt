var element = document.getElementById("jezyk");
var opis = document.getElementById("opis");
var jezyk = navigator.language;
var displayNames = new Intl.DisplayNames([jezyk], {type: 'region'});
var countryName = displayNames.of(jezyk);

if (jezyk === 'pl') {
    element.innerHTML = "Język przeglądarki: ";
    opis.innerHTML="Łatwa zmiana między trybem ciemnym a jasnym";
} else if(jezyk === 'de'){
    element.innerHTML = "Browsersprache: ";
    opis.innerHTML="Einfaches Umschalten zwischen dunklem und hellem Modus.";
} else if(jezyk === 'fr'){
    element.innerHTML = "Langue du navigateur: ";
    opis.innerHTML="Changement facile entre le mode sombre et le mode clair.";
} else if(jezyk === 'nl'){
    element.innerHTML = "Browsertaal: ";
    opis.innerHTML="Gemakkelijk overschakelen tussen donkere en lichte modus.";
} else if(jezyk === 'cs'){
    element.innerHTML = " Jazyk prohlížeče: ";
    opis.innerHTML="Snadné přepínání mezi tmavým a světlým režimem.";
} else if(jezyk === 'uk'){
    element.innerHTML = "Мова браузера: ";
    opis.innerHTML="Легко перемикатися між темним та світлим режимом.";
}
element.insertAdjacentHTML('beforeend', " "+ countryName);
/*const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', function () {
    const selectedLanguage = languageSelect.value;
    if (selectedLanguage === 'pl') {
        var opis = document.getElementById("opis");
        opis.innerHTML="Łatwa zmiana między trybem ciemnym a jasnym";
    }
  });*/