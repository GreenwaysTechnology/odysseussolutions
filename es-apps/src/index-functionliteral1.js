//declare function 
function sayGreet() {
    return 'Hello'
}
//function invocation
console.log(sayGreet())

//assign function in a variable

let greet = sayGreet
console.log(greet)

/**
 * function can be assigned in a variable , can be invoked using that variable
 */
greet()
/////
//inline function declaration 
const hello = function sayHello() {
    console.log('hello')
}
hello()
//inline function declaration : anonmous (function without name)
const hai = function () {
    console.log('hello')
}
hai();

//args and params in function literals
const add = function (a = 0, b = 0) {
    return a + b
}
console.log(add(10,10))