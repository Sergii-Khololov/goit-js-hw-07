const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientString = document.querySelector('#ingredients');

const makeIngredItem = options => {
  return options.map(option => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('ingredients-item__option');
    itemEl.textContent = option
    
    return itemEl
  });

};

const elements = makeIngredItem(ingredients);
ingredientString.append(...elements);
