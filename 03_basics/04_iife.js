// Immediately Invoked Function Expression (IIFE)

// function chai(){
//   console.log(`DB CONNECTED`);
// }
// chai() // This is normal function

(function chai(){ // this is called named iife
  console.log(`DB CONNECTED`);
})(); // We use the iife to reduce the pollution of global scope and also we use here semicolon(;) then same type nect function will work

// (function aurcode(){
//   console.log(`DB CONNECTED TWO`);
// })()

(() => {
  console.log(`DB CONNECTED TWO`);
})(); // When we use semicolon in before function then we can also write function like this

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
} )('Vikash')  // We can also passed an argument and also called unnamed iife

// When we write two iife function in same code then we have to give the semicolon(;) at the last of the first function then both iife will work together 