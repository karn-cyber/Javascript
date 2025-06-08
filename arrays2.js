const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); 
// //here it takes an array inside an array, but we did not wanted this 

// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
const all_new_heros=[...marvel_heros, ...dc_heros]; // spread operator does the same thing better than concat
console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usableAnotherArray = anotherArray.flat(Infinity)

console.log(usableAnotherArray);

console.log(Array.isArray("Hi"));
console.log(Array.from("Hi"));
console.log(Array.from({name:"Neelanshu"})); //intersting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
