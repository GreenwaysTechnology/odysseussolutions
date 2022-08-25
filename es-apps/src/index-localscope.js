//
function counter(b = 90) {
    let a = 10;
    console.log('counter')
    //function body  - variables,functions 
    //inner function 
    function inc() {
        console.log('inc')
    }
    inc()
    let dec = function () {
        console.log('dec')
    }
    dec()

}
counter()
//inc()
//console.log(a)
//console.log(b)