const colectorValue = document.querySelector('#value');
let counterValue = 0

const increment = () => counterValue += 1;
const decrement = () => counterValue -= 1;

const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

const onBtnIncrement = () => colectorValue.textContent = increment();
const onBtnDecrement = () => colectorValue.textContent = decrement();

btnIncrement.addEventListener('click', onBtnIncrement);
btnDecrement.addEventListener('click', onBtnDecrement);