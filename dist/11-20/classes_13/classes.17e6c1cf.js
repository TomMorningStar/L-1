// Задача на классы и наследование: создайте базовый класс Shape (фигура),
//  который имеет методы для расчета площади и периметра.
//   Затем создайте подклассы, представляющие различные фигуры,
//    такие как прямоугольник, круг и треугольник.
//     Реализуйте методы расчета площади и периметра для каждой фигуры.
class Shape {
    constructor(name){
        this.name = name;
    }
    getArea() {}
    getPerimeter() {}
}
class Circle extends Shape {
    constructor(name, radius){
        super(name);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2; // ** - возведение в степень
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius; // Math.PI - число пи
    }
}
class Rectangle extends Shape {
    constructor(name, width, height){
        super(name);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Triangle extends Shape {
    constructor(name, sideA, sideB, sideC){
        super(name);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    getArea() {
        const p = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    }
    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
}
const circle = new Circle("Круг", 10);
console.log(circle.getArea()); // 314.1592653589793
console.log(circle.getPerimeter()); // 62.83185307179586
const rectangle = new Rectangle("Прямоугольник", 10, 20);
console.log(rectangle.getArea()); // 200
console.log(rectangle.getPerimeter()); // 60
const triangle = new Triangle("Треугольник", 3, 4, 5);
console.log(triangle.getArea()); // 6
console.log(triangle.getPerimeter()); // 12

//# sourceMappingURL=classes.17e6c1cf.js.map
