const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise(
      "C:/AjayPractice/Full-Stack-JS/NodeJS/content/first.txt",
      "utf-8"
    );
    const second = await readFilePromise(
      "C:/AjayPractice/Full-Stack-JS/NodeJS/content/second.txt",
      "utf-8"
    );
    await writeFilePromise(
      "C:/AjayPractice/Full-Stack-JS/NodeJS/content/mind-granade-result.txt",
      `This is Awesome => ${first}, and ${second}`,
      { flag: "a" }
    );
    console.log(`${first}, \n${second}`);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         //   console.log(data);
//         resolve(data);
//       }
//     });
//   });
// };

// getText("C:/AjayPractice/Full-Stack-JS/NodeJS/content/first.txt")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
