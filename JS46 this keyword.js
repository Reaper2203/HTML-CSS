// this = reference to a particular object
//          the object depends on the immediate context

const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function(){
        console.log(`You drive the ${this.model}`); // this. is the reference to the object
    }                                               //${car1.model}
}
const car2 = {
    model: "Civic",
    color: "black",
    year: 2024,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}
car1.drive();      // You drive the Mustang
car2.drive();