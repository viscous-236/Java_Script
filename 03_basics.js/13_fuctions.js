function saymyName(){
    console.log("Vaibhav");
}

// saymyName()

// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1 , num2){
    let result = num1 + num2
    return result
}

const result = addTwoNumbers(2,3);
// console.log(result);

function loginUserMessage(username){
    if(!username){
        console.log("Plaese Enter the username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

// function calculateCartPrice(...num1){
//     return num1;
// }//[ 200, 300, 400, 500 ]
// console.log(calculateCartPrice(200,300,400,500))

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(100,200,300,400));//[300,400]

const user = {
    username: "vaibhav",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

//handleObject(user)
handleObject({
    username: "Vaibhav",
    price: 199
})

const myNewArray = [200,400,500,800];
function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,800]));


