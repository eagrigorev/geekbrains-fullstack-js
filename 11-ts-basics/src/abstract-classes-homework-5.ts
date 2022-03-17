interface Coordinates {
  topLeft?: {
    x: number,
    y: number
  },
  bottomRight?: {
    x: number,
    y: number
  },
  center?: {
    x: number,
    y: number
  }
}

abstract class MyGraphicsPrimitive2D implements Coordinates {
  topLeft: {
    x: number,
    y: number
  };
  bottomRight: {
    x: number,
    y: number
  };

  constructor(
    topLeftX: number,
    topLeftY: number,
    bottomRightX: number,
    bottomRightY: number
  ) {
    this.topLeft.x = topLeftX;
    this.topLeft.y = topLeftY;
    this.bottomRight.x = bottomRightX;
    this.bottomRight.y = bottomRightY;
  }

  shiftCrd(amount: number, direction: 'top' | 'bottom' | 'left' | 'right'): void {
    switch (direction) {
    case 'top':
      this.topLeft.y += amount;
      this.bottomRight.y += amount;
      break;
    case 'bottom':
      this.topLeft.y -= amount;
      this.bottomRight.y -= amount;
      break;
    case 'left':
      this.topLeft.x -= amount;
      this.bottomRight.x -= amount;
      break;
    case 'right':
    default:
      this.topLeft.x += amount;
      this.bottomRight.x += amount;
      break;
    }
  }
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  constructor(
    topLeftX: number,
    topLeftY: number,
    bottomRightX: number,
    bottomRightY: number
  ) {
    super(topLeftX, topLeftY, bottomRightX, bottomRightY);
  }

  abstract calcArea(): number;
}

class MyCircle extends MyAreaPrimitive2D implements Coordinates {
  center: {
    x: number,
    y: number
  };
  radius: number;

  constructor(
    topLeftX: number,
    topLeftY: number,
    bottomRightX: number,
    bottomRightY: number,
  ) {
    super(topLeftX, topLeftY, bottomRightX, bottomRightY);
    this.center.x = (this.topLeft.x + this.bottomRight.x) / 2; // Центр области = центр круга
    this.center.y = (this.topLeft.y + this.bottomRight.y) / 2;
    this.radius = this._calcRadius();
  }

  // Радиус всегда определяется как половина меньшей стороны области. Таким образом круг будет всегда вписан в область и не будет вылезать за её границы
  private _calcRadius(): number {
    const xLength = this.bottomRight.x - this.topLeft.x; 
    const yLength = this.topLeft.y - this.bottomRight.y;
    return (xLength >= yLength ? yLength / 2 : xLength / 2);
  }

  calcArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class MyRectangle extends MyAreaPrimitive2D {
  constructor(
    topLeftX: number,
    topLeftY: number,
    bottomRightX: number,
    bottomRightY: number
  ) {
    super(topLeftX, topLeftY, bottomRightX, bottomRightY);
  }

  calcHeight(): number {
    return this.topLeft.y - this.bottomRight.y;
  }

  calcWidth(): number {
    return this.bottomRight.x - this.topLeft.x;
  }

  calcArea(): number {
    return this.calcHeight() * this.calcWidth();
  }
}