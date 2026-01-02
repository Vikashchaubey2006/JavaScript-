const coding = [ "js", "ruby", "java", "python", "cpp"]


 const values = coding.forEach( (item) => {
  // console.log(item);
})

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {
//    return num > 4 // due to scope we use return then it function 
// })

// const newNums = []

// myNums.forEach( (num) => {
//   if (num > 4) {
//     newNums.push(num)
//   }
// })
// console.log(newNums);

const books = [
  {title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004 },
  {title: 'Book two', genre: 'History', publish: 1992, edition: 2007 },
  {title: 'Book three', genre: 'History', publish: 1999, edition: 2008 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
  return bk.publish >= 1990 && bk.genre === "History"
});
// we can use return and also without return and bracket both function will work 

console.log(userBooks); 