let score=33;

// console.log(typeof score); // number
// console.log(typeof (score));// number

let score1="33abs";

// console.log(typeof score1); // string
// console.log(typeof (score1)); // string

let valueinnumber=Number(score1);
// console.log(typeof valueinnumber); // number
// console.log(valueinnumber); // NaN
// nan has type number

let score2=null;
// console.log(typeof score2); // object
let valueinnumber1=Number(score2);
// console.log(typeof valueinnumber1); // number
// console.log(valueinnumber1); // 0

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

// ********************************* Operations*******************

let value = 3;
let negvalue = -value;
// console.log(negvalue); // -3

// console.log(3+4); // 7

let str1="Hello";
let str2=" Vaibhav";
let str3=str1+str2;
// console.log(str3); // Hello Vaibhav

// console.log("1"+2); // 12
// console.log(1+"2"); // 12    
// console.log("1"+2+3); // 123 If first value is string then all other values are treated as string
// console.log(1+2+"3"); // 33 If first value is number then all other values are treated as number
// console.log(1+2+"3"+4); // 334

// console.log(true); // true
// console.log(+true); // 1    
// console.log(true+); // Error
// console.log(+true+); // Error
// console.log(+""); // 0
// console.log(+null); // 0
// console.log(+undefined); // NaN

let num1, num2, num3

num1 = num2 = num3 = 2+2;

let gamecounter=100;
++gamecounter;
// console.log(gamecounter); // 101


