"use strict";
var _a;
const didi = {
    name: "Dfd",
    privileges: ["dfd"],
    startDate: new Date(),
};
const e1 = {
    name: "max",
    privileges: ["dfd"],
    startDate: new Date(),
};
function move(animal) {
    if ("speed" in animal)
        console.log(animal.speed);
}
const button = document.querySelector("input");
button.value = "hi";
const input = document.getElementById("userInput");
if (input)
    input.value = "df";
const list = [1, 2, 3, 4];
const [a, b, ...c] = list;
console.log(a, b, c);
const val = {
    1: "df",
    dfd: "dfdf",
};
const object = {
    name: "lee",
    age: 24,
    school: {
        name: "ddongyang",
    },
};
console.log((_a = object === null || object === void 0 ? void 0 : object.school) === null || _a === void 0 ? void 0 : _a.name);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
const names = [];
const promise = new Promise((resolve, reject) => {
    let a = 10;
    setTimeout(() => {
        if (typeof a == "number")
            resolve("success");
        else
            reject("fail");
    }, 1000);
});
promise.then((res) => console.log(res));
//# sourceMappingURL=app.js.map