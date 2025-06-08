const score = 400
const number = new Number(100);
// console.table([score, number]);

// console.log(number.toString().length);
// console.log(typeof number);
// console.log(number.toFixed(2)); // number of digits after decimal places

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // number of significant digits

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++ Maths +++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.min(3,4,5,6,7,8,9));
console.log(Math.max(3,4,5,6,7,8,9));
console.log(Math.random());

console.log(((Math.random()*10 + 1).toPrecision(1)));
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);