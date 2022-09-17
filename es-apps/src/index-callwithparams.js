
function sayHello(name,message){
    console.log(this,name,message)
}
let greetings = {
    name:'greetings'
}
sayHello.call(greetings,'subramanian','hello')

let hai = {
    name:'ha'
}
sayHello.call(hai,'subramanian','hai')