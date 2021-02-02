// create a class with name Car
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    // add age method for calculate age of car
    age() {
        const days = new Date();
        const year = days.getFullYear();
        return year - this.year;
    }
}

// create  object for class 
const myCar1 = new Car('Tata', 2018);
const myCar2 = new Car('TVS', 2019);

console.log(myCar1.age(), myCar2.age());
