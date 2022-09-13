function login(userName, password) {
    //constructor pattern
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 100, 'Login success')
        } else {
            setTimeout(reject, 100, 'Login Failed')
        }
    })
}

async function main() {
    // login('admin', 'admin')
    // .then(status => console.log(status))
    // .catch(err => console.log(err))
    try {
        const status = await login('admin', 'admin')
        console.log(status)
    }
    catch (err) {
        console.log(err)
    }
}
main();