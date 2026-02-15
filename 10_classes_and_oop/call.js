function SetUsername (username) {
  // complex DB calls
  this.username = this.username
  console.log("called")
}

function createUser(username, email, password) {
  SetUsername.call(this, username)  // we can use this here to register user manually 
  
  this.email = email 
  this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "12245")
console.log(chai);
