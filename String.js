const name= "Neelanshu Karn";
const repoCount = 37;

// console.log(name + " has " +repoCount +" repositories");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Neelkarn')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4);
console.log(newString);
console.log(gameName.slice(-4));

// in substring we can not give negative values but in slice we can give negative values and it will start from backwards

console.log(gameName.split(''));

const myName = "Neelanshu Karn";
const myNewName = new String("Neelanshu Karn");
console.log(typeof myName);
console.log(typeof myNewName);

// trim removes the spaces from the start and end of the string

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-'))