export enum Direction {
  NORTH = "North",
  SOUTH = "South",
  EAST = "East",
  WEST = "West",
}

export const DirectionMap = [
  Direction.NORTH,
  Direction.EAST,
  Direction.SOUTH,
  Direction.WEST,
];

export const getNextDirection = (
  currentDirection: Direction,
  nextPosition: number
) => {
  const currentIdx = DirectionMap.indexOf(currentDirection);
  let newPositionIdx = currentIdx + nextPosition;
  if (newPositionIdx < 0) {
    newPositionIdx = 3;
  }

  if (newPositionIdx > 3) {
    newPositionIdx = 0;
  }

  return DirectionMap[newPositionIdx];
};
