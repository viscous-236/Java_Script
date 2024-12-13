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
const chai = () =>{
    let username = "vaibhav";
    console.log(this); //undefined
}

chai();
