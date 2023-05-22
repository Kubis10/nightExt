var opis = document.getElementById("opis");
var jezyk = navigator.language;

if (jezyk === 'pl') {
    opis.innerHTML="Łatwa zmiana między trybem ciemnym a jasnym";
} else if(jezyk === 'de'){
    opis.innerHTML="Einfaches Umschalten zwischen dunklem und hellem Modus.";
} else if(jezyk === 'fr'){
    opis.innerHTML="Changement facile entre le mode sombre et le mode clair.";
} else if(jezyk === 'nl'){
    opis.innerHTML="Gemakkelijk overschakelen tussen donkere en lichte modus.";
} else if(jezyk === 'cs'){
    opis.innerHTML="Snadné přepínání mezi tmavým a světlým režimem.";
} else if(jezyk === 'uk'){
    opis.innerHTML="Легко перемикатися між темним та світлим режимом.";
}
