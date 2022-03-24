//Q. copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require('fs');
let path = require('path');

let sourcePath = path.join(__dirname,"..","..","..","module1","index.html");

let folderPath =path.join(__dirname,"..","..","html");

if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath);
}
let destinationPath =path.join(__dirname,"..","..","html","index.html");

// console.log(sourcePath);
// console.log(destinationPath);

 fs.copyFileSync(sourcePath,destinationPath);