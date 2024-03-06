const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(typeof balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); //value in us standard
console.log(hundreds.toLocaleString('en-IN')); // value in indian standard

//***********************************maths */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(6.3));
console.log(Math.ceil(5.5));
console.log(Math.floor(5.9));
console.log(Math.min(1,3,5,6,8,54,23));
console.log(Math.max(2,45,7,88,43,67,89));

console.log(Math.random()); // give value between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1);
 
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);