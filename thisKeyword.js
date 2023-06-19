// function myName(name) {
//   console.log(`My name is ${name}`);
// }
// myName("Fatima Noor");

//implicit binding rule
const person = {
  name: "Noor",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};
// person.sayMyName();
//explicit binding rule
function sayMyName() {
  console.log(`My name is ${this.name}`);
}
// sayMyName.call(person);

//new binding
function Person(name) {
  this.name = name;
}
const p1 = new Person("Noor");
const p2 = new Person("Fatima");
// console.log(p1.name, p2.name);

//default binding
sayMyName();
