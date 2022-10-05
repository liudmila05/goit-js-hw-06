const inputChange = document.querySelector('input#font-size-control');
const abracadabra = document.querySelector('span#text');

inputChange.addEventListener('change', element => {
    abracadabra.style.fontSize = `${element.target.value}px`
});