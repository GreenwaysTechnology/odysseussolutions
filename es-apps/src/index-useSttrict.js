"use strict"

function fun1() {
    console.log('fun1')
    function fun2() {
        console.log('fun 2')
        return this;
    }
    console.log(fun2())
    return this;
}
console.log(fun1())