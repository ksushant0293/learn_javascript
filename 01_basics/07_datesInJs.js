// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0 ,23);
// console.log(myCreatedDate);
// console.log("to date string ", myCreatedDate.toDateString());
// console.log("to locale string ", myCreatedDate.toLocaleString());


let myCreatedDate = new Date("01-14-2023");
//console.log(myCreatedDate.toLocaleString());


let myTimeStamp =  Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth());

newDate.toLocaleString("default", {
    weekday: "long",
})