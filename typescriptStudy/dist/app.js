"use strict";
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(2, 5, (result) => {
    console.log(result);
});
let value;
value = "a";
let val;
if (typeof value === "string") {
    val = value;
}
function clickHandler(event, message) {
    console.log(event);
}
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", (event) => clickHandler(event, "hi"));
