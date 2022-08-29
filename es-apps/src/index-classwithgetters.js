//gridTemplateRows: 


class Reactangle {
    constructor(height = 0, width = 0) {
        this.height = height
        this.width = width
    }
    //getter property
    get area(){
        return this.calcArea()
    }

    //biz methods
    calcArea(){
        return this.height * this.width
    }
}
let rct = new Reactangle(10,10)
// console.log(rct.calcArea())
console.log(rct.area)