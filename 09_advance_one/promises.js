// create promise
// counsume promise

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls , cryptography, network
    setTimeout(()=>{
        console.log("async task is complete");
        resolve();
    },1000)
});

// consume promise
promiseOne.then(()=>{
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
  setTimeout(()=>{
    console.log("async task2");
    resolve();  
  },2000);
}).then(function(){
    console.log("async 2 resolved");
})


const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log();
        resolve({username: "sushant", email:"ksushant0293@gmail.com"})
    },3000)
})

promiseThree.then((user)=>{
    console.log(user);
})


const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // let error = true;
        let error = false;
        if(!error){
            resolve({username: "mamta", password: "12345"})
        }else{
            reject('ERROR: something went wrong')
        }
    },4000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(()=>{
    console.log("The Promise Is Either Resolved or Rejected");
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // let error = false;
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "7890"})
        }else {
            reject('ERROR : Javascript went wrong')
        }
    },5000)
});

// async function consumePromiseFive(){
//     const response = await promiseFive;
//     console.log(response);
// }

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response); 
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUser(){
//    try{
//         const response = await fetch("https://randomuser.me/api/")
//         const data = await response.json()
//         // console.log(response);
//         console.log(data);
//     } catch(error){
//         console.log("E: ", error);
//     }
// }
// getAllUser();

fetch("https://randomuser.me/api/")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))