function onClick(response) {
    console.log(response,this.name)
}
const MyButton = {
    name: 'My Button'
}
const myListener = onClick.bind(MyButton)
//trigger this function later on 
// setTimeout(()=>myListener('Hello'),5000)
setTimeout(myListener,5000,'Hello')
