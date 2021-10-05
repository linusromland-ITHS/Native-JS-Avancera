let city = prompt("city")
let pop = prompt("pop")

let cityInfo = {
    "name": city,
    "population": parseInt(pop)
}

console.log(cityInfo)

fetch('https://avancera.app/cities/', {
  body: JSON.stringify(cityInfo),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
})
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })