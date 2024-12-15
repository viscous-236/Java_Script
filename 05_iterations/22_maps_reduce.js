const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.map((nums)=> nums+10);
// console.log(newNums);//Output:- [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// const newNums1= [];
// myNums.forEach((num)=>{
//     newNums1.push(num+10);
// })
// console.log(newNums1);//Output:- [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const newNums = myNums
                    .map((num)=> num*10)
                    .map((num)=> num+1)
                    .filter((num)=>num>40)

console.log(newNums);//Output:- [ 41, 51, 61, 71, 81, 91, 101 ]

//_______________reduce____________________
// Reduce is used to reduce the array to single value
const myNums1 =[1,2,3];

// const myTotal = myNums1.reduce(function(acc,curr){
//     console.log(`acc: ${acc},curr: ${curr}`);
//     return acc+curr;
// },0)

const myTotal = myNums1.reduce((acc,curr)=> acc+curr, 0);
console.log(myTotal);

