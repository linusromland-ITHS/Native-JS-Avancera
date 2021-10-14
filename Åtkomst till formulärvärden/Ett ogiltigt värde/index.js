let button = document.getElementById("send")
button.disabled = true;
let name = document.getElementById("name")
let greeting = document.getElementById("greeting")
let error = document.getElementById("errors")

if(name.value.length < 1) error.style.display = "block"

if(name.value.length > 0) {
    greeting.innerText = `Hej ${name.value}!`
    button.disabled = false;
}

button.addEventListener('click', () =>{
    greeting.innerText = `Hej ${name.value}!`
})

name.addEventListener('input', (e) =>{
    if(e.target.value.length < 1) {
        button.disabled = true;
        error.style.display = "block"
    } else {
        button.disabled = false;
        error.style.display = "none"
    }
})