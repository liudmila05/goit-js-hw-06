function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('#controls>input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const newBoxes = document.querySelector('#boxes');

const createNewBoxes = amount => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    // style
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    // div.style.display = 'block';    
    // div.style.display = 'flex';
    // div.style.justifyContent = 'center';
    div.style.margin = '10px';
    div.style.background = getRandomHexColor();
    // style end
    elementsToAdd.push(div);
  };
  return elementsToAdd;
};

const destroyBoxes = () => {
  newBoxes.innerHTML = '';
};

createButton.addEventListener('click', () => {
  let boxesToAdd = createNewBoxes(inputNumber.value);
  newBoxes.append(...boxesToAdd);
});

console.log(inputNumber.value);

destroyButton.addEventListener('click', () => {
  destroyBoxes.call();
});