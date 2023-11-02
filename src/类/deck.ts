import { Card } from "../接口/enums";
import { Color } from "../接口/enums";
import { Joker, Mark } from "./enums";

// interface PublishResult {
//     player1: Deck
//     player2: Deck
//     player3: Deck
//     left: Deck

// }

export class Deck {
    cards: Card[] = []

    constructor(card?: Card[]) {
        if(card) {
            this.cards = card;
        }else {
            this.init()
        }
    }

    private init() {
        const marks = Object.values(Mark);
        const colors = Object.values(Color);
        for (const m of marks) {
            for (const c of colors) {
                this.cards.push({
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
        this.cards.push(joker);

        joker = {
            type: 'big',
            getString() {
                return 'jo'
            }
        }
        this.cards.push(joker);
    }

    print() {
        let result = "\n";
        this.cards.forEach((card: Card, i: number) => {
            result += card.getString() + "\t";
            if ((i + 1) % 6 === 0) {
                result += "\n";
            }
        })
        console.log(result);
    }

    shuffle() {
        this.cards.forEach(it => {
            const index = this.getRandom(0, this.cards.length)
            const temp = it;
            it = this.cards[index];
            this.cards[index] = temp;
        })
        this.print();
    }

    sendDeck(): [Deck, Deck, Deck, Deck] {
        let player1: Deck, player2: Deck, player3: Deck, left: Deck
        player1 = this.takeCards(17)
        player2 = this.takeCards(17)
        player3 = this.takeCards(17)
        left = new Deck(this.cards);
        return [player1, player2, player3, left]
    }

    private takeCards(n: number): Deck {
        const cards: Card[] = [];
        for (let index = 0; index < n; index++) {
            cards.push(this.cards.shift() as Card)
        }
        return new Deck(cards)
    }

    /**
     * 【min, max)
     * @param min 
     * @param max 
     */
    private getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}