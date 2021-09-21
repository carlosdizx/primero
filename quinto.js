"use strict";
const http = require("http");

const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });

  response.write("<h1>Te amo mi vida</h1>");
  response.write("<h2>Te amo michell</h2>");
  response.write("<h2>Te amo michi</h2>");
  response.end()
});

server.listen(port, host, () => {
  console.log(
    "server corriendo en el puerto " + port + " del servidor " + host
  );
});
