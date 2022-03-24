//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

let fileType ={
    ".mp3": "Audio File",
    ".mp4": "Video File",
    ".jpeg": "Image File",
    ".xlsx":"Excel File",
    ".pdf" : "PDF File",
    ".doc" : "Document File",
    ".zip" : "ZIP File",
    ".jpg": "Image File"
}

let fs = require('fs');
let path = require('path');

let filePath = path.join(__dirname,"..","unorganised");
let fileArr = fs.readdirSync(filePath);

for(let i=0;i<fileArr.length;i++){
    let file = fileArr[i];
    let ext = path.extname(file);
    if(fileType[ext] != undefined){
        console.log(fileType[ext]);
    }
    else
        console.log("Other File");
}