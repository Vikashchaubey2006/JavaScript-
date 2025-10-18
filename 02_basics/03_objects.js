// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")


const JsUser = {
  name: "Vikash",
  "full name": "Vikash Chaubey",
  [mySym]: "mykey1",
  age: 18,
  location: "Kudra",
  email: "vikash0001@gamil.com",
  isLoggedIn: false,
  lastLoggedIn: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser.mySym)
console.log(JsUser[mySym])
 // another way to access the object property reason is that if we have space in the property name then we can use this method or any object in string format then dot notation is not work

 JsUser.email = "vikash@2006gmail.com"
//  Object.freeze(JsUser)
 JsUser.email = "vikashbaba@gmail.com" // it not include in the JsUser becz we have already free the user

 JsUser.greeting = function(){
  console.log("Hello JS user")
 }

 console.log(JsUser.greeting());

 JsUser.greetingTwo = function(){
  console.log(`Hello Js user, ${this.name}`) // this is called string interpolation
 }
 console.log(JsUser.name);