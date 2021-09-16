"use strict";

const fs = require("fs");

fs.readFile("texto.txt", async (error, data) => {
  if (error) throw error;
  await console.log(data.toString());
});
console.log("finalizacion")
