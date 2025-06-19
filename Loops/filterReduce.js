const coding = ['java', 'python', 'c++',"ruby"]
const values = coding.forEach( (item) => {
    console.log(item);
    // return item
})
// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9]

const newNums = myNums.filter( (item) => item >4) // implicit return
const newNums1 = myNums.filter( (item) => {
    return item > 4
})
console.log(newNums);
console.log(newNums1);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter( (bk)  => bk.publish>2010)
userBooks = books.filter( (bk) => bk.publish>2010 && bk.genre === 'Science')
console.log(userBooks);

//Map function

myNumbers = [1,2,3,4,5,6,7,8,9]
const newNums2 = myNumbers.map( (item) => item+10)
console.log(newNums2); 

