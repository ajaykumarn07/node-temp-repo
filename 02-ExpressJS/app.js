// console.log(`Express JS tutorials`);

// const http = require("http");
import http from "http";
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // console.log(`user hit the server`);
    // res.end("Home Page");
    res.writeHead(201, "Ok", { "Content-Type": "text/html" });
    res.write("<h1>Home</h1>");
  } else if (req.url === "/about") {
    res.writeHead(201, "Ok", { "Content-Type": "text/html" });
    res.write("<h1>About</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(201, "Ok", { "Content-Type": "text/html" });
    res.write("<h1>Contact</h1>");
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
  }
});

server.listen(5000, () => {
  console.log(`server listening on port no 5000`);
});
