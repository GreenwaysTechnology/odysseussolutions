//callback chaining
const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin',
            password: 'admin'
        }
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, { err: 'User not found' })
        }
    })
}
//the out put of getUser will be input to the login
const login = user => {
    console.log('login is called')

    return new Promise((resolve, reject) => {
        if (user.name === 'admin' && user.password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, { err: 'login failed' })
        }
    })
}

//the out put login will be input to the dashboard function 
const showdashboard = status => {
    console.log('showDashBoard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'admin page')
        } else {
            setTimeout(reject, 1000, { err: 'user page' })
        }
    })
}

// const { log } = console;
// getUser()
//     .then(login)
//     .then(showdashboard)
//     .then(log)
//     .catch(log)

async function main() {
    try {
        const user = await getUser();
        const status = await login(user)
        const page = await showdashboard(status)
        console.log(page)
    }
    catch (err) {
        console.log(err)
    }
}
main()