// const tinderUser = new Object(); , Singleton
const tinderUser = {} // object literal

tinderUser.name = "Vaibhav";
tinderUser.id = "123abc";
tinderUser.isLoggedin = false;

// console.log(tinderUser);

const regularUser = {
    email: "Vaibhav@google.com",
    fullname: {
        userfullname: {
            fistname: "Vaibhav",
            lastname: "Goyal"
        }
    }
}

console.log(regularUser.fullname.userfullname.fistname); // Vaibhav

const obj1 = {1: "a",2: "b"};
const obj2 = {3: "c",4: "d"};
const obj3 = {5: "e",6: "f"};

// const obj4 = Object.assign({},obj1,obj2,obj3);
//console.log(obj4);
// console.log(obj1);

const obj4 = {...obj1,...obj2,...obj3};
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // [ 'name', 'id', 'isLoggedin' ]
console.log(Object.values(tinderUser)); // [ 'Vaibhav', '123abc', false ]
console.log(Object.entries(tinderUser)); // [ [ 'name', 'Vaibhav' ], [ 'id', '123abc' ], [ 'isLoggedin', false ] ]
console.log(tinderUser.hasOwnProperty('name')); // true
console.log(tinderUser.hasOwnProperty('email')); // false

const course = {
    coursename: "JS",
    price: 100,
    courseDuration: "2 months"
}

const {courseDuration: Duration} = course 
//console.log(courseDuration) 
console.log(Duration)

// JSON
// {
//     "name": "Vaibhav",
//     "couresename": "JS",
//     "prince": "free"
// }

[
    {},
    {},
    {}
]
