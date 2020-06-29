let input = document.querySelector('.input');

const insert = (value) => input.value += value;

const clearInput = () => input.value = '';

const calc = () => input.value = eval(input.value);
