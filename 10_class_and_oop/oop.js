// ++++++++++++++++OBJECT LITERAL++++++++++++++++++++++
const user = {
    username: 'Vaibhav Goyal',
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        //console.log(`username: ${username}`);// Will throw error of username undefined
        //console.log(`username: ${this.username}`);// correct method
        console.log(this);// will show context of current object 
        // {
        //     username: 'Vaibhav Goyal',
        //     loginCount: 9,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        // }
    } 
};
//console.log(user['username']);// Viabhv Goyal
//console.log(user.getUserDetails())
//console.log(this);// {} empty as there nothing in global enviorment
// This the case of nodejs but when u try to do the same in browser us will get window as an output which contains all the global values


//+++++++++++++++++++++++++++++
function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;// Not required it will return this by default
} 
// const userOne = User('Vaibhav Goayl',12,true);
//console.log(userOne);
// console.log(userOne);// Will show the details of userTwo as userOne details are owerWritten

const userOne = new User('Vaibhav Goayl',12,true);
const userTwo = new User('Alex',13,false);
//console.log(userOne); // will show the details of userOne
//console.log(userTwo); // will show the details of userTwo

//_________________New____________
// > When we use new keyword empty object is created which is called instace
// > Constructor function is called due to new keyword
// > contructor will inject all the aruments in this keyword
// > we will get the function

console.log(userOne.constructor);
console.log(userTwo.constructor);
