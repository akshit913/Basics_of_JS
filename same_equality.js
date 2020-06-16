console.log(1=='1')
console.log(1==='1')




// peculiar cases
console.log(0 == '')
console.log('false' == false)//Number('false') is NaN and false is 0 which are not equal
console.log([1,2] == [1,2])
// Prototype based inheritance 
let obj1 = {
    a:1,
    b:2
};
let obj2 = Object.create(obj1)
console.log(obj1==obj2)
console.log(obj2.__proto__==obj1)
obj2.p = 'akshit'
obj2.q = 'mehta'
obj2.r = 'meh'
let obj3 = Object.create(obj2)
console.log(obj3.__proto__.__proto__ == obj1)
/*
obj2.a->try to  find a in obj2
if not found
try to find it in obj2.__proto__
try to find it in obj2.__proto__.__proto__
this chain goes on
*/
