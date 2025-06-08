//Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// // let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date("2023-01-23");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); 

// console.log(typeof myDate);

// console.log(myCreatedDate.getTime());


let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+1);
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: "long",
}) 