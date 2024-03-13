// singleton 
// Object.create (object constructor)

//object literals

const mySym = Symbol("key1");

const JsUser ={
    name: "sushant",
    "Full name": "sushant kumar",
    age: 30,
    [mySym]: "mykey1",
    location: "bangalore",
    email: "sushant@google.com",
    isL0ggedIn : false,
    lastLoginDays: ["Monday", "saturday"] 
}

console.log(JsUser.name);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full name"]);

console.log(JsUser[mySym]);

JsUser.email = "sushant@chatgpt.com"; // changing value
// Object.freeze(JsUser);  // If you want that no one change change value then use freeze

JsUser.email = "asdfd@efrd.com";  // now the value is not changed
console.log(JsUser.email);

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());