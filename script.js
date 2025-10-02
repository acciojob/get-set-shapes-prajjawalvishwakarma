//complete this code
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() { return this._width; }
  set width(value) { this._width = value; }

  get height() { return this._height; }
  set height(value) { this._height = value; }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width;
  }
}
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
