const colorBorderInput = document.querySelector('#validation-input');
colorBorderInput.addEventListener('blur',targetInput);

const toggleClass = (prev, next, node) => {
    node.classList.remove(prev);
    node.classList.add(next);
};


function targetInput(element) {
    const inpLength = element.currentTarget.value.length;
    const dataLength = element.currentTarget.attributes['data-length'].nodeValue;

    inpLength === Number(dataLength) ?
        toggleClass('invalid', 'valid', colorBorderInput) :
        toggleClass('valid', 'invalid', colorBorderInput);
}
