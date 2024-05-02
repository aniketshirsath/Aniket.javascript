class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getInfo() {
        return `${super.getInfo()}, Year: ${this.year}`;
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo());

/*
Output: Make: Toyota, Model: Camry, Year: 2020

Explanation:
-In this code, there are two classes: Vehicle and Car. Car extends Vehicle, inheriting its properties and methods.
-Inside the Car class, the getInfo() method is overridden. However, within the overridden method, super.getInfo() is called. -This syntax is used to call the getInfo() method of the parent class (Vehicle) from within the Car class.
-So, when myCar.getInfo() is called, it invokes the overridden getInfo() method of Car, which then calls super.getInfo(),     appending the additional information provided by the Car class (Year: 2020) to the information obtained from the Vehicle 
class (Make: Toyota, Model: Camry).
*/