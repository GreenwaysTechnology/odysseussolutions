//literal objects 
/**
 *   object defintion(properties and its value) are enclosed with {}
 * 
 *  syntax:
 * let variable=  {
 *    key:value, 
 *    key:value
 *  }
 * key is variable
 * value is literal
 * literal can be any thing - nu/str/bool/unde,null,function,object,NaN
 * type of literal is based on type of value
 * 
 * what is type of key?
 *   the type of key always "string".
 * type of key not need to explicity declared with "",''
 * Can i declare with  in double quotes/single qutoes 
 *    Yes
 */

let emp = {
    id: 1,
    name: 'Subramanian',
    status: true
}
console.log(emp)
//keys are strings-valid
let user = {
    "id": 1,
    "name": 'Subramanian',
    "status": true,
    'city': 'Coimbatore'
}
console.log(user)

//how to introduce functions inside literal object : methods

let component = {
    init: function () {
        return 'init'
    }
}
console.log(component.init())

//arrow function
component = {
    init: () => 'init'
}
console.log(component.init())

//e6 class method syntax
component = {
    init() {
        return 'init'
    },
    destroy() {
        return 'destroy'
    },
    fetch() {
        return 'fetch'
    }
}
console.log(component.init(),component.destroy(),component.fetch())





