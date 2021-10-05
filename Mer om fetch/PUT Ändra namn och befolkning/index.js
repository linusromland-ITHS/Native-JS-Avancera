let id = prompt("id")
let name = prompt("name")
let pop = prompt("pop");

let obj = {
    "id": id,
    "name": name,
    "population": parseInt(pop)
}


fetch(`https://avancera.app/cities/${id}`, {
  body: JSON.stringify(obj),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'PUT'
})
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })