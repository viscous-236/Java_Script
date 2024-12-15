const coding = ["js", "py", "rb", "cs"];

// callback function dosent have name 
// coding.forEach( function(val){
//     console.log(val);
// } )//Output:- js py rb cs

// coding.forEach( (val) => {
//     console.log(val);
// } )//Output:- js py rb cs

function printMe(val){
    //console.log(val);
}

//coding.forEach(printMe); //Output:- js py rb cs

coding.forEach((item,val,arr) => {
    //console.log(item,val,arr);
})

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "Ruby",
        languageFileName : "rb"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})
// forEach dont return anything

// ______________Filter____________________\
// Filter is used to filter out the values from the array and return the new array
const myNums = [1,2,3,4,5,6,7,8,9,10];
// const mynewNums = myNums.filter((num) => num>4)
// OR
const mynewNums = myNums.filter((num) => {
    return num>4;
})// return keyword is essential
console.log(mynewNums);//Output:- [ 5, 6, 7, 8, 9, 10 ]

//Alternative way
const newNums = [];
myNums.forEach((num) => {
    if(num>4){
        newNums.push(num);
    }
})
console.log(newNums);//Output:- [ 5, 6, 7, 8, 9, 10 ]
