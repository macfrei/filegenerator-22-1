const fs = require('fs');

function writeFile(name) {
  fs.writeFileSync(
    `./${name}.js`,
    `function ${name}() {

    }`
  );
}

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What is the name of your function? ', answer => {
  // Call writeFile function to create a new file with answer
  writeFile(answer);
  console.log(answer);

  rl.close();
});

// Bonus: writeFile in own file and exportieren and import
