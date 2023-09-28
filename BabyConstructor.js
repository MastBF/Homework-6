class Person {
    constructor(name, age, favoriteToy) {
        this.name = name
        this.age = age
        this.favoriteToy = favoriteToy
    }
}

class Baby extends Person {
    constructor(name,age,favoriteToy) {
        super(name,age,favoriteToy)
    }
    play() {
       return`Playing with ${this.favoriteToy}` 
    }
}
const person = new Person('Narek', 2, 'soldier') 
const baby = new Baby('Narek', 2, 'soldier')
console.log(baby.name)
console.log(baby.play())