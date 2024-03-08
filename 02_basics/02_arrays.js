const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["batman", "superman", "arrow"];

// marvelHeros.push(dcHeros); // added the second array in first array as a single element
// console.log(marvelHeros);
// console.log(marvelHeros[3]);

//const myHeros = marvelHeros.concat(dcHeros); // concat return a new array by adding the both array 
//console.log(myHeros);

// const all_new_heros = [...marvelHeros, ...dcHeros];
// console.log(all_new_heros);

// const anotherArray = [1, 2, 3, [ 4, 5, 6], 7, [6,7,[4,5]]];
// const real_another_array = anotherArray.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("sushant"));
console.log(Array.from("sushant"));
console.log(Array.from({name:"sushant"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
