class Circle {
  constructor(...arr) {
    this.radius = arr[0];
    this.color = arr[1];

    this.arr = arr.filter((i) => i != undefined);
    if (this.arr.length === 0) {
      console.log("Empty");
    } else if (this.arr.length === 1) {
      console.log(`Radius: ${this.radius}`);
    } else {
      console.log(`Radius: ${this.radius}, Color: ${this.color}`);
    }
  }
  getRadius() {
    return this.radius;
  }
  setRadius(rad) {
    return this.rad;
  }
  getColor() {
    return this.color;
  }
  setColor(col) {
    return this.col;
  }
  toString() {
    return `Radius: ${this.radius}, Color: ${this.color}`;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, this.radius);
  }
  getCircumference() {
    return 2 * this.radius;
  }
}

let myInput01 = new Circle();
let myInput02 = new Circle(5.5);
let myInput03 = new Circle(5.5, "yellow");
myInput03.setRadius(3.3);
console.log("Radius value after setRadius: " + myInput03.getRadius());
console.log("getColor: " + myInput03.getColor());
myInput03.setColor("Blue");
console.log("Color Value after setColor: " + myInput03.getColor());
console.log(myInput03.toString());
console.log("Area: " + myInput03.getArea());
console.log("Circumference: " + myInput03.getCircumference());
