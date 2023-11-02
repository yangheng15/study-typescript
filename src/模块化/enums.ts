import { type } from "os";

export enum Color {
heart = "♥️",
    spade = "♠️",
    club = "♦️",
    diamond = "♣️"
} 
export enum Mark {
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

export type Deck = NormalCard[];

export type NormalCard = {
    color: Color
    mark: Mark
}
