// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

 let myCreatedDate = new Date(2023, 11, 23)
// here the written format of the month is start from 0 to 11, 0(zero) means January and 11 means December 
 console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 11, 23, 5, 20)
// let myCreatedDate = new Date("01-12-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// this function is use to get the time in milliseconds from 1 jan 1970 to the given date and also compare the two dates
 console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth());

// newDate.toLocaleString('default', {
//   weekday: "long",
//   timeZone: ''
// });