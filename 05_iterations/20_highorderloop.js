// forof

const arr = [1,2,3,4,5];

for (const num of arr) {
    //console.log(num);
}

const greeting = "Hello World";
for (const greet of greeting) {
    if(greet === ' '){
        continue;
    }
    //console.log(greet);
    
}

const superheroes = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Captain America'];
for (const heros of superheroes) {
    //console.log(heros);
}


//++++++++++++++++++MAPS++++++++++++++++++++++++++++

const map = new Map();

map.set('IN', 'India');
map.set('US', 'United States');
map.set('Fr','France');
map.set('IN','India');

for (const key of map) {
    //console.log(key);
}//[ 'IN', 'India' ] [ 'US', 'United States' ] [ 'Fr', 'France' ]

for (const [key,value] of map) {
    //console.log(key,":-",value);
}//IN :- India US :- United States Fr :- France

// We cant use for of loop with objects as they are not iterable4


//++++++++++++++++++FOR IN LOOP++++++++++++++++++++++++++++

const myObject = {
    js: 'Javascript',
    py: 'Python',
    rb: 'Ruby',
    cs: 'C#'
}

for (const key in myObject) {
    console.log(key);
}
//Output:- js py rb cs
for (const key in myObject) {
    console.log(`${key} is shortucut for ${myObject[key]}`);
}//Output:-
/*
js is shortucut for Javascript
py is shortucut for Python
rb is shortucut for Ruby
cs is shortucut for C#
*/

const programming = ['Javascript', 'Python', 'Ruby', 'C#'];

for (const key in programming) {
    console.log(key);
}//Output:- 0 1 2 3
for (const key in programming) {
    console.log(programming[key]);
}//Output:- Javascript Python Ruby C#


// forof loop print the values of the array
// forin loop print the index of the array
