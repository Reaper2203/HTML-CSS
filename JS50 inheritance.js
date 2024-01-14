// inheritance = a child class can inherit all the 
//                methods and properties from another class

class Animal{       //parent class //they are all alive, sleeping, and eating
    alive = true;

    eat(){
        console.log(`${this.name} is eating.`);
     }
     sleep(){
        console.log(`${this.name} is sleeping`);
     }
}
class Rabbit extends Animal{    //child classes are rabbit, fish, and hawk //they inherits from the parent class
     name = "rabbit";

     run(){
        console.log(`${this.name} is running`);
     }
}
class Fish extends Animal{
    name = "fish";

    swim(){
       console.log(`${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hawk";

    fly(){
       console.log(`${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();