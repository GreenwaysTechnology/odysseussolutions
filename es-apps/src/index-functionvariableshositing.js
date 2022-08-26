//hositing inside function code 

/**any variables declared inside function also will be hosited inside function : function hositing */
function add() {
    console.log(a)
    var a = 10;
    var b = 20;
    var c = a + b
    console.log(a)
}
add()