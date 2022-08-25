//what if i want to access the local/inner function outside: you have to return that function 

// function counter() {
//     function inc() {
//         console.log('inc')
//     }
//     //return the function 
//     return inc // name of the function 
// }


// function counter() {
//     return function inc() {
//         console.log('inc')
//     }
// }
function counter() {
    return function () {
        console.log('inc')
    }
}
// const inc = counter()
// console.log(inc)
// inc()
counter()()

let counterNew = function () {
    return function () {
        console.log('inc')
    }
}
counterNew()()

counterNew = () => {
    return () => {
        console.log('inc')
    }
}
counterNew()()

counterNew = () => {
    return () => console.log('inc')
}
counterNew()()

counterNew = () => () => console.log('inc')
counterNew()()