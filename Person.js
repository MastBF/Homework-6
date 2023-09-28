class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    compareAge(user){
        if(user.age === this.age) return `${user.name} is the same age as me`
        if(user.age > this.age) return `${user.name} is older than me`
        if(user.age < this.age) return `${user.name} is younger than me`
    }
}

const p1 = new Person("Samuel", 24)
const p2 = new Person("Joel", 36)
const p3 = new Person("Lily", 24)
console.log(p1.compareAge(p2))
console.log(p2.compareAge(p1))
console.log(p1.compareAge(p3))
