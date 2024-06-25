const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync(
  "C:/AjayPractice/Full-Stack-JS/NodeJS/content/first.txt",
  "utf-8"
);
const second = readFileSync(
  "C:/AjayPractice/Full-Stack-JS/NodeJS/content/second.txt",
  "utf-8"
);

console.log(first, second);

writeFileSync(
  "C:/AjayPractice/Full-Stack-JS/NodeJS/content/result-sync.txt",
  `Here is the result ${first}, ${second}`,
  { flag: "a" } // for appeding the values
);
console.log("done with this task");
