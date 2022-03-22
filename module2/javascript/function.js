//function in js without paramater and without return type
function sayHello(){
    console.log("Hello from functions");
}
sayHello();

//function with parameter

function sum(num1,num2){
    let addition=num1+num2;
    console.log("addition of given numbers: "+ addition)
}

sum(3,5);

// function with return type
function multiply(num1,num2){
    return num1*num2;
}
let ans=multiply(3,5);
console.log(ans);

//storing a function in variable
//function are first class citizen in js

let a= function sub(num1,num2){
    return num1-num2;
}
console.log(a(10,5));

//IIFE -> Immediately Invoked function Expression

(function(){
    console.log("Hello from IIFE");
})();

//IIFE with parameter

(function(num1,num2){
    console.log(num1/num2);
})(10,5);
