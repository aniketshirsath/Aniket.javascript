class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Buddy');
dog.speak();

/*
OUTPUT    
Buddy barks.

Explanation:
In JavaScript, class inheritance allows a subclass (or child class) to inherit properties and methods from a superclass (or parent class). 
The Animal class is defined with a constructor that takes a name parameter and a speak method that logs a generic noise.
The Dog class extends the Animal class using the extends keyword. This means that Dog inherits the name property and speak method from Animal.
However, the speak method in the Dog class is overridden. This means that when you call speak on an instance of Dog, it will execute the speak method defined in the Dog class rather than the one in the Animal class. 
*/