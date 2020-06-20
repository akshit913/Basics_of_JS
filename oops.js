console.log('typeof String',typeof String)
console.log('typeof Boolean',typeof Boolean)
console.log('typeof Number',typeof Number)
console.log('typeof Array',typeof Array)
console.log('typeof Object',typeof Object)
console.log('typeof Function',typeof Function)
let obj = {a:2, b:'akshit'}
console.log('should be true',obj.__proto__ == Object.prototype)
console.log(Number.prototype)
String.prototype.charAt = function () {return 'x'}
let str = "akshit"
console.log(str.charAt(0))
Array.prototype.joinOriginal = Array.prototype.join
Array.prototype.join = function () {
    console.log('Join called on ',this)
    return this.joinOriginal(...arguments)
}
let l = [1,2,3,4,5]
console.log(l.join(","))