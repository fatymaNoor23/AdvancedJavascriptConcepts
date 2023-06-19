// function normalFunction() {
//   console.log("Hello");
//   console.log("World");
// }
function* generatorFunction() {
  yield "Hello";
  yield "world";
}
const generateObj = generatorFunction();
for (const word of generateObj) {
  console.log(word);
}
