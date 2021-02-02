// create car class
class Car {
    constructor(name) {
        this.carName = name;
    }
    // present method 
    present() {
        return 'I have a ' + this.carName + ' car.';
    }
}

// create child class for Car
class Model extends Car {
    constructor(name, brand) {
        super(name);// refer parent class
        this.carBrand = brand;
    }
    // create show method for showing result 
    show() {
        return `${this.present()} The ${this.carName} car brand name is ${this.carBrand}.`;
    }

}

// create object for model class 
const myCar = new Model('Avalon', 'Toyota');

console.log(myCar.show());

// class getter and setter
class Fruit {
    constructor(brand) {
      this.fruit = brand;
    }
    //get name
    get name() {
      return this.fruit;
    }
    //set name
    set name(x) {
      this.fruit = x;
    }
  }
  
  let myFruit = new Fruit("Banana");
  myFruit.name = 'Mango';// set name
 console.log(myFruit); //myFruit object