const user = {
  username: "Vikash",
  loginCount: 10, 
  signedIn: true,

  getUserDetails : function() {
    // console.log("Got user detail form database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn

  this.greeting = function() {
    console.log(`Welcome ${this.username}`);
  }

  return this
}

const userOne = new User("Vikash", 10, true)  // when we use new before both the function and then print both the both will give the output
const userTwo = new User("Balajee", 11, false) // it will override on console one
// when we use new user before the user it will remove the unwanted mesh like getter shetter etc when we dont in any function then it will generate unwanted mesh

console.log(userOne);
console.log(userTwo)