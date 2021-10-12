let num = 1
document.getElementById("value").textContent = num
document.getElementById("increase").onclick = () => {
    num++;
    document.getElementById("value").textContent = num
}

document.getElementById("decrease").onclick = () => {
    num--;
    document.getElementById("value").textContent = num
}