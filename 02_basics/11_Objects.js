// singleton

// object literals  

const mySym = Symbol("Key1")

const JsUsers={
    name: "Vaibhav",
    "full name": "Vaibhav Goyal",
    age: 18,
    [mySym]: "myKey1",
    location: "Jaipur",
    email: "vaibhavgoyal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday","Wednesday"]
}

console.log(JsUsers.email)
console.log(JsUsers["email"])
console.log(JsUsers["full name"])
// console.log(typeof JsUsers["mySym"]) // string, without [] around mySym when defining JsUsers
console.log(JsUsers[mySym]) // myKey1
console.log(typeof JsUsers[mySym]) // string

// overwriting values
// JsUsers.email = "vaibhav@chatgpt.com"
// Object.freeze(JsUsers)
// JsUsers.email = "modi.com"
// console.log(JsUsers.email)// vaibhav@chatgpt.com
// console.log(JsUsers)

JsUsers.greeting = function(){
    console.log("Hello JS User");
}

JsUsers.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUsers.greeting());
console.log(JsUsers.greetingTwo());
