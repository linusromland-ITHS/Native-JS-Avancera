let id = prompt("id");
let name = prompt("name");
let pop = prompt("pop");

let obj = {};

if(name) obj.name = name;
if(pop) obj.population = parseInt(pop);

console.log(obj)

if(id && !(!name && !pop)){
    fetch(`https://avancera.app/cities/${id}`, {
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        });
      
}

