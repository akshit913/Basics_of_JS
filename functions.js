function alpha () {
    return "A"
}

function beta() {
    return "B"
}

function area (height,width) {
    if (!width) {
        return Math.PI * height * height
    }
    return height*width
}
function getName() {
    return document.getElementById('nameBox').value
}
console.log(area(3,4))
console.log(area(4)) //the width parameter goes undefined.  so output Nan
function createGreeter (greeting) {
    function greet(name) {
        console.log(greeting,name);
    }
    return greet;
}
let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Evening')
console.log(g1('akshit'))

class FruitClass {
    constructor(taste,color) {
        this.color = color;
        this.taste = taste;
    }
}

var f = new FruitClass("kiwi","sour");
console.log("f is",f);
let mainstr = "hi this is akshit mehta"
let small= mainstr.slice(1,6);
console.log(small)
let subs = mainstr.substring(1,6)
console.log(subs)
let smalln= mainstr.slice(-3,-1)
console.log(smalln)