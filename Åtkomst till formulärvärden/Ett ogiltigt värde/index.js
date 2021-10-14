document.getElementById("name").value = ""

update()

document.getElementById("send").addEventListener("click", () => {
    document.getElementById("greeting").textContent = `Hej ${document.getElementById("name").value}!`
})

document.getElementById("name").addEventListener("change", update)

function update() {
    if(document.getElementById("name").value != ""){
        document.getElementById("send").disabled = false
        document.getElementById("greeting").textContent = `Hej ${document.getElementById("name").value}!`
        document.getElementById("greeting").style.display = "block"
    }else{
        document.getElementById("send").disabled = true;
        document.getElementById("greeting").style.display = "none"
    
    }
}