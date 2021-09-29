let deck = [];
let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']

card = (value, suit) => {
    let object = {
        suit: suit,
        value: value,
    }
    return object
}

for (let i = 0; i < suits.length; i++) {
    for (let j = 1; j <= 13; j++) {
        deck.push(card(j, suits[i]))
    }
}

console.log(deck)