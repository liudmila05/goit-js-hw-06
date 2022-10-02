const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let ulList = document.querySelector("#ingredients");
const liEl = [];

ingredients.forEach(ingredient => {
  let item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;
  liEl.push(item)
});

ulList.append(...liEl);