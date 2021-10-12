document.addEventListener("keydown", () => {
    if (window.event.key != "Shift" && window.event.shiftKey) console.log(window.event.key)
})