
//variable types: instance variables,static variables
//instance variables are accessed with help of "reference" where as static variables are accessed with "className.variableName"


class Message {
    static WARNING = 'Warning'
    static ERROR = 'error'
    static SUCCESS = 'success'
   
}
console.log(Message.WARNING)

class Factory {
    //static methods 
    static getInstance(){
        return new Factory();
    }    
}
let factory = Factory.getInstance()
console.log(factory)