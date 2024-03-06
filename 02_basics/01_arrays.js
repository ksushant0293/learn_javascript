// array

const myArr = [1,2,3,4,5, true, "sushant"];
const myHeros = ["shaktiman", "doga", "naagraj"]

const myArr2 = new Array(1,2,3,4);
console.log(myArr[0]);
console.log(myArr2);

// Array methods

myArr.push(6);
myArr.push(7);
console.log(myArr)
myArr.pop();
console.log(myArr);

myArr.unshift(9);
console.log(myArr);
console.log(myArr.includes(9));