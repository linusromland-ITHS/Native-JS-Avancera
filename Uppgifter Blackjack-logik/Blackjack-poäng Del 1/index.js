score = (cards) => {
    let score = 0;
    cards.forEach(card => {
        if(card.value == 1){
            score += 11;
            return;
        }
        if(card.value > 10){
            score += 10;
            return;
        }
        score += card.value
    });
    return score;
}