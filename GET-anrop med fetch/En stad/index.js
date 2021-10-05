fetch('https://avancera.app/cities/4787e794-b3ac-4a63-bba0-03203f78e553')
  .then(response => response.json())
  .then(data => console.log(data));
