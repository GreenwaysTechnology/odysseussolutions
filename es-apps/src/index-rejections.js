//Promise Object by factory pattern

function blockMe(message) {
    console.log(message)
}
function delay() {
    return Promise.reject('something went wrong')
}

blockMe('hello')
delay()
  .catch(err=>console.log(err))
blockMe('hai')