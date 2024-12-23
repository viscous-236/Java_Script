function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
// IN Javascript everything is eventually an object, everything is object

function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++; // jis ka uska this
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`); // jis ks call hua uska score
    
}
const userOne = new createUser('Vaibhav',250);
const userTwo = new createUser('Va',25);
userOne.printMe()
console.log(userOne);

/*
Here's whats happens bts when the new keyword is used:
A new Object is created: The new keyword insitates the creation of a new JS object.

A prototype is linked: The newly created object is linked to a prototype property of the constructor function. This is done by setting the prototype of the object to the prototype of the function that was called. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, Javascript assumes this , the newly created object, to be intended return value.

The new Object is returned: If the constructor function does not return an object, the new expression will evaluate to the newly created object. If the constructor function returns an object, that object will be returned instead.
*/
