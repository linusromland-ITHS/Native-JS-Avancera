card = (value, suit) => {
    let object = {
        suit: suit,
        value: value,
    }
    return object
}

let aceOfHearts = card(1, "HEARTS")
console.log(aceOfHearts)