// singleton
// literal se banega toh singleton nahi banega aur constructor se banega toh singleton banega


//object literals
//object.create   // constructor method to make the object
const mySym = Symbol("key1")
const JsUser =  {
    name : "Neelanshu",
    "full name" : "Neelanshu Karn",
    email : "neelanshu.2024@nst.rishihood.edu.in",
   [ mySym ]: Symbol("key1"),
    age : 18,
    location : "Prayagraj",
    languages : ["Hindi", "English"],
    twitter : "@neelanshu_karn",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Saturday"],
} // object made

//ways to access the value of the objects
console.log(JsUser.email);
//console.log(JsUser."full name"); can not happen like this if the variable has ""
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "neel@chatgpt.com" // value has been overwritten
//Object.freeze(JsUser) // this will make the object immutable
JsUser.email = "neel@microsoft.com" // this will not work as the object is immutable

console.log(JsUser);



// Functions

JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greeting( ));
console.log(JsUser.greetingTwo());