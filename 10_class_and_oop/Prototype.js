let myName = "Vaibhav";

let myHeros = ['Thor','Spiderman'];

let heroPower = {
    Thor: 'Hammer',
    Spiderman: 'Web',

    getSpiderPower: function(){
        console.log(`Spider Power is ${this.Spiderman}`);
    }
}

Object.prototype.vaibhav = function(){
    console.log("vabhav is everywhere");
}
Array.prototype.vaibhavHi = function(){
    console.log("Vaibhav says Hi!");
    
}
// heroPower.vaibhav(); // vabhav is everywhere
// myHeros.vaibhav();// vabhav is everywhere
// myName.vaibhav();// vabhav is everywhere
// myHeros.vaibhavHi() // Vaibhav says Hi!
// heroPower.vaibhavHi() // Will throw error

// __________________Inheritance______________
const user ={
    name: "vaib",
    email: "vaib@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JSAssingment',
    fullTime: true,
    __proto__: TeachingSupport //Outdated
}
Teacher.__proto__ = user; //Outdated

// Modern Technology
//Object.setPrototypeOf(TeachingSupport, Teacher) // will inherit the details of teaching support to Teacher

//_______________________________________
String.prototype.trueLength = function(){
    console.log(this); //this woh ha jisne call kiya
    console.log(`True Length is ${this.trim().length}`);
}
let str = "Hellp    "
console.log(str.trueLength());// [String: 'Hellp    ']
// 5
