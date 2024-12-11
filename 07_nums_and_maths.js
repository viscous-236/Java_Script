// Declaration
const score = 400
console.log(score); // 400

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(typeof score); // number
console.log(typeof balance); // object

// -------------------------------------
console.log(balance.toString().length); // 3
console.log(typeof balance.toString()); // string
console.log(balance.toFixed(2)); // 100.00

const othernumber = 123.5434
console.log(othernumber.toPrecision(3)); // 124
console.log(othernumber.toPrecision(2)); // 1.2e+2
console.log(othernumber.toPrecision(1)); // 1e+2

const hundreads = 10000000;
console.log(hundreads.toLocaleString()); // 10,000,000
//console.log(hundreads.toLocaleString('en-IN')); // 1,00,00,000


// ++++++++++++++++MATHS++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-100)); // 100
console.log(Math.round(1.5)); // 2
console.log(Math.ceil(1.1)); // 2
console.log(Math.floor(1.9)); // 1
console.log(Math.min(1,2,3,4,5)); // 1
console.log(Math.max(1,2,3,4,5)); // 5
console.log(Math.random()); // random number between 0 and 1

console.log(Math.floor(Math.random()*10)+1); // random number between 1 and 10

const min = 1
const max = 16

// IMPORTANT
console.log(Math.floor((Math.random() * (max - min + 1))) + min);// random number between 1 and 16
