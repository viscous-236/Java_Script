let score=33;

console.log(typeof score); // number
console.log(typeof (score));// number

let score1="33abs";

console.log(typeof score1); // string
console.log(typeof (score1)); // string

let valueinnumber=Number(score1);
console.log(typeof valueinnumber); // number
console.log(valueinnumber); // NaN
// nan has type number

let score2=null;
console.log(typeof score2); // object
let valueinnumber1=Number(score2);
console.log(typeof valueinnumber1); // number
console.log(valueinnumber1); // 0

// "33" => 33
// "33abs" => NaN
// null => 0
// undefined => NaN
// true => 1    false => 0  
// "" => 0
// 1 => true 0 => false
// "0" => true
// " " => true
// "false" => true
// "true" => true
// "null" => true
// "undefined" => true
// "" => false

