// read content of unorganised folder and make  an array which has extension name of each file

let fs= require('fs');
let path = require('path');

let unorganisedPath = path.join(__dirname,"..","unorganised");
let arr = fs.readdirSync(unorganisedPath);

let extArr=[];
for(let i =0 ;i<arr.length;i++){
    let filePath = arr[i];
    extArr.push(path.extname(filePath));
}

console.log(extArr);
