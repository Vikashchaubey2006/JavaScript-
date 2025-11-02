// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

const month =  3  //"March"  // When we write here string value then we also have to give all case in string

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");  // Shift + alt + downarrow
    break;
  case 3:
    console.log("March"); // when we commnetout one break then it will print both itself and nextone
    //break;
  case 4:
    console.log("April");  
    break;

  default:
    console.log("default case match");
    break;
}