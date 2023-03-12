const person1 = {
  name: "sam",
  age: 25,
};
const person2 = person1;
person2.name = "cat";
console.log(person1.name, person2.name);
