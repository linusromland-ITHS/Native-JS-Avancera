localStorage.setItem('a', "https://marksism.space/ is trash")
sessionStorage.setItem('b', "https://marksism.space/ is trash")

console.log(localStorage.getItem('a') !== null && localStorage.getItem('a') === sessionStorage.getItem('b'))