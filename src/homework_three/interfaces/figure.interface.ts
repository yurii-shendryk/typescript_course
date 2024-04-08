interface IFigureArea {
  calculateArea(): number;
  print(): void;
}

export interface IFigure extends Pick<IFigureArea, 'calculateArea'> {
  readonly color: string;
  readonly name: string;
}

export interface ICircle {
  readonly radius: number;
}

export interface IRectangular extends Pick<IFigureArea, 'print'> {
  readonly width: number;
  readonly height: number;
}

export interface ISquare {
  readonly sideLength: number;
}

export interface ITriangle {
  readonly base: number;
  readonly height: number;
}
