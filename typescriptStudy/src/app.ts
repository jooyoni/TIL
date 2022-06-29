const list=[1,2,3,4]
const [a, b, ...c]=list;
console.log(a,b,c);

interface ErrorContainer{
    [props:string]:string;
}

const val:ErrorContainer={
    1:"df",
    "dfd":"dfdf"
}

const object={
    name:"lee",
    age:24,
    school:{
        name:"ddongyang"
    }
}
console.log(object?.school?.name)

const userInput=null;
const storedData=userInput ?? "DEFAULT";
console.log(storedData);