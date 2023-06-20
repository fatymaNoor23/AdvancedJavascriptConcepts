function timeout(ms) {
  setTimeout(function () {
    console.log("Timeout completed");
  }, ms);
}

// Usage:
console.log("Before timeout");

timeout(3000);
