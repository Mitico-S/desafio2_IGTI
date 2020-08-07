const fs = require("fs").promisses;

fs.readFile("./json/Cidades.json").then(data =>{
  console.log(data);
});