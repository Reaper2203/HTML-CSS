// static = belongs to the class, not the objects
//          properties: useful for caches, fixed-configuration
//          methods:    useful for utility functions

class Car{

     static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW;l");

console.log(Car.numberOfCars); //total number of cars
