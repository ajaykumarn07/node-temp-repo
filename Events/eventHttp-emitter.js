const http = require("http");

// using event emitter
const server = http.createServer();

// emit request event
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
