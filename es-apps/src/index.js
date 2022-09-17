// "use strict"
//lexcical and dynamic scope 

// const training = {
//     name: 'subramanian',
//     teach: function () {
//         console.log('teach function', this, this.name)
//         //inner function 
//         function learn(){
//             console.log('learn function')
//             console.log(this, this.name, 'is teaching')
//         }
//         learn() //called inside teach function 
//     }
// }
// training.teach()
// const training = {
//     name: 'subramanian',
//     teach: function () {
//         console.log('teach function', this, this.name)
//        //local variable of teach will be accessiable inside learn
//         let self = this
//         function learn(){
//             console.log('learn function')
//             //console.log(this, this.name, 'is teaching')
//             console.log(self, self.name, 'is teaching')
//         }
//         learn() //called inside teach function 
//     }
// }
// training.teach()

// //solution 2:
// const training = {
//     name: 'subramanian',
//     teach: function () {
//         console.log('teach function', this, this.name)
//         function learn(){
//             console.log('learn function')
//             //console.log(this, this.name, 'is teaching')
//             // console.log(self, self.name, 'is teaching')
//             console.log(training, training.name, 'is teaching')

//         }
//         learn() //called inside teach function 
//     }
// }
// training.teach()

//solution 3:
// const training = {
//     name: 'subramanian',
//     teach: function () {
//         console.log('teach function', this, this.name)
//         function learn(){
//             console.log('learn function')
//             //console.log(this, this.name, 'is teaching')
//             // console.log(self, self.name, 'is teaching')
//             console.log(this, this.name, 'is teaching')

//         }
//         //learn.call(training) 
//         learn.call(this)
//     }
// }
// training.teach()

// //solution 4 : return the function and call later..

// const training = {
//     name: 'subramanian',
//     teach: function () {
//         console.log('teach function', this, this.name)
//         return function (){
//             console.log('learn function')
//             //console.log(this, this.name, 'is teaching')
//             // console.log(self, self.name, 'is teaching')
//             console.log(this, this.name, 'is teaching')

//         }
//     }
// }
//  const learn = training.teach()
//  learn.call(training)

//solution 5 : Arrow functions :lexcially scoped
const training = {
    name: 'subramanian',
    teach: function () {
        console.log('teach function', this, this.name)
        // const learn = () => {
        //     console.log('learn function')
        //     console.log(this, this.name, 'is teaching')
        // }
        // learn()
        return () => {
            console.log('learn function')
            console.log(this, this.name, 'is teaching')
            return this;
        }
    }
}
console.log(training.teach()())