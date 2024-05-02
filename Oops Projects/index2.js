class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

class ColoredCircle extends Circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let coloredCircle = new ColoredCircle('blue', 5);
console.log(coloredCircle.getColor());

/*
Output: "blue"
*Explanation:
-The code defines a hierarchy of classes where Shape is the base class, Circle inherits from Shape, and ColoredCircle inherits from Circle.
-When coloredCircle.getColor() is called, it looks for the getColor() method in ColoredCircle, then Circle, and finally finds it in Shape. Since ColoredCircle inherits from Circle, which in turn inherits from Shape, the getColor() method is accessible to ColoredCircle, and it returns the color set during the instantiation of ColoredCircle, which is 'blue'.
*/ 