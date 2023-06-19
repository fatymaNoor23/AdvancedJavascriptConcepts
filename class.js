class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  sayMyName() {
    return this.firstName + " " + this.lastName;
  }
}

const classP1 = new Person("Fatima", "Noor");
console.log(classP1.sayMyName());
class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log("fighting crimes");
  }
}

const batman = new SuperHero("Fatima ", "Noor");
