// const tinderUser = new Object()  // this is a singleton onject
const tinderUser = {} // this is a non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Vikash"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Vikash",
      lastname: "Chaubey"
    }
  }
}
console.log(regularUser.fullname.userfullname.firstname); // this is called nesting we can decrease the level
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2, obj4)
// Paranthesis is optinal but it combined in a single array other it will only mive it into object 1
// we will mainly used Spread function in our code
console.log(obj3);

console.log(tinderUser);
 
console.log(Object.keys(tinderUser)); // it gives keys
console.log(Object.values(tinderUser)); // it gives it object means equal to values
console.log(Object.entries(tinderUser)); //it gives the all entities in seprate-seprate array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //  the object is present or not in boolean

