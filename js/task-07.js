const reactChengeImportance = document.querySelector('#font-size-control');
const updateText = document.querySelector('#text');
reactChengeImportance.value = 20

const scrolBox = (element) => updateText.style.fontSize = `${element.currentTarget.value}px`;

reactChengeImportance.addEventListener('input', scrolBox);

