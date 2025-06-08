let score = null;
//const {score} =req.body
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN
// Empty string => false
// some data inside => true
// 0 => false 1 => true


// **************** Operations ****************
let value = 3;
let negValue = -value;
console.log(negValue);
console.log(2**3); // 2 to the power of 3
console.log(2**52);
console.log(2%3);

let str1 = "hello";
let str2 = " Neelanshu";
let str3 = str1+str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(3+4*5%3);

console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2+2;
console.log(num1, num2, num3); 

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
console.log(++gameCounter);
console.log(gameCounter++);
console.log(gameCounter);

//links to study

// https://tc39.es/ecma262/multipage/expressions-and-operators.html

//mdndocs.net/en-US/docs/Web/JavaScript/Reference/Operators