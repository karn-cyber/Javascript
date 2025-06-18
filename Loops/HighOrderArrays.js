// for of 
//["",""",""]

const arr = [1,2,3,4,5]

// for(const interator of object){

// }

for (const num of arr){
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings){
    console.log(`Each char is , ${greet}`)
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "France")

// console.log(map);
for (const [key,value] of map){
    console.log(key); 
    console.log(value);      
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'Fifa',
    'game3' : 'COD'
}

// for (const [key,value] of myObject){
//     console.log(key); 
//     console.log(value);      
// }
// objects are not iteratable
//hence ew first convert it to arrays

for (const [key,value] of Object.entries(myObject)){
    console.log(key +  "=>" + value) ; 
   
}

// for objects there is For in loop

for (const key in myObject){
    console.log(key); 
    console.log(myObject[key]);      
}

//  

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }