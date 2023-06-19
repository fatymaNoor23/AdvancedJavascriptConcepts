function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
const person1 = new Person("Fatima", "Noor");
const person2 = new Person("Maryam", "Noor");

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person1.getFullName());
console.log(person2.getFullName());
