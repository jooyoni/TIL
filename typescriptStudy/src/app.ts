type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type Elevated = Admin & Employee;

interface Inter extends Admin, Employee {}
const didi: Inter = {
    name: "Dfd",
    privileges: ["dfd"],
    startDate: new Date(),
};
const e1: Elevated = {
    name: "max",
    privileges: ["dfd"],
    startDate: new Date(),
};

interface Horse {
    speed: number;
}
interface Bird {
    flyingSpeed: number;
}
function move(animal: Horse | Bird) {
    if ("speed" in animal) console.log(animal.speed);
}
const button: HTMLInputElement = document.querySelector("input")!;
button.value = "hi";
const input = document.getElementById("userInput");
if (input) (input as HTMLInputElement).value = "df";
const list = [1, 2, 3, 4];
const [a, b, ...c] = list;
console.log(a, b, c);

interface ErrorContainer {
    [props: string]: string;
}

const val: ErrorContainer = {
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
console.log(object?.school?.name);

const userInput = null;
const storedData = userInput ?? "DEFAULT";
console.log(storedData);
