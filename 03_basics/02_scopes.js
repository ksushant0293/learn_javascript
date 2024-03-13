//var c = 333;
// let a = 300;
// if(true){
//     let a = 10;
//     const b = 20;
//     console.log("Block scope: ",a);
//     //c = 30;
// }

// console.log("Global scope: ",a);
// console.log(b);
// console.log(c);


// nested scopes

function one(){
    const username = "sushant";

    function two(){
        const website = "youtube";
        // console.log(username);
    };
    // console.log(website);

    two();
}
one();


if(true){
    const username = "sushant1";
    if(username === "sushant1"){
        const website = "youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& interesting #$%$#$%$#$%$#$5
// normal function
addOne(5);
console.log(addOne(5));
function addOne(num) {
    return num + 1 ;
};


// functional expression
addTwo(4); // error cannot access before declaration beacuse of functional expression
console.log(addTwo(4));
const addTwo = function(num){
    return num + 3 ;
};

