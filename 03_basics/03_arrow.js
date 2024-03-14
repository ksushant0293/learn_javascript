const user = {
    username: "sushant",
    price: 999,

    welcomeMessage: function(){                             
        // console.log(`${this.username}, welcome to website`); // this refers to current context
        // console.log(this);
    }

}

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

// console.log(this); // empty object in node environment & in browser this will be window

// function one (){
//     let username = "sushant";
//     console.log(this); // when this is used in function then there are many values
//     console.log(this.username); // this is not used on function only in objects
// }
// one();


// ***********arrow function

// const one = function(){
//     let username = "sushant";
//      console.log(this);
//     console.log(this.username);
// }
// one()

// const one = () => {
//     let username = "sushant";
//     console.log(this);
//     console.log(this.username);
// }
// one();

// const addTwo = (num1, num2) => {
//     return num1 + num2 ;     // curly braces me wrap kiyo to return keyword likhna padega
// }
// console.log(addTwo(2,3));

// emplicit return

// const addTwo = (num1, num2) => num1 + num2  
//const addTwo = (num1, num2) => (num1 + num2); // agar parentheses me wrap kiya toh return keyword likhne ki jrurat nhi hai  

const addTwo = (num1, num2) => ({username: "sushant"})  // jab object return karna hota hai toh parentheses use karte hai
console.log(addTwo(3,4));

const myArray = [2,3,4,5,6,7];

myArray.forEach(() => () );