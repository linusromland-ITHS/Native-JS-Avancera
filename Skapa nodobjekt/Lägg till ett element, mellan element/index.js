let item = document.createElement("li")
item.innerText = "Hello World!"
document.getElementsByTagName("ol")[0].insertBefore(item, document.getElementsByTagName("li")[2])