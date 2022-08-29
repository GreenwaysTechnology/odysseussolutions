//es 6 classes 

class Employee {
    //state : instance variables
    id = 1
    name = 'Subramanian'
    //behaviour:methods
    calculate() {
        return 100
    }
}
//object creation syntax
let emp = new Employee()
console.log(`id ${emp.id} ${emp.name} ${emp.calculate()}`)