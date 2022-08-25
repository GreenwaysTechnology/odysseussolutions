//higher order func: function as parameter.

const fetch = function (success, failure) {
    if (typeof success === 'function' && typeof failure === 'function') {
        let status = true
        if (status) {
            success('This is success response')
        } else {
            failure('This is error response')
        }
    } else {
        console.log('invalid type')
    }
}

fetch(function (response) {
    console.log(response)
}, function (err) {
    console.log(err)
})
fetch(100, 'afdfdffa')
