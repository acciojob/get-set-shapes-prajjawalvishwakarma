//complete this code
class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width(): number {
    return this._width;
  }

  // Getter for height
  get height(): number {
    return this._height;
  }

  // Method to calculate area
  getArea(): number {
    return this._width * this._height;
  }
}

// Square Class (inherits from Rectangle)
class Square extends Rectangle {
  constructor(side: number) {
    super(side, side); // Call parent constructor with equal width and height
  }

  // Method to calculate perimeter
  getPerimeter(): number {
    return 4 * this.width; // side = width
  }
}

// Example usage:
const rect = new Rectangle(10, 5);
console.log("Rectangle Width:", rect.width);
console.log("Rectangle Height:", rect.height);
console.log("Rectangle Area:", rect.getArea());

const sq = new Square(7);
console.log("\nSquare Side:", sq.width); // same as height
console.log("Square Area:", sq.getArea()); // inherited method
console.log("Square Perimeter:", sq.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
