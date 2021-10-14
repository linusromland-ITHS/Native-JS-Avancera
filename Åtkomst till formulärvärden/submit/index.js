let form = document.getElementById("form")
console.log(form)
let button = form.children[3]
user = document.getElementById("name")
consent = document.getElementById("consent")
greeting = document.getElementById("greeting")
error = document.getElementById("errors")
userError = document.getElementById("name-error")
consentError = document.getElementById("consent-error")

if(user.value.length > 0 && consent.checked == true) {
greeting.innerText = `Hej ${user.value}!`
button.disabled = false
} else {
error.style.display = "block"
button.disabled = true
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    greeting.innerText = `Hej ${user.value}!`
})

user.addEventListener('input', () =>{
errorCheck(user.value, consent.checked)
})

consent.addEventListener('input', () =>{
errorCheck(user.value, consent.checked)
})

errorCheck = (textIn, consentIn) => {
let validText = (textIn.length > 0)
console.log(validText)
if(validText && consentIn) {
    button.disabled = false;
    error.style.display = "none"
    userError.hidden = false;
    consentError.hidden = false;
} else {
    button.disabled = true;
    error.style.display = "block"
    userError.hidden = (!validText) ? false : true
    consentError.hidden = (!consentIn) ? false : true
}
}
