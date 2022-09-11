//callback chaining

const getUser = (resolve, reject) => {
    let user = {
        name: 'admin',
        password: 'admin'
    }
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { err: 'User not found' })
    }
}
//the out put of getUser will be input to the login
const login = (user, resolve, reject) => {
    if (user.name === 'admin' && user.password === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, { err: 'login failed' })
    }
}

//the out put login will be input to the dashboard function 
const showdashboard = (status, resolve, reject) => {
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'admin page')
    } else {
        setTimeout(reject, 1000, { err: 'user page' })
    }
}


getUser(user => {
    console.log(user)
    login(user, status => {
        console.log(status)
        showdashboard(status, page => {
            console.log(page)
        }, err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })
}, err => {
    console.log(err)
})