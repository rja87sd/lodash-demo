"use strict";

// const _ = require("lodash");

// const exampleArray = [1, [2, [3, [4, 2, [9]], 5]], 5, [6]];

// const flatArray = _.flattenDeep(exampleArray);
// console.log(flatArray);

import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "color",
    message: "What is your favorite color?",
  },
  {
    type: "list",
    name: "foods",
    message: "Which of these is your favorite?",
    choices: ["Apple", "Banana", "Pizza"],
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(
    `Hello, ${answers.username}. You favorite color is ${answers.color}. Your favorite food choice was ${answers.foods}.`
  );
});
