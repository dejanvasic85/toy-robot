import inquirer from "inquirer";

import Robot from "./Robot";
import { DirectionMap } from "./direction";

const robot = new Robot();

const place = () => {
  return inquirer
    .prompt([
      {
        name: "face",
        message: "Face: ",
        type: "list",
        choices: DirectionMap,
      },
      {
        name: "x",
        message: "X:",
        default: 0,
        type: "number",
      },
      {
        name: "y",
        message: "Y:",
        default: 0,
        type: "number",
      },
    ])
    .then((position: any) => {
      const { x, y, face } = position;
      robot.place(x, y, face);
      return;
    });
};

const start = () => {
  inquirer
    .prompt([
      {
        name: "command",
        message: "Command - Choose what you want to do next: ",
        type: "list",
        choices: ["place", "move", "left", "right", "report", "exit"],
      },
    ])
    .then(({ command }: any) => {
      if (command === "exit") {
        process.exit(0);
      }

      if (command === "left") {
        robot.left();
      }

      if (command === "right") {
        robot.right();
      }

      if (command === "move") {
        robot.move();
      }

      if (command === "report") {
        const { x, y, direction } = robot.getCurrentPosition();
        console.log(`REPORTING POSITION. X: ${x}, Y: ${y}, F: ${direction}`);
      }

      if (command === "place") {
        place().then(() => {
          console.log("robot placed successfully");
          start();
        });
      } else {
        start();
      }
    });
};

start();
