let li = document.querySelectorAll("li")

for (let i = 0; i < li.length; i++) {
    const element = li[i];
    element.innerHTML += '<span class="credits">100 credits</span>'
}