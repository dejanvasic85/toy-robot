# Toy Robot

This is a very basic CLI application that allows a user to control a position of a robot on a board. It will prompt for the next move every time the initial one is completed.


## Running the application

Run:

```bash
npm install
npm start
```

You will be prompted for the command to execute:
 
 - Place: this will be followed by another prompt about positioning
 - Move: Moves the robot in the direction it is facing
 - Left: Turns left from the current position
 - Right: Rurns right from the current position
 - Report: Prints the current position
 - Exit: bye bye


## Tests

Jest is used to test out the basic parts of the robot. 

Run: 

```bash
npm install
npm test
```