//how to show success and reject 

function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login success')
    } else {
        return Promise.reject('Login failed')
    }
}
login('admin', 'admin')
    .then(status => console.log(status))
    .catch(err => console.log(err))

login('foo', 'foo')
    .then(status => console.log(status))
    .catch(err => console.log(err))