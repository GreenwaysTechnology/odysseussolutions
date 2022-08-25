/**
 * function is literal, so we can pass function as parameter to another function
 *  ->Higher order function 
 */

function add(a, b) {
    let c = a + b
    console.log(c)
}

add(10, 10) //pass hard coded values
let x = 19
let y = 89
add(x, y)

//greet is just variable
function sayGreet(greet) {
    greet()
}

let hello = function () {
    console.log('hello ')
}
sayGreet(hello)

//literals
sayGreet(function () {
    console.log('hai')
})
//
//something = function(){}
// function fetch(something) {
//     something('This is response')
// }
const fetch = function (callback) {
    let status = callback('This is response')
    console.log(status)
}
fetch(function (response) {
    console.log(response)
    return 'done'
})
let myFetch = function (response) {
    console.log(response)
    return 'done'
}
fetch(myFetch)