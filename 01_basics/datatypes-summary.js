// Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 3265656464516466n;

// Reference (Non-Primitive)
// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
const myObj = {
    name: "Vikash",
    age: 24,
}

const myFunction = function(){
  console.log("Hello World");
}

console.log("typeof bigNumber");