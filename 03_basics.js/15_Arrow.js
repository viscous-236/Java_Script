// const user = {
//     username: "Vaibhav",
//     price: 999,

//     welcomemessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this); // talks about current context
//     }
// }

// user.welcomemessage() // Vaibhav, welcome to website
// user.username= "mod";
// user.welcomemessage() // mod, welcome to website 

// console.log(this); // {} 

// function chai(){
//     let username = "vaibhav"
//     console.log(this.username);// undefined
// }

// chai()

//____________________ArrowFunction___________________
// () => {}

const chai = () =>{
    let username = "vaibhav";
    console.log(this.username); //undefined
    console.log(this);
}


chai();

// const addTwo = (num1,num2) => {
//     return num1+ num2;
// }
//another way
const addTwo = (num1,num2) => num1+num2;
// const addTwo = (num1,num2) => ({username: "Vaibhav"}) //{username: "Vaibhav"}
console.log(addTwo(1,2));
