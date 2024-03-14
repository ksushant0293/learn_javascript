// Immediately Invoked Function Expressions (IIFE)

//1. function Immediately execute ho jaye
//2. global scope me kai bar variable declare hote hai , aur kai baar function ke andar kuch likh rahe hai
// hum nhi chahiye ki globaL variable kuch problem kare , hnum nhi chahte ki global scope se function pollute ho jaye
// toh hum log alag apna scope ban lete hai 

// function coffee(){
//     console.log(`DB CONNECTED`);
// }
// coffee()

(function coffee() {     // named iife
    console.log(`DB CONNECTED`);
})();  // function ki defination me bhi parentheses laga diya hai immediately execute ho jayega


( (name) => {    // unamed iife(simple iife)
    console.log(`DB CONNECTED TWO ${name}`);
} )("sushant");
