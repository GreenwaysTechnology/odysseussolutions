
function Address() {
    this.city = 'coimbatore'
}

class Order {
    constructor() {
        this.orderId = 1
    }
}
//declare function 
function Employee() {
    this.id = 1
    this.address = new Address()
}
let emp = new Employee()
console.log(emp)

let order = new Order()
console.log(order)

let customer = {
    id: 1
}
console.log(customer)