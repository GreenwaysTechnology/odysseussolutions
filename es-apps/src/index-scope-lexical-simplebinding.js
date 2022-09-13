//static or lexical scope.

//a is declared inside script 
var a =10

function print_a(){
    //access inside function 
    console.log(`print_a function ${a}`);
}

function run() {
    // here a variable is declared at function level
    var a = 100;
    console.log(`run method ${a}`);
    print_a()
}
run();