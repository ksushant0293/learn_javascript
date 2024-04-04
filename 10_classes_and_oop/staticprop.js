class user {
    constructor(username){
        this.username = username;

    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    // static createId(){    // static likhne se har object ko ye method/property acess nhi milta hai
        // return `123`
    // }
}

const sushant = new user("sushant")
// console.log(sushant.createId());

class teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const myPhone = new teacher("phone", "i@phone.com");
myPhone.logMe();
console.log(myPhone.createId());