//Immediate-Invoked Function Expression (IIFE)
/**
 * 1.anonmous function - 
 * 2.gets invoked automatically.
 * 3.In jquery
 */

var status = (function (lib) {
    console.log('app', lib)
    return 'done'
})('jQuery')
console.log(status)