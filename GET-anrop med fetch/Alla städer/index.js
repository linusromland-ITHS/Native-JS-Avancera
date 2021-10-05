fetch('https://avancera.app/cities/')
  .then(response => response.json())
  .then(data => console.log(data));
