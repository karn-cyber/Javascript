console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2!=1);

console.log("Something Different below");

console.log("2">1);
console.log("02">"01");
console.log("2">"1");
console.log("02"<"01");
console.log("2"<"1");

console.log("null comparison"); 
console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(null<=0);

// last two gives true because in JS the way the comparison operator works is different from the way the equality operator works, and when the equality operator is used on null, it returns false, but when the comparison operator is used on null, it returns true because it converts the null first to zero and then compares making it return true

console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined <0);  

// strict check with ===, checks data type also

console.log("2"==2);
console.log("2"===2);
