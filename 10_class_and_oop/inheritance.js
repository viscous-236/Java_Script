class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);// Modern Style .call is old 
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
} 

const userOne = new Teacher("Vaibhav","vaibhav@google,com","123");
userOne.addCourse();

const userTwo = new User("Alex");
// userTwo.addCourse(); will throw error as User has not access of addCourse
userTwo.logMe();

console.log(userOne instanceof Teacher); // True as userOne is instanceof Teacher
console.log(userOne instanceof User); // True
console.log(Teacher instanceof User); // False
/*
No, Teacher is not an instance of User.

The instanceof operator is used to check if a specific object is an instance of a constructor or class in the prototype chain. For example, you can check whether userOne or userTwo are instances of User or Teacher.

However, Teacher itself is a class (not an object), so using instanceof with it in this context is incorrect.
*/

