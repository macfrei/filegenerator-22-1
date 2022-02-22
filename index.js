const writeFile = require('./writeFile');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'functionName',
      message: 'What the name of the function?',
    },
  ])
  .then(answers => {
    writeFile(answers.functionName);
  });
