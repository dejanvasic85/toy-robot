import { Direction, getNextDirection } from "./direction";

export default class Robot {
  boardSize: number;
  x: number;
  y: number;
  direction: Direction;

  constructor(boardSize: number = 5) {
    this.boardSize = boardSize;
    this.x = 0;
    this.y = 0;
    this.direction = Direction.NORTH;
  }

  place(x: number, y: number, direction: Direction) {
    this.direction = direction;
    if (this.isOutsideOfBoundary(y) || this.isOutsideOfBoundary(x)) {
      return;
    }
    this.x = x;
    this.y = y;
  }

  isOutsideOfBoundary(position: number) {
    return position < 0 || position > this.boardSize;
  }

  left() {
    this.direction = getNextDirection(this.direction, -1);
  }

  right() {
    this.direction = getNextDirection(this.direction, 1);
  }

  move() {
    if (this.direction === Direction.WEST && this.x > 0) {
      this.x--;
    }

    if (this.direction === Direction.EAST && this.x < this.boardSize) {
      this.x++;
    }

    if (this.direction === Direction.SOUTH && this.y > 0) {
      this.y--;
    }

    if (this.direction === Direction.NORTH && this.y < this.boardSize) {
      this.y++;
    }
  }

  getCurrentPosition() {
    return {
      x: this.x,
      y: this.y,
      direction: this.direction,
    };
  }
}
