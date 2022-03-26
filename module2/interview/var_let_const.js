//hoisting -> accessing variable before assigning is called hoisting
console.log(a);
var a =10;

a=10;
console.log(a);

//re-intialize

a=20;

console.log(a);

// re - declare
var a= 50;
console.log(a);

// var can be re-initialized,hoisted and re-declared.

//hoisting
console.log(b);
let b ;
b=10;
console.log(b);
// re - initialize
b=20;
console.log(b);

// re-declare
// let b= 50;
// console.log(b);

/* let can be re-initialized 
let cannot be re-declared
let is hoisted but gives error because it is hoisted in temporary death zone
So, cannot be accessed.
*/

console.log(c);
const c=20;
c=10;
console.log(c);

// const c= 10;
// console.log(c);

/* const cannot be declared like this
const c;
c=10;
console.log(c);

const should be initialised then and there
*/

/* const cannot be re-initialised , re-declared ,
const is hoisted but gives error because it is hoisted in temporary death zone
So, cannot be accessed.
*/

// Here scope parameter is not mentioned
// More info at https://codinglead.co/javascript/the-difference-between-var-let-and-const




