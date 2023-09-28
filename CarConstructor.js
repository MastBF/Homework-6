class Car {
    constructor(car, milesPerGallon) {
        this.car = car
        this.milesPerGallon = milesPerGallon
        this.tank = 0
        this.odometre = 0
    }
    fill(gallons) {
        this.tank += gallons
    }
    drive(distance) {
        if(distance / this.milesPerGallon < this.tank){
        this.tank -= distance / this.milesPerGallon
        this.odometre += distance
        }
        this.odometre += this.tank * this.milesPerGallon
        this.tank = 0
        return `I ran out of fuel at ${this.odometre} miles!`
    }

}

const car = new Car('BMW', 5)
car.fill(20)
console.log(car.tank)
console.log(car.drive(200))
console.log(car.tank)
console.log(car.odometre)
