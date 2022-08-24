//Type conversion. - String to number
/**
 * 1.implicit
 * 2.explicit 
 *  2.1.parseFloat - 64 bit conversion,parseInt -32 bit
 *  2.2.Number 
 * 2.3.unary +
 */
//type conversion:implicit
let x = "$10"; //string 
let y = 10; //number
let c = x * y;
console.log(`C ${c}`)

//using parse 
c = parseFloat(x) * y
console.log(`C ${c}`)
//using Number 
c = Number(x) * y
console.log(`C ${c}`)
//using unary+
c = (+x) * y
console.log(`C ${c}`)
