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
console.log(myArr.indexOf("sushant"));

const newArr = myArr.join(); // bind and make it into string
console.log(myArr);
console.log(newArr);

// slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("c", myArr);