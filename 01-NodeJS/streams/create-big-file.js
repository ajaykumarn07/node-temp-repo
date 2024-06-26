const { writeFileSync } = require("fs");

for (let i = 0; i < 1000; i++) {
  writeFileSync(
    "C:/AjayPractice/Full-Stack-JS/NodeJS/content/bigFile.txt",
    `Hello world ${i}\n`,
    { flag: "a" }
  );
}
