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
