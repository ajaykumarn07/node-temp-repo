const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync(
    //   "C:/AjayPractice/Full-Stack-JS/NodeJS/content/bigFile.txt",
    //   "utf-8"
    // );
    // res.end(text);
    const fileStream = fs.createReadStream(
      "C:/AjayPractice/Full-Stack-JS/NodeJS/content/bigFile.txt",
      "utf-8"
    );
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      console.log(err);
      res.end(err);
    });
  })
  .listen(5000);
