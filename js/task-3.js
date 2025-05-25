//3
const storage = ['apple', 'banana', 'kiwi'];

class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index) {
            this.items.splice(index, 1);
        }
    }
}


const newStorage = new Storage(['apple', 'banana', 'mango']);

console.log(newStorage.getItems());

newStorage.addItem('orange');
console.log(newStorage.getItems());

newStorage.removeItem('banana');
console.log(newStorage.getItems());