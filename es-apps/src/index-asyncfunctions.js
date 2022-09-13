//async function 

async function getValue(){
    return 10 //Promise.resolve(10)
}
//console.log(getValue())
getValue().then(res=>console.log(res))