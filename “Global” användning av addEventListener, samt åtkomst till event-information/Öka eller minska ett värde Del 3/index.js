let num = 1
const value = document.getElementById("value")
value.textContent = num

const increaseButton = document.getElementById("increase")
const decreaseButton = document.getElementById("decrease")
decreaseButton.setAttribute("disabled", true)

increaseButton.onclick = () => increase()
decreaseButton.onclick = () => decrease()

document.addEventListener("keydown", () => {
    const e = window.event
    if(e.key == "ArrowUp") increase()
    if(e.key == "ArrowDown") decrease()
})

increase = () => {
    num++;
    value.textContent = num
    if(num > 1) decreaseButton.removeAttribute("disabled")
}

decrease = () => {
    if(!(num <= 1)){
        num--;
        value.textContent = num
    }
    if(num <= 1) decreaseButton.setAttribute("disabled", true)
}