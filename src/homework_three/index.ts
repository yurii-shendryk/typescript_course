/* eslint-disable no-console */
import { ICircle, IFigure, IRectangular, ISquare, ITriangle } from './interfaces/figure.interface';

abstract class AbstractFigure implements IFigure {
  constructor(
    readonly color: string,
    readonly name: string
  ) {}

  abstract calculateArea(): number;
}

class Circle extends AbstractFigure implements ICircle {
  readonly radius: number;

  constructor(color: string, radius: number) {
    super(color, 'Circle');
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends AbstractFigure implements IRectangular {
  constructor(
    color: string,
    readonly width: number,
    readonly height: number
  ) {
    super(color, 'Rectangle');
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  print(): void {
    console.log(`Calculated area of ${this.name} is (${this.width} x ${this.height}) = ${this.calculateArea()}`);
  }
}

class Square extends AbstractFigure implements ISquare {
  constructor(
    color: string,
    public sideLength: number
  ) {
    super(color, 'Square');
  }

  calculateArea(): number {
    return Math.pow(this.sideLength, 2);
  }

  print(): void {
    console.log(`Calculated area of ${this.name} is (${this.sideLength})^ 2 = ${this.calculateArea()}`);
  }
}

class Triangle extends AbstractFigure implements ITriangle {
  constructor(
    color: string,
    readonly base: number,
    readonly height: number
  ) {
    super(color, 'Triangle');
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}
