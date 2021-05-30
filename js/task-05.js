const textInput = document.querySelector('#name-input');
const emtyOutput = document.querySelector('#name-output');

const inputTextFile = (element) => element.currentTarget.selectionStart > 0 ?
    emtyOutput.textContent = element.currentTarget.value :
    emtyOutput.textContent = 'незнакомец';

textInput.addEventListener('input', inputTextFile);