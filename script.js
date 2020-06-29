const input = document.querySelector('.input');
const cancel = document.querySelector('.cancel');
const equal = document.querySelector('.equal');
const reset = document.querySelector('.reset');
const numbers = [
    document.querySelector('.zero'),
    document.querySelector('.one'),
    document.querySelector('.two'),
    document.querySelector('.three'),
    document.querySelector('.four'),
    document.querySelector('.five'),
    document.querySelector('.six'),
    document.querySelector('.seven'),
    document.querySelector('.eight'),
    document.querySelector('.nine'),
    document.querySelector('.decimal')
];
const operators = [
    document.querySelector('.plus'),
    document.querySelector('.minus'),
    document.querySelector('.divd'),
    document.querySelector('.mult'),
];

const cancelLast = () => input.value = input.value.slice(0, -1);
const clearInput = () => input.value ='';
const calcResult = () => input.value = eval(input.value);
const insertNum = (num) => input.value = input.value + num;

numbers.forEach( (el) => el.addEventListener('click', () => insertNum(el.value)));
operators.forEach( (el) => el.addEventListener('click', () => insertNum(el.value)));

cancel.addEventListener('click', cancelLast);
reset.addEventListener('click', clearInput);
equal.addEventListener('click', calcResult);






