// IF

// if (condition) {           //condition should be true , then only internal code will execute
    
// }

// if (true) {
    
// }

// <, >, <=, >=, !=, ==, ===, !==
const isUserLoggedIn = true;  // equal(=) means true value is assigned in isUserLoggedIn

// const temprature = 41;
// if (temprature === 40) {
//     console.log("less than 50");
// }else{
//     console.log("temprature is greater than 50");
// }
// console.log("execute");

// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// short hand notation

const balance = 1000;
// if (balance > 500) console.log("test"); //emplicit scope

// nesting if else

// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than  750");
// }else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEMail = true;

if (userLoggedIn && debitCard && 2 ==2) {
    console.log("allow to buy courses");
} 
if (loggedInFromGoogle || loggedInFromEMail ) {
    console.log("user logged in");
}