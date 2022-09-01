//has -a 

class Address {
    constructor(city = '', state = '', zipcode = '') {
        this.city = city
        this.state = state
        this.zipcode = zipcode
    }
}

class Employee {
    constructor(id = 0, name = '', address = new Address()) {
        this.id = id
        this.name = name
        //has-a
        this.address = address
    }
}
let emp = new Employee()
console.log(emp)

emp = new Employee(12, 'subramanian', new Address('coimbatore', 'TN', '00000'))
console.log(emp)

//has -a in literals

let customer = {
    id: 1,
    name: 'John',
    //has-a
    address: {
        city: 'coimbatore',
        state: 'TN'
    }
}

console.log(customer)


