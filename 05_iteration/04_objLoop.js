// for in loop (for object)
const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
    console.log(`${key} shortcut is for ${myObj[key]}`);
}


// for in (for array)

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
        // console.log(key);
        console.log(programming[key]);  
}

// for in (for map)  // not itreatable in for in
const map = new Map();
map.set("IN", "INDIA");
map.set("usa", "united states of america");
map.set("fr", "france");

for (const key in map) {
   console.log(key);
}
