// For loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number");
  }
  // console.log(element);  // console is not decleared out side because the element is decleared inside the scope
  
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10 ; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`)
    // console.log(i + '*' + j + ' = ' + i*j );
    
  }
  
}

let myArr = ["Balajee", "Aman", "Sahil", "Karan"]
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  // console.log(element);
  
}


// Break and Continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break; // When we use break after finding the object it will stop
//   }
//   console.log(`Value of i is ${index}`);
  
// }
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue; // But when we use continue after finding the object it will continue or proceed
  }
  console.log(`Value of i is ${index}`);
  
}