import readline from "readline";
// For colorful output in console
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Getting user input for starting and ending number
rl.question("Enter starting number:", (start) => {
  rl.question("Enter ending number:", (end) => {
    const startNum = parseInt(start);
    const endNum = parseInt(end);
    // Validation and error handling
    if (isNaN(startNum) || isNaN(endNum)) {
      console.log("Please enter valid numbers.");
    } else if (startNum > endNum) {
      console.log("Starting number should be less than ending number.");
    } else {
      // Fizz Buzz Logic Loop
      for (let i = startNum; i <= endNum; i++) {
        // FizzBuzz condition
        // First checking FizzBuzz condition. If I would check for Fizz and Buzz first, it would print Fizz and Buzz instead of FizzBuzz.
        if (i % 3 === 0 && i % 5 === 0) {
          console.log(chalk.magenta("FizzBuzz"));
        }
        // Buzz condition
        else if (i % 5 === 0) {
          console.log(chalk.blue("Buzz"));
        }
        // Fizz condition
        else if (i % 3 === 0) {
          console.log(chalk.red("Fizz"));
        } else {
          console.log(chalk.green(i));
        }
      }
    }
    rl.close();
  });
});
