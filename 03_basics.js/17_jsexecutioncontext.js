//JS Execution Context
// GLOBAL EC,FUNCTION EC,EVAL EC
// javascript code runs in two phases.
//1. MEMORY CREATION PHASE
//2. EXECUTION PAHSE

// FOR EXAMPLE :- TAKE THIS CODE
/*
let val1 = 10;
let val2 = 5;
function addTwonum(num1,num2){
    let total = num1 + num2;
    return total
}
console.log(val1,val2);
console.log(10,2);
*/

/*
STEPS:-
1. global execution => this
2. Memory phase =>
    val1 = undefined
    val2 = undefined
    addTwonum = Defination
    result1 = undefined
    result2 = undefined
3. Execution Phase=>
    val1 <=10
    val2 <=5

    for result1 =>
    addTwonum =>newvariableenviorment + execution thread
    {
        MEMORY PHASE(FOR FUNCTION)
            val1 = undefined
            val2 = undefined
            total = undefined
        Execution phase
            num1 = 10
            num2 = 5
            total =15
        It will return total to GLOABAL EXECUTION CONTEXT
    }Now this newvariableenviorment will be deleted
    
    for result2 =>
        again nve and et will be created and after returning the result it will be deleted
*/
