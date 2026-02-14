let myName = "Vikash    "

// console.log(myName.trim().length)
// console.log(myName.trueLength);

let myHero = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpidermanPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}

Object.prototype.Vikash = function(){
  console.log(`Vikash is present power in all object`);
}

Array.prototype.heyVikash = function(){
  console.log(`Vikash says hello`);
}

// heroPower.Vikash()
// myHero.Vikash()
// myHero.heyVikash()

// inheritance

const User = {
  name: "Vikash",
  email: "vikash@google.com"
}


const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailabke: false
}

const TASupport = {
  makeAssignment: 'JS assignment', 
  fullTime: true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User
//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Vikash baba   "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
