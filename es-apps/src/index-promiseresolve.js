//Promise Object by factory pattern

function blockMe(message) {
    console.log(message)
}
function delay() {
    return Promise.resolve('Success')
}

blockMe('hello')
delay()
  .then(response => console.log(response))
blockMe('hai')