const fs = require('fs');
// import fs from 'fs'

const functionName = process.argv[2];

function writeFile(name) {
  fs.writeFileSync(
    `./${name}.js`,
    `function ${name}() {
    
    }`
  );
}

writeFile(functionName);
