//class expression

let Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width
    }
}
let rect = new Rectangle(10,10)
console.log(rect)

console.log(typeof Rectangle)