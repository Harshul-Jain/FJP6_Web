let fs= require("fs");
//console.log(fs);

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


//create a directory

//mkdir:- if directory does not exist then it will create directory otherwise it shoes error.
if(!fs.existsSync("hamariDirectory")){
    fs.mkdirSync("hamariDirectory")
}

//Read directory

let folderPath =__dirname;

let contentofFolder =fs.readdirSync(folderPath);
console.log(contentofFolder);

// Delete a directory
//it works only on empty directories otherwise gives error 

fs.rmdirSync('hamariDirectory');

//Copy a file

let sourcePath = path.join(__dirname,"file.txt");
let destinationPath = path.join(__dirname,"module","file.txt");
console.log(sourcePath)
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);




