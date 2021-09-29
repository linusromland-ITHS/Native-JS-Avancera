card = (value, suit) => {
    let object = {
        suit: suit,
        value: value,
    }
    return object
}

createDeck = () => {
    let deck = [];
    let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']
    for (let i = 0; i < suits.length; i++) {
        for (let j = 1; j <= 13; j++) {
            deck.push(card(j, suits[i]))
        }
    }
    return deck;
}

let deck = createDeck()

draw = (deck) => {
    return deck.pop();
}

shuffle = (deck) => {
    let m = deck.length,
        t, i;

    while (m) {

        i = Math.floor(Math.random() * m--);

        t = deck[m];
        deck[m] = deck[i];
        deck[i] = t;
    }
}

console.log(deck);

shuffle(deck);

console.log(deck);