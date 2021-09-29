score = (cards) => {
    let score = 0;
    let aces = 0;
    cards.forEach(card => {
        if (card.value == 1) {
            aces++;
            return;
        }
        if (card.value > 10) {
            score += 10;
            return;
        }
        score += card.value
    });

    let tmp = 21 - score;

    for (let i = 0; i < aces; i++) {
        let sum = score;
        sum += (aces - i) * 11
        sum += i;
        if(sum <= 21){
            return sum;
        };
    }

    return score + aces;
}
