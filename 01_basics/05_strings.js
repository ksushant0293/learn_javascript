const userName = "sushant";
const repoCount = 50;

//console.log(userName + repoCount + " value");
//use backticks
console.log(`hello ny name is ${userName} and my repo count is ${repoCount}`);

const gameNAME = new String("sushant-sc")

console.log(gameNAME[1]);
console.log(gameNAME.__proto__);
console.log(gameNAME.length);
console.log(gameNAME.toUpperCase());
console.log(gameNAME.charAt([1]));
console.log(gameNAME.indexOf('u'));


const newString = gameNAME.substring(1,4); //here we can't use negitive value
console.log(newString);

// const anotherString = gameNAME.slice(0,5);
const anotherString = gameNAME.slice(-10,4); // here we can use negative value
console.log(anotherString);
console.log(gameNAME);

const newStringOne = "   sushant      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sushant.com/sushant%20kumar";
console.log(url.replace("%20", "-"));

console.log(url.includes('sushant'));
console.log(url.includes("raman"));

console.log(gameNAME.split('-'));

