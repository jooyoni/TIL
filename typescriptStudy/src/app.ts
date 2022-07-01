// type Admin = {
//     name: string;
//     privileges: string[];
// };

// type Employee = {
//     name: string;
//     startDate: Date;
// };

// type Elevated = Admin & Employee;

// interface Inter extends Admin, Employee {}
// const didi: Inter = {
//     name: "Dfd",
//     privileges: ["dfd"],
//     startDate: new Date(),
// };
// const e1: Elevated = {
//     name: "max",
//     privileges: ["dfd"],
//     startDate: new Date(),
// };

// interface Horse {
//     speed: number;
// }
// interface Bird {
//     flyingSpeed: number;
// }
// function move(animal: Horse | Bird) {
//     if ("speed" in animal) console.log(animal.speed);
// }
// const button: HTMLInputElement = document.querySelector("input")!;
// button.value = "hi";
// const input = document.getElementById("userInput");
// if (input) (input as HTMLInputElement).value = "df";
// const list = [1, 2, 3, 4];
// const [a, b, ...c] = list;
// console.log(a, b, c);

// interface ErrorContainer {
//     [props: string]: string;
// }

// const val: ErrorContainer = {
//     1: "df",
//     dfd: "dfdf",
// };

// const object = {
//     name: "lee",
//     age: 24,
//     school: {
//         name: "ddongyang",
//     },
// };
// console.log(object?.school?.name);

// const userInput = null;
// const storedData = userInput ?? "DEFAULT";
// console.log(storedData);
// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     let a = 10;
//     setTimeout(() => {
//         if (typeof a == "number") resolve("success");
//         else reject("fail");
//     }, 1000);
// });
// promise.then((res) => console.log(res));
// const add: () => string = () => {
//     return "hi";
// };
// function logText<T>(text: T): T {
//     return text;
// }
// function merge<T, U extends object>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }
// const merged = merge({ name: "hello" }, { ages: 23 });
// console.log(merged);
// const obj1 = { name: "max" };

// function countAndPrint<T extends {length:number}>(element: T): [T, string] {
//     let printer = "got no value";
//     if (element.length > 0) {
//         printer = `got ${element.length} values`;
//     }
//     return [element, printer];
// }
// console.log(countAndPrint([2, 3]));
// console.log(countAndPrint("hi"));
// console.log(countAndPrint([]));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return obj[key];
}

console.log(extractAndConvert({ name: "lee" }, "name"));

class DataStorage<T extends { name: string }> {
    private data: T[] = [];
    addItem(item: T) {
        this.data.push(item);
    }
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem({ name: "lee" });
textStorage.addItem({ name: "park" });
// textStorage.addItem({ age: 23 });
console.log(textStorage.getItems());
