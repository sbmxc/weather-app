console.log("Starting app");

setTimeout(() => {
  console.log("Inside of a callback");
}, 2000);

setTimeout(() => {
  console.log("Inside of a callback 2   ");
}, 0);
console.log("Stopping app");
