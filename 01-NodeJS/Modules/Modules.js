// CommonJS, Every file is module (by Default)
// Modules - Encapsulated Code (only share minimum)

// const secret = "SUPER SECRETE";
// const ajay = "Ajay";
// const manoj = "Gowtham";

// const sayHi = (name) => {
//   console.log(`Hello There ${name}`);
// };

// sayHi(ajay);
// sayHi("Gowtham");

// const names = require("./2-names");
const { ajay, manoj } = require("./names");
const sayHi = require("./utils");
const data = require("./alternative-flavor");

sayHi("Ajay");

// sayHi(names.ajay);
// sayHi(names.manoj);

sayHi(ajay);
sayHi(manoj);

console.log(data);

require("./mind-granade");
