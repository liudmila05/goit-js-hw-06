const inputChange = document.querySelector('input#font-size-control');
const abracadabra = document.querySelector('span#text');

inputChange.addEventListener("input", onInputValueChange);

function onInputValueChange(event) {
    abracadabra.style.fontSize = event.currentTarget.value + "px";
};