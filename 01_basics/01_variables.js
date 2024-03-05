const accountId = 12556 ;
let accountEmail = "sushant@wegjd.com" ;
var accountPassword = "sax134";
accountCity = "bangalore";
let accountState;

//accountId = 12456 // tuype error : assigment to const variable (not allowed to change value in const)
console.log(accountId);

accountEmail = "leo@gmail.com";
console.log(accountEmail);

accountPassword = "qwe123"
console.log(accountPassword);

accountCity = "indore";
console.log(accountCity);

console.log(accountState); //undefined

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
prefer not to use var because of issue in block scope and functional scope
*/