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
