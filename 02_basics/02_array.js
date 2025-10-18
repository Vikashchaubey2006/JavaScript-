const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash","batman"]

 marvel_heros.push(dc_heros)

console.log(marvel_heros)
console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // It is use d to merge the two arrays 

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // this is spread operator it also used to merge the two and more than two operator

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Vikash"))
console.log(Array.from("Vikash"))
console.log(Array.from("123456789"))
console.log(Array.from({name: "Vikash"})) // when he is unable to made the array it give the empty[] it is unable to define because the sentence is undefined

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));