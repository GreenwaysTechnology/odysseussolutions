//functions 
/**
 * 
 * functions having logic starts verb or verb+Noun
 *   eg add, addNumbers(),calculateInterest
 * functions are treated as class like java and c++, functions names must be noun
 *  eg: Employee,CreditCard,OrderService
 *    
 */

function add() {
    return 10 + 10
}
console.log(add())

function Employee() {
    //state : instance variables
    this.id = 1
    this.name = 'Subramanian'
    //behaviour:methods
    this.calculate = function () {
        return 100
    }
}
//new is keyword,
//Employee()-function call/constructor call
//emp is just variable, holding the memory address of object
//emp is reference variable
let emp = new Employee()

//how to access object properties(state,behaviour)
//. operator or [] operator
console.log(`Id ${emp.id}`)
console.log(`Name : ${emp.name}`)
console.log(`Calculate : ${emp.calculate()}`)

console.log(`Id ${emp['id']}`)
console.log(`Name : ${emp['name']}`)
console.log(`Calculate : ${emp.calculate()}`)




