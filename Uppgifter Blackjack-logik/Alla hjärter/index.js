let hearts = [];

card = (value, suit) => {
    let object = {
        suit: suit,
        value: value,
    }
    return object
}

for (let i = 1; i <= 13; i++) {
    hearts.push(card(i, "HEARTS"))
}

console.log(hearts)