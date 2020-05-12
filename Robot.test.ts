import Robot from "./Robot";
import { Direction } from "./direction";

describe("Robot", () => {
  let robot: Robot;

  describe("place", () => {
    const cases = [
      { x: -1, y: 6, direction: Direction.EAST },
      { x: 1, y: -1, direction: Direction.EAST },
      { x: 6, y: 1, direction: Direction.EAST },
    ];

    describe("When trying to position outside of the board in any direction", () => {
      it.each(cases)("should remain in default 0,0 position", ({x, y, direction}: { x: number, y: number, direction: Direction}) => {
        robot = new Robot();
        robot.place(x, y, direction);
        
        expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0, direction});
      });
    });
  });

  describe('left', () => {
    it('should rotate all the way around after 4 calls', () => {
      robot = new Robot();
      robot.place(0, 0, Direction.NORTH);
      robot.left(); // West
      robot.left(); // South
      robot.left(); // East
      robot.left(); // back to north
      expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0, direction: Direction.NORTH });
    });
  });

  describe('right', () => {
    it('should rotate all the way around after 4 calls', () => {
      robot = new Robot();
      robot.place(0, 0, Direction.NORTH);
      robot.right(); // East
      robot.right(); // South
      robot.right(); // West
      robot.right(); // back to north
      expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0, direction: Direction.NORTH });
    });
  });

  describe("move", () => {
    describe("When the robot is at position x:0, y:0 f:North", () => {
      beforeEach(() => {
        robot = new Robot();
        robot.place(0, 0, Direction.NORTH);
      });

      describe("and trying to move West (left)", () => {
        it("should stay in the same position", () => {
          robot.left();
          robot.move();
          expect(robot.getCurrentPosition()).toEqual({
            x: 0,
            y: 0,
            direction: Direction.WEST,
          });
        });
      });

      describe("and trying to move North", () => {
        it("should move the position y by 1", () => {
          robot.move();
          expect(robot.getCurrentPosition()).toEqual({
            x: 0,
            y: 1,
            direction: Direction.NORTH,
          });
        });
      });

      describe("and trying to move East", () => {
        it("should move the position of x by 1", () => {
          robot.right();
          robot.move();
          expect(robot.getCurrentPosition()).toEqual({
            x: 1,
            y: 0,
            direction: Direction.EAST,
          });
        });
      });

      describe("and trying to move South", () => {
        it("should remain in the same position", () => {
          robot.right();
          robot.right();
          robot.move();
          expect(robot.getCurrentPosition()).toEqual({
            x: 0,
            y: 0,
            direction: Direction.SOUTH,
          });
        });
      });
    });

    describe("When the robot is on position x:5, y:5 South", () => {
      beforeEach(() => {
        robot = new Robot();
        robot.place(5, 5, Direction.SOUTH);
      });

      describe("and trying to move north", () => {
        it("should remain in the same position", () => {
          robot.left(); // faces east
          robot.left(); // faces north
          robot.move();

          expect(robot.getCurrentPosition()).toEqual({
            x: 5,
            y: 5,
            direction: Direction.NORTH,
          });
        });
      });

      describe("and trying to move South", () => {
        it("should should move the y position by 1", () => {
          robot.move();

          expect(robot.getCurrentPosition()).toEqual({
            x: 5,
            y: 4,
            direction: Direction.SOUTH,
          });
        });
      });

      describe("and trying to move East", () => {
        it("should not move the robot out of position", () => {
          robot.left();
          robot.move();

          expect(robot.getCurrentPosition()).toEqual({
            x: 5,
            y: 5,
            direction: Direction.EAST,
          });
        });
      });

      describe("and trying to move West", () => {
        it("should move the position of x by 1", () => {
          robot.right();
          robot.move();

          expect(robot.getCurrentPosition()).toEqual({
            x: 4,
            y: 5,
            direction: Direction.WEST,
          });
        });
      });
    });
  });
});
