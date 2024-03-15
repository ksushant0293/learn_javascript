// reduce filter

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newTotal = myNums.reduce(function (acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0);

const newTotal = myNums.reduce( (acc, currVal) => {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
}, 0);
console.log(newTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 12999
    },
    {
        itemName: "mobile course",
        price: 4999
    },
    {
        itemName: "java course",
        price: 1999
    }
];

const myShoppingPrice = shoppingCart.reduce((acc, item)=>{
    return acc + item.price
},0);
console.log(myShoppingPrice);