let searchString = prompt("gimme id of city")
let popString = prompt("gimmne pop")


fetch(`https://avancera.app/cities/?name=${searchString}&minPopulation=${popString}`)
  .then(response => response.json())
  .then(data => console.log(data));
