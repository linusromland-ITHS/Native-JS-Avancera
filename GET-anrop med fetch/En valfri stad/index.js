let cityID = prompt("gimme id of city")

fetch(`https://avancera.app/cities/${cityID}`)
  .then(response => response.json())
  .then(data => console.log(data));
