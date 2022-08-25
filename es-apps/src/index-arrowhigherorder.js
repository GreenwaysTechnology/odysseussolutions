//higher order function and arrow 

// const greet = function (callback) {
//     callback()
// }

const greet = callback => callback('hai')


// let hai = function (response) {
//     console.log(response)
// }

let hai = response => console.log(response)
greet(hai)
// greet(function(response){
//     console.log(response)
// })
greet(response => console.log(response))

const fetch = (success, failure) => {
    if (typeof success === 'function' && typeof failure === 'function') {
        let status = true
        if (status) {
            success('This is success response')
        } else {
            failure('This is error response')
        }
    } else {
        console.log('invalid type')
    }
}

fetch(response => console.log(response), err => console.log(err))