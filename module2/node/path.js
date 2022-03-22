"C:\Users\hp\Desktop\FJP_Web\Web_Dev\module2\node\path.js"

let path = require("path");
console.log(path);

//extname-> return the extension 
let extensionName = path.extname("C:\Users\hp\Desktop\FJP_Web\Web_Dev\module2\node\path.js");
console.log(extensionName);

// basename-> return the last file name but at time it fails too
let baseName = path.basename("C:\Users\hp\Desktop\FJP_Web\Web_Dev\module1\index.html");
console.log(baseName);

//_dirname:- return the directory path in which this file lies
console.log(__dirname);

//_filename :- return the entire file path
console.log(__filename);

// Improved eay to find basename
let basename=path.basename(__filename);
console.log(basename);

//add filePath to directory 
let newFilePath= path.join(__dirname,'test.js');
console.log(newFilePath);

