const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 5000);
});

const onFulfillment = () => {
  console.log("TACOS");
};

const onRejection = () => {
  console.log("Pasta");
};
promise.then(onFulfillment);
promise2.catch(onRejection);
