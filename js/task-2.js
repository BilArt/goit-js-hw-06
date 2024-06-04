class Storage {
    #items = [];

    constructor(initialItems = []) {
        this.#items = initialItems;
    }

    getItems() {
        return this.#items;
    }

    addItem(item) {
        this.#items.push(item);
    }

    removeItem(itemToRemove) {
        const index = this.#items.indexOf(itemToRemove);
        if (index !== -1) {
            this.#items.splice(index, 1);
            return true;
        }
        return false;
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
console.log(storage.removeItem("Prolonger")); // true
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
