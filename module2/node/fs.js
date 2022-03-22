let fs= require("fs");
console.log(fs);

let path = require('path');

let filePath=path.join(__dirname,"file.txt");
console.log(filePath);

// create a new file and add text
fs.writeFileSync(filePath,"hello I am a text file");

//override the file
fs.writeFileSync(filePath,"Again writing in existing file");

//read the file
let content = fs.readFileSync(filePath,'utf-8');
console.log(content);

//update 
fs.appendFileSync(filePath,"\n Newly added content");
console.log("After Update");
console.log(fs.readFileSync(filePath,'utf-8'));

//delete
fs.unlinkSync(filePath);

