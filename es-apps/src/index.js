
//pattern
// constructor pattern
//new Array()
//literal pattern
// []

let list = new Array(1, 2);
console.log(list)
let mylist = [1, 2, 34, 578]
console.log(mylist)

const doubleIt = item => item * 2
mylist.map(doubleIt).forEach(item => console.log(item))