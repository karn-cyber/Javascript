//const tinderUser = new Object();
const tinderUser = {};
tinderUser.id="123abc";
tinderUser.name="Neelanshu";
tinderUser.isLoggedIn = true;
console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Neelanshu",
            lastname:"Karn"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:'c',
    4:'d'
 }
// const obj3={obj1,obj2}
// console.log({...obj1,...obj2});
//const obj3=Object.assign(obj1,obj2)
const obj3 = Object.assign({},obj1,obj2)
//we have added a bracket in the front so that the obj1,2,and 3 goes into empty array, if obj1 was at the start, then all the values would have been gotten into the obj1
//spread operator is anyday better and is latest

console.log(obj3)
const users = [
    {
        id:1,
        email:"h@gmail.com"
    },{},{},
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser)); // gives the keys of the object
console.log(Object.values(tinderUser)); // gives the values of the object
console.log(Object.entries(tinderUser)); // gives the entries of the object

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
