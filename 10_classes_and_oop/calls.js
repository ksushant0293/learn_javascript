function SetUserName(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUserName.call(this, username)
    this.email= email;
    this.password = password
}

const sushant = new createUser("sushant", "sushant@google.com", "123456543")
console.log(sushant);