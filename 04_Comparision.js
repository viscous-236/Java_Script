// console.log(2>1); // true
// console.log(2<1); // false  


console.log("2">1); // true
console.log("02">1); // true

console.log(null>0); // false
console.log(null==0); // false
console.log(null>=0); // true

console.lof(undefined>0); // false
console.log(undefined==0); // false
console.log(undefined>=0); // false
console.log(undefined<0); // false
// comparison and equality chaeck works differently in JS


// === is strict equality check
console.log(2=="2"); // true in this type conversion is done
console.log(2==="2"); // false In this no type conversion is done

