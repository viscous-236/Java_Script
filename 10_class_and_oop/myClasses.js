// ES6

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User('Vaibhav Goyal','vaibhav@google.com','123');
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

// Behind the Scenes

function newUser(username ,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}
newUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
newUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const userTwo = new newUser('Vaibhav','vaibhav@google.com','1234');
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());

