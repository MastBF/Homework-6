class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
        this.stomach = []
    }
    eat(...arg) {
        if(this.stomach.length === 10) return;
        this.stomach.push(...arg)
    }
    poop() {
        this.stomach = []
    }
    toString() {
        return `${this.name}, ${this.age}`
    }


}

const person = new Person('Ivan', 43)
person.eat('meet')
console.log(person.stomach)
person.poop()
console.log(person.stomach)
console.log(person.toString())

