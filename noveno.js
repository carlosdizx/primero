"use strict";

const http = require("http");

const host = "127.0.0.1";
const port = 3000;
const fs = require("fs");



const lectura = (request, response) =>{
    fs.readFile("texto.txt", async (error, data) => {
        if (error) throw error;
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.write("<h1>Texto el siguiente texto se extrajo del archivo de texto</h1>");
        response.write("<p>'"+data.toString()+"'</p>")
        response.end();
    });

}

const server = http.createServer(lectura);

server.listen(port, host, () => {
    console.log(
        "server corriendo en "+ host+" en el puerto " + port
    );
});
