// const tinderUser = new Object();

const tinderUser ={}
tinderUser.id = "123abc";
tinderUser.name = "samy";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);  //empty object

const RegularUser =  {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            fisrtname: "sushant",
            lastname: "kumar"
        } 
    }
}

// console.log(RegularUser.fullname);
// console.log(RegularUser.fullname.userFullname);
// console.log(RegularUser.fullname.userFullname.fisrtname);

const obj1 = {
    1: "a",
    2: "b",
};

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2};
// console.log(obj3);

// const obj3 = Object.assign({},obj1, obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2}; // spread operator
console.log(obj3);

const users = [
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },

]

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // datatype is array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));

const course = {
    courseName: "JS learn",
    price: "free",
    courseInstructor: "sushant"
}

//course.courseInstructor

// const {courseInstructor} = course;
// console.log(courseInstructor);

const{courseInstructor: Instructor} = course;
console.log(Instructor);

