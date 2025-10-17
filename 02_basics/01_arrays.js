// array

const myArr = [0, 1, 2 , 3, 4, 5,]
const myHeros = ["Balajee", "Aman"];

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myHeros[0]);

// Array methods

// myArr.push(6)
// myArr.push(7, 8)
// myArr.pop()

myArr.unshift(9) // It will add the number before the array or 0th index and shift all the numbers
myArr.shift(); // It will remove the unshift element

 console.log(myArr.includes(9)); // It will give the output in boolean either true or false
 console.log(myArr.indexOf(3))

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);

// Output = 
// A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2, 3 ]
// The difference between slice and splice one include range(splice) but slice not