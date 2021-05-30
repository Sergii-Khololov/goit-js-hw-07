const numbersSubOfCategories = document.querySelectorAll('h2');
const numbersSumCategories = document.querySelectorAll('.item ul')
numbersSubOfCategories.forEach(el => console.log(`Название категории: ${el.textContent}`));
numbersSumCategories.forEach(el => console.log(`Количество элементов: ${el.children.length}`));

const categoriesEl = document.querySelector('#categories').children.length ;
console.log(`Количество категории : ${categoriesEl}`);

