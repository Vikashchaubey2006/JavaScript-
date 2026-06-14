const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)

// this is the output 
// {
//   value: 3.141592653589793,                
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// a constant value (3.14159…)   This is a interview level question
// cannot be changed
// cannot be deleted
// cannot be modified

// getOwnPropertyDescriptor -> this property check the (i) Writable property in boolean true/false, (ii) Enumerable property in true/false, (iii) Configurable property  in true/false

// console.log(Math.PI)   // value = 3.14
// Math.PI = 5
// console.log(Math.PI); // again value = 3.14 not is change 

const chai = {
  name: 'ginger chai',
  price: 250,
  isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// Object.defineProperty(chai, 'name', {
//   writable: false,    // when all three properties are changable then then we can change both will be represent false in output rest one is true
//   enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}