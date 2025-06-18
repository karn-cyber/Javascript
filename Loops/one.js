for(let index = 0; index<10;index++) {
    const element = index;
    if(element == 5){
        console.log("Element is 5");
    }
    else{
    console.log(element);
    }
}

for(let index = 0; index<10;index++) {
    const element = index;
    if(element == 5){
        console.log("Detected 5");
        break;
    }
    else{
    console.log(element);
    }
}

for(let index = 0; index<10;index++) {
    const element = index;
    if(element == 5){
        continue;
        console.log("Detected 5");
        break;
    }
    else{
    console.log(element);
    }
}

// while loop

// while (condition) {
//     // code to be executed
// }

let index=0;
while (index<=10){
    console.log(`Value of index is ${index}`);
    index = index + 2
}
myArray = ["Flash", "Batman", "Superman"];
index=0
while (index < myArray.length) {
    console.log(myArray[index]);
    index++;
}

let score = 1
do{
    console.log(`Score is ${score}`);
    score++; 
}