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