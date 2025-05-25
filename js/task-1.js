//1
//я не зрозумів який метод і куди його тут всунути, вибачаюся
class Account{
    constructor(login, email) {
        this.login = login
        this.email = email
    }
};

const mango = new Account("Mangozedog", "mango@dog.woof");
const poly = new Account("Poly", "poly@mail.com");

console.log(`login Mango: ${mango.login} \nemail Mango: ${mango.email}`);
console.log(`login Poly: ${poly.login} \nemail Poly: ${poly.email}`);