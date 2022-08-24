// or operator -> based on boolean table 

let a = true
let b = false
let c = a || b 
console.log(`C ${c}`)


//let firstName = 'Subramanian'
let firstName = ''
/**
 *  if first operand is truthy , the result is first operand itself else second
 */
let result = firstName || "Greet"

console.log(result)

let namespace;

let res = namespace || {}
console.log(res)