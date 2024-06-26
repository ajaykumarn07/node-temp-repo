const { createReadStream } = require("fs");

const stream = createReadStream(
  "C:/AjayPractice/Full-Stack-JS/NodeJS/content/bigFile.txt",
  { highWaterMark: 90000, encoding: "utf-8" }
);

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream("C:/AjayPractice/Full-Stack-JS/NodeJS/content/bigFile.txt",{highWaterMark:90000})
// const stream = createReadStream("C:/AjayPractice/Full-Stack-JS/NodeJS/content/bigFile.txt",{encoding:'utf8'})

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
