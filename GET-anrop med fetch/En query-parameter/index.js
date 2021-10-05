let searchString = prompt("gimme id of city")

fetch(`https://avancera.app/cities/?name=${searchString}`)
  .then(response => response.json())
  .then(data => console.log(data));
