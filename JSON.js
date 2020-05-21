let person = {
    firstName: "Luke",
    lastName: "Parker",
    age: 23
}


// console.log(JSON.stringify(person));

let jsonPerson = "{\"firstName\":\"Luke\",\"lastName\":\"Parker\",\"age\":23}";

console.log(JSON.parse(jsonPerson));
