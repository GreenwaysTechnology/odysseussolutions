

class Reactangle {
    constructor(height = 0, width = 0) {
        this.height = height
        this.width = width
    }
    //biz methods
    // calcArea() {
    //     console.log('height func',this.height)
    //     return this.height
    // }
    calcArea = () => {
        console.log('height func', this.height)
        return this.height
    }
}
// let rct = new Reactangle(10,10)
// console.log(rct.width)
// console.log(rct.height)
// console.log(rct.calcArea())
let { width, height, calcArea } = new Reactangle(10, 10)

let rect = new Reactangle(10, 10)

console.log('width', width)
console.log('height', height)
console.log('area', rect.calcArea())
console.log('area', calcArea())