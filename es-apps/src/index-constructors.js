//state init using constructors

function Employee(id = 0) {
    this.id = id // hardcoded state 
}

//Employee() - this is constructor call
let emp = new Employee(1) //constructor parameters
console.log(emp)


class Customer {
    //id// hardcoded state
    constructor(id = 0, name = '', city = '') {
        this.id = id
        this.name = name
        this.city = city
    }
}
//Customer() is constructor call
let customer = new Customer()
console.log(customer)
