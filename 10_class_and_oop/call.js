function setUsername(username){
    // complec DB calls
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    // setUsername(username);, will be called but will not set username
    // setUsername(this.username), same
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

let userOne = new createUser("Vaibhav","vaibhav@google.com",234);
console.log(userOne);

/*
If you directly call setUsername(username) or setUsername(this.username), the this context inside setUsername will not point to the object being created by createUser. Instead, it will refer to the global object (window in browsers or global in Node.js) or undefined in strict mode. This happens because setUsername is a standalone function and isn't automatically bound to the createUser function's this context.
*/
