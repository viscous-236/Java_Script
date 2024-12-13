//array

//Type of Declration
const myArray = [0,1,2,3,4,5,6,7,8,9];
const myHeros = ['Ironman', 'Spiderman', 'Captain America', 'Thor'];
const myArray2 = new Array(1,2,3,4,5);

// JS arrays are resizable and can contain mix data types

// Array Methods
// myArray.push(10);
// console.log(myArray);// [0,1,2,3,4,5,6,7,8,9,10]
// myArray.pop();
// console.log(myArray);// [0,1,2,3,4,5,6,7,8,9]
// myArray.unshift(-1);
// console.log(myArray);// [-1,0,1,2,3,4,5,6,7,8,9]

// console.log(myArray.includes(9));// true
// console.log(myArray.includes(11));// false
// console.log(myArray.indexOf(9));// 9
// console.log(myArray.indexOf(11));// -1

// const newArr = myArray.join();
// console.log(newArr);// -1,0,1,2,3,4,5,6,7,8,9
// console.log(typeof newArr);// string

// slice and splice
console.log("A",myArray); // [0,1,2,3,4,5,6,7,8,9]

const myAn1 = myArray.slice(1,4);
console.log(myAn1);// [1,2,3]
console.log("B",myArray); // [0,1,2,3,4,5,6,7,8,9]

const myAn2 = myArray.splice(1,4);
console.log(myAn2);// [1,2,3,4]
console.log("C",myArray); // [0,5,6,7,8,9]

// Slice and Splice are used to extract elements from an array
// Slice does not change the original array and returns the extracted elements
// Splice changes the original array and returns the extracted elements it also take the last argument as the elements to be added in the array


