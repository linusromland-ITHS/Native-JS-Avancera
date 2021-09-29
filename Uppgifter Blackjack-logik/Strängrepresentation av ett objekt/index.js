let suits = {
    HEARTS: "♥",
    SPADES: "♠",
    DIAMONDS: "♦",
    CLUBS: "♣"
}

let numbers = {
    1: "A",
    10: "T",
    11: "J",
    12: "Q",
    13: "K"
}

card = (value, suit) => {
    let object = {
        suit: suit,
        value: value,
    }
    return object
}

prettyCard = (object) => {
    let pretty = numbers[object.value] ? numbers[object.value] : object.value;
    pretty += suits[object.suit];
    return pretty;
}

console.log(prettyCard(card(1, "HEARTS")))