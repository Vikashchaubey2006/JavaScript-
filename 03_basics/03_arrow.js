const user = {
  username: "Vikash",
  price: 999,

  welcomeMessage: function() {
    console.log(`${this.username} , welcome to website`);
    console.log(this) // this is about current context
  }
}

// user.welcomeMessage()
// user.username = "Aman"
// user.welcomeMessage()
// user.username = "Balajee"
// user.welcomeMessage()

// console.log(this)
 

// function chai(){
//   let username = "Vikash"
//   console.log(this.username);
// }

// chai()

// const chai = function () {
//   let username = "Vikash"
//   console.log(this.username);
// }

const chai =  () => {
  let username = "Vikash"
  console.log(this);
}  // We can write the function with the help of arrow 

// chai()

// const addTwo = (num1, num2, num3) => {  // We can also store with the help of name or without name () => {} like that. This is also called explicit return
//   return num1 + num2 + num3
// }   // this is basic arrow function 


// const addTwo = (num1, num2 ) => num1 + num2  // This is called implicit return
// const addTwo = (num1, num2 ) => ( num1 + num2 ) // there is no need to write return in the paranthesis

const addTwo = ( num1, num2) => ({username: "Vikash"})

console.log(addTwo(5, 6))