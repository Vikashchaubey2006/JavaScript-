// if
const isUserloggedIn = true
const temperature = 41

// if (temperature === 50) {
//   console.log("less than 50");
// } else {
//   console.log("Temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !== 

// const score = 200

// if (score > 100) {
//   const power = "swim" // When we use var there then both the console wil print but when we use let or const it will throw error
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");  // this is not the good practice of writing the code   
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");

// }else if(balance < 900) {
//   console.log("less than 750");

// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if (userLoggedIn && debitCard) {  // we can check multiple condition here if it's true 
  // when condition is false then it do not move into the code
  console.log("Allow to buy course");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {  // this is for test the multiple condition here we can do multiple check
  console.log("User logged in");
}