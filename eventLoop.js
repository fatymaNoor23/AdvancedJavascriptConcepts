setTimeout(() => {
  console.log("first");
}, 0);

const promise = fetch(
  "https://www.udemy.com/course/aws-certified-associate-architect-developer-sysops-admin/"
);
promise.then((value) => {
  console.log("promise value is ", value);
});

let i = 0;
while (i < 1000000000) {
  i++;
}

console.log("second");
