//this  - implicit pointer, which is declared by js runtime and initalized to current instance memory location
//super  -  implicit pointer which is delclared by js runtime and initalized to parent instance memory location

class Person {
    constructor(firstName = '', lastName = '') {
        this.firstName = firstName
        this.lastName = lastName
    }
}
Person.prototype.name = function () {
    return `${this.firstName} ${this.lastName}`
}
class Employee extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName)
        this.id = id
    }
}
let emp = new Employee(10, 'Subramanian', 'Murugan')
console.log(emp.name())

class Customer extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName)
        this.id = id
    }
}
let customer = new Customer(140, 'Subramanian', 'Shirisha')
console.log(customer.name())