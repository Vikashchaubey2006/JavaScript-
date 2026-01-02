const name = "Vikash"
const repoCount = 100

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Vikash Chaubey')

// console.log(gameName[0]);
// console.log(gameName[13]);

// console.log(gameName.__proto__ === String.prototype);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName.charAt(10));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-5, 0);
console.log(anotherString);
// we can use negative values in slice but not in substring when we gave negative it ignore it and consider it as 0

const newStringOne = "    Vikash         "
console.log(newStringOne);
console.log(newStringOne.trim()); // it is used to remove the extra spaces from start and end

const url = "https://vikashchaubey.com-about"
console.log(url .replace('  ', '/'));
// It will replace the first occurance of space comma bfreacket with whatever we want to replace

console.log(url.includes('vikash chaubey'))
// we can ask any thing it is present in the url or not

const line = "Hey I lovr u" // we can also use in tetx
console.log(line.includes('hate'));