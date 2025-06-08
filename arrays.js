const myArr = [0,1,2,3,4,5]
// Js arrays are resizable

console.log(myArr[0]);
console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);
// console.log(myArr[4]);
// console.log(myArr[5]);

// in JS shallow copy is done from the same reference for arrays 

//methods of arrays
console.log(myArr.length);
console.log(myArr.pop()); // removes value from the array
console.log(myArr.push(6)); // adds value to the array
console.log(myArr);
myArr.unshift(9);// adds in the start
console.log(myArr);
myArr.shift(); // removes from the start
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));   
const newArr = myArr.join();
console.log(newArr);
console.log(myArr.reverse());
console.log(typeof myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log(myArr)
const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log(myArr);
// console.log(myArr.shift());
// console.log(myArr.unshift(0));
