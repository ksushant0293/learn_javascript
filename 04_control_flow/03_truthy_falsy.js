// const userEmail = "h@devin.ai"
// const userEmail = '';
const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("don't have user email");
}


//falsy values (false, 0, -0, BigInt 0n, "", null, undefined, NaN)
// truthy values (true, 1, empty array, "0", 'false'," ", [], {}, function(){}) 
//string le andar kuch bhi value hai toh truthy value hai

//how to check Array is empty
// if(userEmail.length === 0){
//     console.log("Array is empty");    
// }

// how to check Object is empty
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("emptyObj is empty");
}

// false == 0 //true
// false == "" //true
// 0 == "" //true

//Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10 ;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15; 

console.log(val1);

// terniary operator

//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less tha 80"): console.log("more than 80");;