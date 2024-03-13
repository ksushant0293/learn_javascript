function sayMyName() {
    console.log("s");
    console.log("u");
    console.log("s");   
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("t");
}
// sayMyName();

//function name(params) {
    
 //};
// name(arguments);

// function addTwoNum (num1, num2) {
//     console.log(num1 + num2);
// }

// addTwoNum(3,7);
// addTwoNum(3,"a");
// addTwoNum(3, null);

// const result = addTwoNum(3,7);

// console.log("result: ", result);

// function SumOfNum (num1, num2){
//     let sum = num1 + num2 ;
//     console.log("sushant");
//     return sum;
// }

function SumOfNum (num1, num2){
    return num1 + num2;
}
let result = SumOfNum(3,7);
//console.log("result: ", result);

// function loginUserMessage(username){
//     return `${username} just Logged In`;
// };

// loginUserMessage("sushant");
// console.log(loginUserMessage("sushant"));
// console.log(loginUserMessage("")); // just loggend in
// console.log(loginUserMessage()); // undefined just logged in

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just Logged In`;
// };

// function loginUserMessage(username){
//     if(!username){  // !username is equal to username === undefined
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just Logged In`;
// };

// if we want a to give default value
function loginUserMessage(username = "sam"){
    if(!username){  // !username is equal to username === undefined
        console.log("please enter a username");
        return
    }
    return `${username} just Logged In`;
};
// console.log(loginUserMessage());
// console.log(loginUserMessage("sushant"));


function calculateCartPrice(num1){
    return num1;
}
// calculateCartPrice(7);
// console.log(calculateCartPrice(7));

// rest operator(if we have multiple arguments)
// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,500,700));


// function calculateCartPrice(val1, val2, ...num1){
//     return num1;
// }
// console.log(calculateCartPrice(300,400,700, 8900));

const user ={
    username: "sushant",
    price: 200
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
} 

// handleObject(user);
handleObject({
    usernme: "sushant",
    price: 467
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 2000,3000]));