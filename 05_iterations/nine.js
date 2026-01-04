// Reduce Method 
// In this method the add two given value in the array and then the sum of the two number is added with the next num and then again sum of this two number it will add with the next num

const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currval) {  // acc - accumulator, currval - current value
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0); 

// these both methods perform the same function and both give the same output

// console.log(myTotal);



const shoppingCart = [
  {
  itemName: "js course",
  price: 2999
  },

  {
  itemName: "py course",
  price: 999
  },

  {
  itemName: "Mobile dev course",
  price: 5999
  },

  {
  itemName: "data science course",
  price: 12999
  },
]  

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);