//var c = 333;
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    console.log("Block scope: ",a);
    //c = 30;
}

console.log("Global scope: ",a);
// console.log(b);
// console.log(c);