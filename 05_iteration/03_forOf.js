// for of loop (array specific)
// for (const iterator of object) {
    
// }

// ['','','']
// [{},{},{}]

// const arr = [1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// };

// const greetings = "hello world";
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps

const map = new Map();
map.set("IN", "INDIA");
map.set("usa", "united states of america");
map.set("fr", "france");

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':', value);
// }

const myObj = {
    "game1": "nfs",
    "game2": "gta"
}

for (const [key, value] of myObj) {
    console.log(key, ":", value);
} // objects are not iteratable

