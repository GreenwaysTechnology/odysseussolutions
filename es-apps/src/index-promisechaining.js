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

//callback hell code 
// getUser(user => {
//     console.log(user)
//     login(user, status => {
//         console.log(status)
//         showdashboard(status, page => {
//             console.log(page)
//         }, err => {
//             console.log(err)
//         })
//     }, err => {
//         console.log(err)
//     })
// }, err => {
//     console.log(err)
// })

//promise chaining
// getUser()
//     .then(user => {
//         login(user).then(status => {
//             showdashboard(status)
//                 .then(page => console.log(page)).catch(err => {
//                     console.log(err)
//                 })
//         }).catch(err => {
//             console.log(err)
//         });
//     })
//     .catch(err => {
//         console.log(err)
// })
//syntax simplification
// getUser()
//     .then(user => {
//         return login(user)
//     })
//     .then(status => {
//         return showdashboard(status)
//     })
//     .then(page => {
//         console.log(page)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// getUser()
//     .then(user => login(user))
//     .then(status => showdashboard(status))
//     .then(page => console.log(page))
//     .catch(err => console.log(err))

//using destrusturing syntax
//if there is single arg and passed into the function : we can remove args 
//method reference syntax 
const { log } = console;
getUser()
    .then(login)
    .then(showdashboard)
    .then(log)
    .catch(log)