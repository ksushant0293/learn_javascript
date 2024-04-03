// object literal

// const user = {
//     username: "sushant",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("got user details from database");
//         console.log(`Username: ${this.username}`);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise();
// const date = new Date();

function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function (){
        console.log(`welcome ${this.username}`);
    }
     return this
}

const userOne = new user("sushant", 15, true);
const userTwo = new user("mamta", 6, false)
console.log(userOne);
console.log(userOne.username);
console.log(userTwo);
console.log(userOne.constructor);


// new likhte hi empty object create hota hai