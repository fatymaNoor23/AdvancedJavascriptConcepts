function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function greet() {
  console.log("Waiting...");

  await delay(2000); // Wait for 2 seconds

  console.log("Hello!");
}

greet();
