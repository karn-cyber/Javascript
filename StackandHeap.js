 //garbage collection 
 // memory allocation

 //stack memory in Primitive datatypes => jo bhi variable declare kara uska ek copy milta hai
 //heap memory in Non Primitive Datatypes => yaha pe reference milta hai


let myYoutubeName =  "Neelanshu Karn";
let anotherName = myYoutubeName;
console.log(myYoutubeName);
anotherName = "Chai Aur Code";
console.log(myYoutubeName);
console.log(anotherName);


let user={
    email:"HdK0i@example.com",
    upi:"neelanshu@ybl",
    age:18

}
console.log(user.email);

let user2=user

user2.email = "neelanshu.karn06@gmail.com"

console.log(user.email);
console.log(user2.email);