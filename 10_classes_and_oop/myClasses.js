// ES6

// class user {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const sushant = new user("Sushant", "sushant@google.com", 1234)
// console.log(sushant.encryptPassword());
// console.log(sushant.changeUsername());

// //behind the scene

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
} 

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user("mamta", "mamta@google.com", 6896578);

console.log(tea);
console.log(tea.changeUsername());
console.log(tea.encryptPassword());