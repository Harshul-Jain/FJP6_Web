let str="I am a string";
console.log(str);

//length of string

let len=str.length;
console.log(len);

//sliced method -> extract part of a string

let slicedArr = str.slice(2,5);
console.log(slicedArr);

//replace method->return a new string with replaced part with given word
//No change in origin String

let replaceStr=str.replace("am","was");
console.log(replaceStr);
console.log(str);

let upperCase = str.toUpperCase();
console.log(upperCase);

let lowerCase = str.toLowerCase();
console.log(lowerCase);

// concate

let firstName="Harshul";
let lastName="Jain";
// let fullName=firstName.concat(lastName);
// console.log(fullName);
//or

let fullName=firstName+lastName;
console.log(fullName);

//split -> return arr;

let splitted = str.split(" ");
console.log(splitted);

//trim 
let trimstr=str.trim();
console.log(trimstr);




