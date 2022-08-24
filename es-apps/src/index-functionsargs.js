//args and parameters 

//name is arg which is variable
function sayHello(name) {
    console.log(`name ${name}`)
}
//subramanian is parameter
sayHello('subramanian')
//undefined
sayHello()

//es 5 style of initalizing default values
// function mulitply(a, b) {
//     let c = (a || 0) * (b || 0)
//     console.log(c)
// }
//default args - es 6 feature
function mulitply(a = 0, b = 0) {
    let c = a * b
    console.log(c)
}
mulitply(10, 10)
mulitply()
mulitply(undefined, 90)
mulitply(98, undefined)

//var args:es 5
// function log() {
//     console.log(arguments)
// }

//var args:es 6 rest operator ... 
function log(name,...args) {
    console.log(name,args)
}

log('subu','hello', 'hai', 'welcome')
log('ram','hello', 'hai')
log('karthik','hello')