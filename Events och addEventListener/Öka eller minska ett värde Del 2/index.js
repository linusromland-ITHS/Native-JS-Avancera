let num = 1
const value = document.getElementById("value")
value.textContent = num

const increaseButton = document.getElementById("increase")
const decreaseButton = document.getElementById("decrease")
decreaseButton.setAttribute("disabled", true)

increaseButton.onclick = () => {
    num++;
    value.textContent = num
    if(num > 1) decreaseButton.removeAttribute("disabled")

}

decreaseButton.onclick = () => {
    num--;
    value.textContent = num
    if(num <= 1) decreaseButton.setAttribute("disabled", true)
}