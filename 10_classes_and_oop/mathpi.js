const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

// const myNewObject = Object.create(null);

const myNewObject =  {
    name: "sushant",
    email: "sushant@qweds.com",
    isLoggedIn: true,

    goOnline : function(){
        console.log("already logged in");
    }
}

console.log(myNewObject);
console.log(Object.getOwnPropertyDescriptor(myNewObject, "name"));

// Object.defineProperty(myNewObject, "name", {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(myNewObject, "name"));


for (const [key, value] of Object.entries(myNewObject)) {
    if(typeof value != "function"){
        console.log(`${key} : ${value}`);
    }
}
    
