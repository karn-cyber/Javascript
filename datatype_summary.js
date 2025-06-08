// Primitive Datatypes

// 7 types : all the primitive datatypes are call by value
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6.BigInt
// 7. symbol

// Reference Datatypes or Non-primitive Datatypes

// 8. Object
// 9. Array
// 10. Functions

// Master the Objects and master the web events and you will become the master of Javascript

// Is javascript a statically typed language or dynamically typed language?

// It is a dynamically typed language, we donot have to define the data type of the variable

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34534534832345234534523n

//when we use n at last it automatically becomes a bigint


// reference 

const heros = ["IronMan", "SuperMan", "Batman"]
const another = heros
another[0] = "Hulk"
console.log(heros);

let myObject = {
    name:"Neelanshu",
    age:20,
    
}

console.log(myObject);

const myFunction= function(){
    console.log("Hello");

}
myFunction();

console.log(typeof myFunction); // more precisely its Function object
console.log(typeof myObject);
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof id);
