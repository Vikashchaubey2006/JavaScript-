function sayMyName(){
  console.log("V");
  console.log("I");
  console.log("K");
  console.log("A");
  console.log("S");
  console.log("H");
}

// sayMyName()  
// The firstone is called reference(sayMyName) and by the use of paranthesis it will execution

// function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

  let result = number1 + number2
  return result    // We can not print anything after result we can before the result but not after the result

  return number1 + number2  // we can also return the function like that
}

const result = addTwoNumbers(5, 7)

// console.log("Result: ", result);

function loginUserMessage(username){
  return `${username} just logged in`
}

// loginUserMessage("Vikash")  // It will not print anything becz we don't provide any type of instruction for store and print

// console.log(loginUserMessage("Vikash"))
// console.log(loginUserMessage(""))  // just logged in
// console.log(loginUserMessage())   // undefined

function loginUserMessage(username = vikash){   // After user name it is by default value when you passed any value then it will override by himself
  if(username === undefined){  // It apply when your condition is true
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(...num1){  // these three dot is called rest operator and also spred operator here rest is used it depends upon situation
  return num1
}

// console.log(calculateCartPrice(200, 400, 500))

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "Vikash",
  price: 999
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
  username: "Balajee",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]))