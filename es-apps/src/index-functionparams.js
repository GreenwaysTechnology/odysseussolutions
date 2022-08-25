//function with returns

function add(a = 0, b = 0) {
    return a + b;
}
console.log(add())
console.log(add(90, 10))

function login(userName, password) {
    if (userName === 'admin' && password == 'admin') {
        return true
    }
    return; // undefined
}
let res = login('admin', 'admin') ? 'LoginSuccess' : 'LoginFailed'
console.log(res)

res = login('admin', 'ddd') ? 'LoginSuccess' : 'LoginFailed'
console.log(res)