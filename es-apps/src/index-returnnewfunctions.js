//CURRY function : function returns a func and its returns another function and so on .. 

function outer() {
    return function () {
        console.log('innerone')
        return function () {
            console.log('inner two')
            return function () {
                console.log('inner three')
            }
        }
    }
}
outer()()()()

// function makeCake(sugar) {
//     return function (milk) {
//         return function (cream) {
//             return function (butter) {
//                 //compute all args which was passed 
//                 return `Cake is made with ${sugar} ${milk} ${cream} ${butter}`
//             }
//         }
//     }
// }

const makeCake = sugar => milk => cream => butter => `Cake is made with ${sugar} ${milk} ${cream} ${butter}`

const cake = makeCake('sugar')('milk')('cream')('butter')
console.log(cake)