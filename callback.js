function greet(name) {
  console.log(`Hello! ${name}`);
}

function greetingsWithName(callback) {
  const name = "Fatima";
  callback(name);
}

greetingsWithName(greet);
