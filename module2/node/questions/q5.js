//move a file

let fs = require('fs');

let path=require('path');

let srcPath = path.join(__dirname,"file1.txt");

let destPath = path.join(__dirname,"new folder","file1.txt");

//copy
fs.copyFileSync(srcPath,destPath);

//remove
fs.unlinkSync(srcPath);