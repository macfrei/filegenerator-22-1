console.log('Hello World!');
const fs = require('fs');
// import fs from 'fs'

const functionName = process.argv[2];

console.log(`function ${functionName}() {

}`);

fs.writeFileSync('./math.js', '1+2=3');
