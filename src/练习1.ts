import { type } from "os";

type Deck = NormalCard[];
enum Color {
    heart = "♥️",
    spade = "♠️",
    club = "♦️",
    diamond = "♣️"
} 
enum Mark {
    A = "A",
    tow = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    elevent = "J",
    twelve = "Q",
    king = "K"
}
type NormalCard = {
    color: Color
    mark: number
}

function createDeck(): Deck {
    const deck: Deck = [];
    for (let index = 1; index < 13; index++) {
        deck.push({
            mark: index,
            color: Color.club
        })
        deck.push({
            mark: index,
            color: Color.diamond
        })
        deck.push({
            mark: index,
            color: Color.heart
        })
        deck.push({
            mark: index,
            color: Color.spade
        })
    }
    return deck;
}

function printDeck(deck: Deck) {
    deck.forEach((card: NormalCard) => {
        let str:string = card.color;
        if(card.mark <= 10) {
            str += card.mark
        }
        else if(card.mark === 11) {
            str += 'J'
        }
        else if(card.mark === 12) {
            str += 'Q';
        }
        else {
            str+='K'
        }
        console.log(str);
    })
}

printDeck(createDeck());