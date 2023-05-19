
const divElement = document.querySelector('my-div-element');
function zmienTekst() {
  // zmień tekst w divie
  divElement.innerHTML = 'Nowy tekst';
}
const buttonElement = document.querySelector('autouzupelnij');

buttonElement.addEventListener('click', zmienTekst);