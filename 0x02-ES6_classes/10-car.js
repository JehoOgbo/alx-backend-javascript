export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    // returns a new object of the class
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
