const eventEmitter = require("events");

const customEmitter = new eventEmitter();

customEmitter.on("response", () => {
  console.log(`data recieved`);
});

customEmitter.emit("response");
// it will not execute because we emitted the event
customEmitter.on("response", () => {
  console.log(`some other logic`);
});
