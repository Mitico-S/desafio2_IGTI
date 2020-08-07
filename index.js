import {promises as fs } from "fs";

createFiles();

  async function createFiles() {  
    data = await fs.readFile("./json/Estados.json");
    const states = JSON.parse(data);

    let data = await fs.readFile("./json/Cidades.json");
    const cities = JSON.parse(data);
      
    for (state of states) {
      const stateCities = cities.filter(city.Estado === state.ID);
      await fs.writeFile(`./states/${state.Sigla}.json`, JSON.stringify(stateCities));
    }
console.log(states);
}