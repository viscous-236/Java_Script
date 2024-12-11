// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());// 2021-08-07T06:00:00.000Z
console.log(myDate.toDateString());// Sat Aug 07 2021
console.log(myDate.toTimeString());// 11:30:00 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());// 8/7/2021, 11:30:00 AM
console.log(myDate.toLocaleDateString());// 8/7/2021
console.log(myDate.toLocaleTimeString());// 11:30:00 AM
console.log(myDate.getFullYear());// 2021
console.log(typeof myDate);// object

//let myCreatedDate = new Date(2006,9,23,4,0);
let myCreatedDate = new Date("2006-10-23");
console.log(myCreatedDate.toDateString()); // Thu Oct 23 2006

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1628321400000
console.log(myCreatedDate.getTime()); // 1161561000000
console.log(Math.floor(Date.now()/1000));

let NewDate = new Date();

NewDate.toLocaleString('Default', {
    weekday: 'long'
})
