class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    
    get password(){
        // return this.password.toUpperCase()
        return this._password.toUpperCase()// is line ka matlab kaisa password jo person access karha ha usse kaisa dikha rha ha
    }// Use to get the Value

    set password(value){
        // this.password = value.toUpperCase() //RangeError: Maximum call stack size exceeded
        // to avoid this we have a method to define that is to make a new variable
        // this._password = value.toUpperCase()// is line ka matlab ha ki kasisa password set hora ha DB me, agar iski jagah
        this._password = value // hota toh password to abc hi set hota par access karte time voh ABC show hota
        console.log(this._password);//abc
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }
}

const userOne = new User('userOne@ai.com','abc');
console.log(userOne.password); //ABC
console.log(userOne.email);

