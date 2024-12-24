// Is it that we can change the value of Math.pi() if not why?
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI") // Apan ne Math ke andaer se PI ki property ka discriptor maga
//console.log(Math.PI);
console.log(descriptor);
/*
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}
*/
// No we cant change the value of Math.PI due to above reasons
const Pizza = {
    name: "OTC Pizza",
    price: 250,
    isAvailable: true,
    orderPizza: function(){
        console.log('Pizza nhi bana');
    }
};
console.log(Object.getOwnPropertyDescriptor(Pizza,"name"));
/*
{
  value: 'OTC Pizza',
  writable: true,
  enumerable: true,
  configurable: true
}
*/ 
// As this object is made by us we can change these writable,enumerable,configurable
Object.defineProperty(Pizza,"name",{
    //writable: false,
    enumerable: false // will stop name to get the part of loop
});
// console.log(Object.getOwnPropertyDescriptor(Pizza,"name"));
/*
{
  value: 'OTC Pizza',
  writable: false,
  enumerable: false,
  configurable: true
} 
*/

for (const [key,value] of Object.entries(Pizza)) {
    if(typeof value !== 'function'){
        console.log(`${key} , ${value}`);
    }
}
/*
price , 250
isAvailable , true
*/
