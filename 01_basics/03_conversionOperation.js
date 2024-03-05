let score = 33;

console.log(typeof score);
console.log(typeof(score));

let age = "56abc";
console.log(typeof age);
let valueInNumber = Number(age);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let num1 = null;
console.log(typeof num1);

let num2 = undefined;
console.log(num2);

// "33" = 33
// "33abc" = NaN
// true =>1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn);
console.log(booleanIsLoggedIn);

let isLogged = "";

let boolIsLogged = Boolean(isLogged);
console.log(isLogged);
console.log(boolIsLogged);

// 1 => true
// 0 => false
// "" => false
// "sushant" => true

let someNumber = 23;
let stringNumber = String(someNumber) ;
console.log(stringNumber);
console.log(typeof stringNumber);

//***********************Operations ************************

let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = "hello";
let str2 = " sushant";
let str3 = str1 + str2 ;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);
console.log(+true);
// console.log(ture+);

let num5 ,num6, num7;
num5 = num6 = num7 = 2 + 2;

// prefix and postfix operation
let gameCounter = 100;
gameCounter++ ;
console.log(gameCounter);

//link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment