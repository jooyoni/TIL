"use strict";
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: "lee" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem({ name: "lee" });
textStorage.addItem({ name: "park" });
console.log(textStorage.getItems());
//# sourceMappingURL=app.js.map