// IF

// if(2==="2"){
//     console.log("yes");
// }
// else{
//     console.log("no");
    
// }

const useremail = "vaibhav@ai.com"

if(useremail){
    console.log("Got the email");
}else{
    console.log("No Email found");
}// Got the email

const usermail1 = [];

if(usermail1){
    console.log("Got the email");
}else{
    console.log("No Email found");
    
}// Got the email, but the array is empty

// TRUTHY AND FALSY VALUES
// FALSY
// false, 0 ,-0, BigInt 0n , "" , null NaN , undefined

// TRUTHY
// "0","false"," ",[],{},function(){}

//Method to check empty array
if(usermail1.length === 0){
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}

//Method to check empty object
const emptyObj ={};

if(Object.keys(emptyObj).length === 0){
    consle.log("Object is empty");
}else{
    console.log("Object is not empty");
}

// Nullish Coalescing Operator (??): null and undefined

let val1;
//val1 = 5 ?? 10; // 5
//val1 = 0 ?? 10; // 0
// val = null ?? 10; // 10
val1 = undefined ?? 10; // 10
console.log(val1);

