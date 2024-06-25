const { readFile, writeFile } = require("fs");

console.log("start");
readFile(
  "C:/AjayPractice/Full-Stack-JS/NodeJS/content/first.txt",
  "utf-8",
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    const first = result;
    readFile(
      "C:/AjayPractice/Full-Stack-JS/NodeJS/content/second.txt",
      "utf-8",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        const second = result;
        writeFile(
          "C:/AjayPractice/Full-Stack-JS/NodeJS/content/result-async.txt",
          `Here is the result ${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log("done with the task");
          }
        );
      }
    );
  }
);
