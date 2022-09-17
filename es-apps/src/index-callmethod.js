function sayHello(){
    console.log(this.message)
    return this;
}
//owner of sayHello here is window

message = 'Window message'

console.log(sayHello())

//change the owner of function .
let greetings = {
    message:'greetings message'
}
// sayHello.call(targetObject)
sayHello.call(greetings)
// console.log(sayHello())

let hi = {
    message:'Hi message'
}
sayHello.call(hi)

