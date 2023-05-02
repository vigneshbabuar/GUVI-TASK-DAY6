class Calculator {
  add(x, y) {
    this.x = x;
    this.y = y;
    return this.x + this.y;
  }

  sub(x, y) {
    this.x = x;
    this.y = y;
    return this.x - this.y;
  }

  mul(x, y) {
    this.x = x;
    this.y = y;
    return this.x * this.y;
  }

  div(x, y) {
    this.x = x;
    this.y = y;
    return this.x / this.y;
  }
}

let myCalculation = new Calculator();
console.log(myCalculation.add(10, 20));
console.log(myCalculation.sub(60, 10));
console.log(myCalculation.mul(10, 10));
console.log(myCalculation.div(30, 5));
