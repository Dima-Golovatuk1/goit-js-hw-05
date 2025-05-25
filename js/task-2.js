//2
class User {
    constructor(name, age, followers) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }

    //Ну тут я зрозумів що від мене хочуть. Якщо в першому так само потрібно було зроби тоді вибачаюся я тупий
    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}


const userMango = new User("Mango", 33, 1235);
const userPoly = new User("Poly", 30, 8465);

userMango.getInfo();
userPoly.getInfo();