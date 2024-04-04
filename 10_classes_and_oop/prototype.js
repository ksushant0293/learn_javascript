// let myName = "sushant            ";

// console.log(myName.length);

// myName.prototype.trueLength = function(){
//     myName.trim().length
// };

// myName.trueLength();


let myHeros = ["thor", "spiderman"];
let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getspiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
};

Object.prototype.sushant = function(){
    console.log(`sushant is present in all objects`);
}

Array.prototype.hiSushant = function(){
    console.log(`sushant say hi`);
}


// heroPower.sushant()

myHeros.sushant();
myHeros.hiSushant();
// heroPower.hiSushant();

// inheritance 

const user = {
    name: "sushant",
    email: "sushant@google.com"
}

const teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user


// modern syntax
Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUserName = "Sisjanrn         ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`the true length is: ${this.trim().length}`);

}

anotherUserName.trueLength();

"sushant ".trueLength();
"mamta              ".trueLength();