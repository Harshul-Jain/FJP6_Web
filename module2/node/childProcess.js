let cp =require('child_process');
//console.log(cp);

//open calculator with help of this file

//for windows replace gnome-calculator with calc
// for mac replace gnome-calculator with open -a calculator
// for linux fnome-calculator
// cp.execFileSync("calc");

// open vscode with childProcess
// cp.execSync("code");

let content = cp.execSync('node test.js');

console.log("Output of test.js file: "+ content);




