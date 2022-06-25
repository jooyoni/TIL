// const person: {
//   name: string;
//   age: number;
// } = {
enum Role{
  ADMIN=1, USER=2
}
interface Props{
  name:string;
  age:number;
}
const person= {
  name: 'Maximilian',
  age: 30,
  role:Role.ADMIN
};

console.log(person.role);
