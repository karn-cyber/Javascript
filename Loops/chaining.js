const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNumbers = myNumbers
.map( (item) => item + 10)
.filter( (item) => item %2 == 0)
.map( (item) => item*4 )
.reduce( (acc,currval) => {
    return acc + currval;

},0)

//whatever values come, they go in the following part of the chain
console.log(newNumbers);

//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

//The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

const array = [1,2,3,4,5]

const sumWithInitial = array.reduce((acc,currval) => {
    console.log("Accumulator value : "+acc+"  Current Value : "+currval);
    return acc + currval }, 0 )

    console.log(sumWithInitial);


    const shoppingCart = [
        {
            itemName: "js course",
            price: 2999
        },
        {
            itemName: "py course",
            price: 999
        },
        {
            itemName: "mobile dev course",
            price: 5999
        },
        {
            itemName: "data science course",
            price: 12999
        },
    ]

const ShoppingCartTotal = shoppingCart.reduce( (acc,currval) => {
    return acc+currval.price
}, 0 )
console.log(ShoppingCartTotal)