const fs = require("fs");

// process.argv has the command line information that was used to run this script. 
let arguments = process.argv;

let fileName = arguments[2];

console.log(fileName);

let fileContents = fs.readFileSynch("essay.text, utf-8");

fs.readFileSync("essay.txt, utf-8");