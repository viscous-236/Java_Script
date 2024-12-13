const Marvel_heros = ['Thor','Ironman','Spiderman','Captain America'];
const dc_Heros = ['Superman', 'Batman','Flash'];

// Marvel_heros.push(dc_Heros);

// console.log(Marvel_heros);// [ 'Thor', 'Ironman', 'Spiderman', 'Captain America', [ 'Superman', 'Batman', 'Flash' ] ]
// in this case the dc_Heros array is added as a single element in the Marvel_heros array, itis the case of array inside an array

// console.log(Marvel_heros[4][0]); // Superman
// push array works on existiong element

const all_Heros = Marvel_heros.concat(dc_Heros);
console.log(all_Heros);// [ 'Thor', 'Ironman', 'Spiderman', 'Captain America', 'Superman', 'Batman', 'Flash' ]
// concat creates a new array and does not change the original array
// can use to merge two arrays

const allnew_Heros = [...Marvel_heros,...dc_Heros];
console.log(allnew_Heros);// [ 'Thor', 'Ironman', 'Spiderman', 'Captain America', 'Superman', 'Batman', 'Flash' ]
// spread operator also does the same thing as concat
// it also creates a new array and does not change the original array but it can merge more than two arrays

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanother_Array = another_Array.flat(Infinity);
console.log(realanother_Array);// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Vaibhav"));// false
console.log(Array.from("Vaibhav"));// [ 'V', 'a', 'i', 'b', 'h', 'a', 'v' ]
// Array.from() creates an array from an array like object or iterable object
// it can also convert a string into an array))
console.log(Array.from({name: "Vaibhav"}));// [], it creates an empty array as the object is not iterable

let score1=100
let score=200
let score3=300
let name= "vaibhav"

console.log(Array.of(score1,score,score3));// [ 100, 200, 300 ]

