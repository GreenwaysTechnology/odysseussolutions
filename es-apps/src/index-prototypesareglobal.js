
class Employee {
    constructor() {
        this.id = 1;
    }
}

//add/Augment property in the Prototype Object 
Employee.prototype.name = 'Subramanian'
//Add property in the Object 
Object.prototype.grade = 'Senior Manager'

let emp = new Employee()
//update the property
emp.id = 900;
emp.name ='Ram'

console.log(emp)
console.log(emp.id)
console.log(emp.name)
console.log(emp.grade)

let emp1 = new Employee()

console.log(emp1)
console.log(emp1.name)

let emp2 = new Employee()

console.log(emp2)
console.log(emp2.name)


class Message {
    static warning='warning'
}
let msg = new Message()
console.log(msg)
console.log(msg.warning)
console.log(Message.warning)