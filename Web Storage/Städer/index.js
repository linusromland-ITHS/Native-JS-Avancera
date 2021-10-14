fetch('https://avancera.app/cities/')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("cities", JSON.stringify(data));
    });
