class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const userOne = new User("UserOne");
// console.log(userOne.createId()); will throw errors

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email
    }
}
const userTwo = new Teacher("userTwo","userTwo@google.con");
userTwo.logMe();
// userTwo.createId(); , will throw error

