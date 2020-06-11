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

console.log(area(3,4))
console.log(area(4)) //the widht parameter goes undefined.  so output Nan
function createGreeter (greeting) {
    function greet(name) {
        console.log(greeting,name);
    }
    return greet;
}

let g1 = createGreeter('hey')
console.log(g1('akshit'))