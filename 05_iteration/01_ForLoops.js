// For loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i < 10; i++) {
    if (i == 5){
      //  console.log("5 is the best number");
    }
    //console.log(i);   
}

//console.log(i); // element is not defined on global scope

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop ${j} and outer loop ${i}`)
//         console.log(i + "*" + j + " = " + i*j);
//     }
// }


let myArray = ["ironman", "batman", "spiderman", "superman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

// break and continue

for (let index = 0; index <= 20; index++) {
    const element = index;
    if (element == 5) {
        console.log(`detected 5`);
        // break; // loop se bahar aa jata hai
        continue;  // condition ek baar ke liye skip kar dete hai , aur loop se bahar nhi jata
    }
    console.log(`value of element is ${element}`);
}