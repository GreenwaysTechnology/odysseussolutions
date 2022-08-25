
//es 5 function declaration syntax
let hello = function () {
    console.log('hello')
}
//es 6 function declaration syntax : arrow function 
/**
 * 1.the value of this would be different in arrow function 
 * 2.the simple way of writing code - declarative programming.
 */

hello()

hello = () => {
    console.log('hello')
}
hello()
//if function has only one line of body : we can remove {}
hello = () => console.log('hello')
hello()
//args and parameters in arrow func 
let add = (a = 0, b = 0) => {
    let c = a + b
    console.log(`c ${c}`)
}
add(10, 90)

//return only value 
add = (a = 0, b = 0) => {
    return a + b
}
console.log(`c ${add(10, 90)
    }`)
//return only value , if there is no more code : we can remove {} and return statement
add = (a = 0, b = 0) => a + b
console.log(`c ${add(10, 90)
    }`)

//function with single arg , no default,return the same : we can remove {},(),
let getValue = value => value
console.log(getValue(90))
