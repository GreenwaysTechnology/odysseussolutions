//state initalization
/**
 * 1.inside function/class - hardcoded pattern
 * 2.after object creation 
 * 3.during objection  - constructor parameters
 */

function Employee() {
    this.id = 1 // hardcoded state 
}

let emp = new Employee()
console.log(emp)
//after object creation: 
emp.id = 90;
console.log(emp)


class Customer {
    id = 1 // hardcoded state
}
let customer = new Customer()
console.log(customer)
customer.id =900
console.log(customer)
