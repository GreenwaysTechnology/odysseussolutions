//non blocking using timer.

function blockMe(message) {
    console.log(message)
}
function connect(callback) {
    //js non blocking api : setTimeout 
    // callback()
    setTimeout(callback, 5000, 'delayed response')
}
blockMe('hello')
connect(function (response) {
    console.log('connect',response)
})
blockMe('hai')