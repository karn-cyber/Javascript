const coding = ["js","cpp","python","java"]
// coding.forEach(function name(){} )
//in callback functions there is no name
// coding.forEach(function(item){ 
//     console.log(item);
// })

coding.forEach(((item)=> {
    console.log(item);
}))

function print(item){
    console.log(item);

} 
coding.forEach(print)

coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },

    {
        languageName : "java",
        languageFileName : "java"
    },

    {

        languageName : "C++",
        languageFileName : "cpp"
    },

    {
        languageName : "python",
        languageFileName : "py",
    }
]
myCoding.forEach((item,index) => {
    console.log(index+1  + " " + item.languageName + " " + item.languageFileName);
})