// constructor = a special method of a class,
//                 which is called when an object is created from the class.
//                 accepts arguments  and assigns properties

class Student{

    constructor(name, age, gpa){    //properties
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){    //method
        console.log(`${this.name} is studying.`);
    }
}
const student1 = new Student("Spongebob", 30, 3.2);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();   // calling the method on the object (instance)