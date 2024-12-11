const name = "vaibhav"
const repocount = 50

// Bad way
//console.log(name + repocount + "value");

// Good way String Interpolation
// Modern way
console.log(`Hello my name is ${name} and my repo count is ${repocount}`); // Hello my name is Vaibhav and my repo count is 50

const gameName = new String("vaibhavvg");
// console.log(gameName); // [String: 'vaibhavvg']

console.log(gameName[0]); // v

console.log(gameName.__proto__); // {} Object

console.log(gameName.length); // 8

console.log(gameName.toUpperCase()); // VAIBHAVVG

console.log(gameName.charAt(2)); // i

console.log(gameName.indexOf('v')); // 0

// _____________substring and slice____________________
const newstring = gameName.substring(0,4);
console.log(newstring); // vaib, index 4 is not included\

const anotherstring = gameName.slice(0,4);
console.log(anotherstring); // vaib, index 4 is not included
// in slice we can also give negative values
const anotherstring2 = gameName.slice(-3);
console.log(anotherstring2); // vvg
const anotherstring3 = gameName.slice(-1,-3);
console.log(anotherstring3); // empty string
const anotherstring4 = gameName.slice(-6,-1);
console.log(anotherstring4); // bhavv
const anotherstring5 = gameName.slice(-6,2);

// in substring if we give negative values it will take it as 0
const newstring2 = gameName.substring(-6,2);
console.log(newstring2); // va

// ______________trim____________________
const newstring3 = "    vaibhav    ";
console.log(newstring3); //     vaibhav
console.log(newstring3.trim()); // vaibhav, no spaces

// _______________replace____________________
const url = "https://www.vaibhavgoyal/vaibhav%20goyal.com";
console.log(url.replace('%20','-')); // https://www.vaibhavgoyal/vaibhav-goyal.com
console.log(url.includes('vaibhav')); // true
console.log(url.includes('vaibhav', 10)); // false, after 10th index
console.log(url.includes('modi')); // false
console.log(`The word ${name} ${url.includes(name)?'is':'is not'} present in the url`);

//________________split____________________
const str="Hey how are you doing my name is vaibhav whats your name";
const words = str.split(' ');
console.log(words);
console.log(words[0]); // Hey
console.log(words[1]); // how

//________________at____________________
let index=2;
console.log(str.at(index)); // y
const arrstr=["abc", "def", "ghi"];
console.log(arrstr.at(index)); // ghi
let index1= -2;
console.log(arrstr.at(index1)); // def

//________________charAt____________________
console.log(str.charAt(2)); // y
console.log(str.charAt(-2)); // empty string, negative values are not allowed

//________________charCodeAt____________________
console.log(str.charCodeAt(2)); // 121 ASCII value of y
console.log(str.charCodeAt(-2)); // NaN, negative values are not allowed

//________________concat____________________
const str1="Hello";
const str2="World";
console.log(str1.concat(str2)); // HelloWorld

//________________endsWith____________________
console.log(str.endsWith("name")); // true
console.log(str.endsWith("hello")); // false

//________________isWellFormed____________________
console.log(str.isWellFormed()); // true, no unicode characters
console.log(str.isWellFormed("abc")); // true, no unicode characters
console.log(str.isWellFormed("abc\u{20BB7}")); // false, unicode characters

//________________lastIndexOf____________________
//returns the index of the last occurrence of the specified value, -1 if not found
console.log(str.lastIndexOf("name")); // 34

//________________localeCompare____________________
//returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order
console.log(str.localeCompare("abc")); // 1 , str comes after abc
console.log(str.localeCompare("xyz")); // -1 , str comes before xyz
console.log('abc'.localeCompare('bcd')); // -1, abc comes before bcd
console.log('bcd'.localeCompare('abc')); // 1, bcd comes after abc  
// localeCompare() is case sensitive, so it will return 1 if the case is different even if the strings are same 
console.log('abc'.localeCompare('ABC')); // 1, abc comes after ABC
console.log('ABC'.localeCompare('abc')); // -1, ABC comes before abc
// localComapre() comapers each character of the string with the other string

//________________match____________________
//returns an array containing the matched values, null if not found

