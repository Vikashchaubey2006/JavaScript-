//  for-of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  // console.log(num);
} 

const greeting = "Hello World"
for (const greet of greeting) {
  // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")  // It takes only unique values and as usual like given sequence

// console.log(map);

for (const key of map) {
  // console.log(key); // this statement gives the output in array
}

for (const [key, value] of map) {
  console.log(key, ':-', value); // this is a method by which we can remove the form of array and take key and value with the help of colon
}

const myObject = {
  game1: 'NFS',
  game2: 'Spiderman'
}

 for (const [key, value] of myObject) {
//   console.log(key, ':-', value);
 } 
// object is not iterated by this way there are some other way of iterating the object it will not work on it