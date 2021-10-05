let id = prompt("id")
let name = prompt("name")

let obj = {
    "name": name,
}


fetch(`https://avancera.app/cities/${id}`, {
  body: JSON.stringify(obj),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'DELETE'
})
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })