// Just dont use var

//Another way to decalre function

console.log(addOne(1)); // can access
// console.log(addTwo(9)); // Will throw error for this
function addOne(num){
    return num+1;
}

const addTwo = function(num){
    return num+2;
}

// console.log(addTwo(9));
