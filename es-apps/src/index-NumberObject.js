//Numbers

let a = 100 //Number
let b = Number(20)
console.log(a, b)

console.log(Number.MAX_VALUE)

let x = 10
let y

let z = x * y;
if (Number.isNaN(z)) {
    console.log('Number is NaN')
} else {
    console.log('Number is not NaN')
}
//Number instance
//constructor pattern

let mynum = new Number(100.89434)
console.log(mynum.toFixed(2))
//literal pattern
let price = 3445.343434343
console.log(price.toFixed(2))
console.log(1212.44545.toFixed(3))