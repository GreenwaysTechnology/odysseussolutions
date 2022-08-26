//source code 
console.log('a before declaration', a)

//console.log(b)

var a = 10
//the variable is declared after declaration and initalization
console.log('after a', a);

let b = 100

console.log(b)

//parsed code:

//pushing variable declaration at top level is called "Hositing"
// var a;
// console.log(a)
// a = 10
// //the variable is declared after declaration and initalization
// console.log(a);

/**
 * Compile time 
 *    -parsing time 
 *        -code rearrangement happens
 *               -hositing
 * Runtime /execution time 
 *       -assembly code 
 */
/////////////////////////////////////////////////////////////////////////////////////

//this works fine 
sayHello()

function sayHello(){
    console.log('Hello')
}
sayHello()

hai()

var hai = function(){
    console.log('hai')
}
hai()