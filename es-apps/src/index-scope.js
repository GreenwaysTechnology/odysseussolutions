
var a = 10;
function fun1() {
    console.log(`fun1 ${a}`);
    function fun2(){
        var a = 8;
        console.log(`fun2 ${a}`);
        function fun3() {
            // var a = 8;
            console.log(`fun3 ${a}`);

        }
        fun3()
    }
    fun2()
}
fun1()

