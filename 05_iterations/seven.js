const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => num + 100)

// By this function these given 10 number will be added in the given number like 100 or whatever given by user
const newNums = myNumers
      .map((num) => num * 10) // this method is called chaining we can add multiple methods at a time
      .map( (num) => num + 1)  // this map function add the number after its tenth and add 1 
      .filter( (num) => num >= 40) // this function will print the value which is greater than 40

console.log(newNums);