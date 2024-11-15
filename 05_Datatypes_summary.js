// Primitive
// 7 types of primitive datatypes
// 1. number
// 2. string
// 3. boolean
// 4. undefined
// 5. null
// 6. symbol
// 7. bigint

// Reference type or Non-primitive
// 1. Object
// 2. Array
// 3. Function

// Js is dynamically typed language

const id = symbol('123');
const anotherId = symbol('123');

console.log(id === anotherId); // false because they are different symbols
const bigNumber = 345935794379349394222n; // big int

const hero=["Shaktimen","Krishna","Ganesh"];
let myobj ={
    name:"Vaibhav",
    age: 25,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof null); // object
console.log(typeof hero); // object
console.log(typeof hero[0]); // string
console.log(typeof myFunction); // function

// ************************************************

// memory are of two types stack and heap
// stack=primitive datatypes, we get copy of the value
// heap=reference datatypes, we get reference of the value

let myname= "Vaibhav";
let anothername= myname;
console.log(anothername); // Vaibhav
anothername="Rahul";
console.log(anothername); // Rahul
console.log(myname); // Vaibhav

let user = {
    email: "vaibhav,com",
    upi: "vaibhav@upi"
}

let user2 = user;
user2.email = "rahul.com";
console.log(user.email); // rahul.com
console.log(user2.email); // rahul.com

