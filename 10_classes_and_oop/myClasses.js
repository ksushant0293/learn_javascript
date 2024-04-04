// ES6

class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const sushant = new user("Sushant", "sushant@google.com", 1234)
console.log(sushant.encryptPassword());