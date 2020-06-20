class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    isAdult () {
        return this.age >= 18
    }
}
let p = new Person('John Doe', 22)
let p2 = new Person('Jane Doe', 15)
console.log(typeof Person)
console.log(p.__proto__ == Person.prototype)
console.log(p.isAdult())

class Student extends Person {
    constructor(name,age,grade) {
        super(name, age)
        this.grade = grade
    }
}

let s1 = new Student ('harry', 13 , 5)
console.log('student is ', s1.isAdult())