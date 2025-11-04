const userEmail = ""

// if (userEmail) {
//   console.log("Got user email")
// } else {
//   console.log("Don't have user email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }   // this is the way to check the object is empty or not

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty")
// }

// false == 0  true
// false == '' true
// 0 == ''  true

// Nullish Coalescing Operator (??): null undefined
// The Nullish Coalescing Operator (??) in JavaScript is used to provide a default value when a variable is null or undefined.

let val1;
// val1 = 5 ?? 10  // it will give 5
// val1 = null ?? 10  // it will give 10
// val1 = undefined ?? 15 // it will give 15
val1 = null ?? 10 ?? 20


// console.log(val1);

// Ternary Operator 
// The ternary operator in JavaScript is a short way to write an if...else statement in a single line

// condtion ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")