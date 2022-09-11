//how to show success and reject 

function login(userName, password) {
    //constructor pattern
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 5000, 'Login success')
        } else {
            setTimeout(reject, 5000, 'Login Failed')
        }
    })
}
login('admin', 'admin')
    .then(status => console.log(status))
    .catch(err => console.log(err))

login('foo', 'foo')
    .then(status => console.log(status))
    .catch(err => console.log(err))