import * as chalk from "chalk";

export const success = (message: String) => {
  console.log(chalk.bgGreenBright.white.bold(` ${message} `));
};
export const info = (message: String) => {
  console.log(chalk.bgBlueBright.white.bold(` ${message} `));
};
export const error = (message: String) => {
  console.log(chalk.bgRedBright.white.bold(` ${message} `));
};
export const warning = (message: String) => {
  console.log(chalk.bgYellowBright.black.bold(` ${message} `));
};
