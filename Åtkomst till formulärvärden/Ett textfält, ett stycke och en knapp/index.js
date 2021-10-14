document.getElementById("send").addEventListener("click", () => {
    document.getElementById("greeting").textContent = `Hej ${document.getElementById("name").value}!`
})