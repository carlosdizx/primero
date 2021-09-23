"use strict";
const http = require("http");

const host = "127.0.0.1";
const port = 3000;

const controller = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.write("<h1>Te amo mi vida</h1>");
  response.write("<h2>Te amo 🥵😈</h2>");
  response.write("<h3>Te amo michi</h3>");
  response.end();
};

const server = http.createServer(controller);

server.listen(port, host, () => {
  console.log(
    "server corriendo en el puerto " + port + " del servidor " + host
  );
});
