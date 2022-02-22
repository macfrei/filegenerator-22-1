const writeFile = require('./writeFile');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'functionName',
      message: 'What the name of the function?',
    },
    {
      type: 'checkbox',
      name: 'fileTypes',
      message: 'Which file types should be created?',
      choices: ['Component', 'Spec', 'Stories'],
      validate: answer => {
        if (answer.length < 1) {
          return 'You must select at least one type!';
        }
        return true;
      },
    },
  ])
  .then(answers => {
    console.log(answers);
    writeFile(answers.functionName);
  });
