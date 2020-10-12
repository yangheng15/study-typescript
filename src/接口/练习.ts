import { Color, Mark, Deck, NormalCard, Card, Joker } from "./enums";

function createDeck(): Deck {
    const deck: Deck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
        for (const c of colors) {
            // const card = {
            //     color: c,
            //     mark: m,
            //     getString() {
            //         return this.color + this.mark;
            //     }
            // }
            // deck.push(card)
            deck.push({
                color: c,
                mark: m,
                getString() {
                    return c + m;
                }
            } as Card)
        }
    }

    let joker: Joker = {
        type: 'small',
        getString() {
            return 'jo' 
        }
    }
    deck.push(joker);

    joker = {
        type: 'big',
        getString() {
            return 'jo' 
        }
    }
    deck.push(joker);

    return deck;
}

function printDeck(deck: Deck) {
    let result = "\n";
    deck.forEach((card: Card, i: number) => {
        result += card.getString() + "\t";
        if((i + 1) % 6 === 0) {
            result += "\n";
        }
    })
    console.log(result);
    
}

printDeck(createDeck());