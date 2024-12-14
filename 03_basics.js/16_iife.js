// Immediately Invoked Function Expressions(IIFE)
// IIFE are the functions that immedeiately executes also to stop the problems caused global polution

//NAMED IIFE
(function chai(){
    console.log("DB Connnected");
})(); // always remeber to put ; this in this case atleast.

// UNNAMED IIFE
(() => {
    console.log("DB Two Connected");
})();

// PARAMETER IIFE
((name) => {
    console.log(`DB Two Connected, ${name}`);
})("Vaibhav")
