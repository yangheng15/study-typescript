import { Deck } from "./deck";


const deck = new Deck();
deck.print();
deck.shuffle();
console.log('洗牌之后');
const result = deck.sendDeck();
console.log(result[0]);
