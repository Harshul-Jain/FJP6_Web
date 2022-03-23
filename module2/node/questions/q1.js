//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs =require('fs');
let path=require('path');

if(!fs.existsSync('new folder')){
    fs.mkdirSync('new folder');
}

let newTextFilePath = path.join(__dirname,"new folder","file.txt");
fs.writeFileSync(newTextFilePath,"new file has been made");

