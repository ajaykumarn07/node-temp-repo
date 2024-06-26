const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   res.write("Welcome to our home page");
  //   res.end();

  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`<h1>Opps!</h1>
            <p> Can't seem to be find the page you are looking for</p>
            <a href='/'>Back Home</a>`);
  }
});

server.listen(5000);
