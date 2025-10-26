// var c = 300

let a = 300
if(true){
  let a = 10
const b = 20
// console.log("INNER: ", b);

}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
  const username = "Vikash"

  function two(){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);  // It will not work becz his scope is under the curly braces 

  two()
}

// one()

if (true) {
  const username = "Vikash"
  if (username === "Vikash") {
    const website = "  Youtube"
    console.log(username + website);
  }
  // console.log(website);  // His scope is ends in curly braces
}

// console.log(username);  // And also his scope is not there

// ++++++++++++++++++  Interesting +++++++++++++++

function addone(num){
  return num + 1
}

console.log(addone(5))  // We can write this line except console above the function it will not throw error

const addTwo = function(num){
  return num + 2
}

console.log(addTwo(5)) // We can write this line except console above the function it will throw error becz here we hold the function into a variable 
// This process is called hosting
