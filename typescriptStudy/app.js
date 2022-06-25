var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
var person = {
    name: 'Maximilian',
    age: {
        name: "df"
    }
};
console.log(person.age);
