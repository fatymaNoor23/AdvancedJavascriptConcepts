function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
function SuperHero(fName, lName) {
  Person.call(this, fName, lName);
  this.isSuperHerp = true;
}
SuperHero.prototype.fightCrime = function () {
  console.log("fighting crimes");
};
SuperHero.prototype = Object.create(Person.prototype);
const batman = new SuperHero("Abdullah", "Zahoor");
SuperHero.prototype.constructor = SuperHero;
console.log(batman.getFullName());
