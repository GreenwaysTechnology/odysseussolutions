//How to add methods in the prototype

class List {
    constructor() {
        this.items = []
    }
}
//add Methods in the List 
List.prototype.add = function (item) {
    this.items.push(item)
}

//List instance
let list = new List()
list.add(10)
list.add(20)

console.log(list)

let newList = new List()
newList.add(1990)
newList.add(28880)

console.log(newList)

////////////////////


let myArray = new Array()
myArray.push(10)
myArray.push(20)

let mynewArray = new Array()
mynewArray.push(100)
///
function Employee() {
    this.id = 10
}
let emp = new Employee()
emp.name = 'Subramanian'
console.log(emp.id)
console.log(emp.name)

//Can i augment Built in Array Object?
//Yes

Array.prototype.extract = function () {
    return 'extract'
}

let arr = new Array()
console.log(arr)
//add our own method inside array 
//  arr.extract = function(){
//     return 'extract'
//  }

console.log(arr.extract())

let myarr = new Array()
console.log(myarr.extract())


































