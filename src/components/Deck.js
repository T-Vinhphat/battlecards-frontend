import React from "react";
import "./Deck.css";

export function Deck(deck) {
  return (
    <div className="deck">
      <div>
        <img className="firstCard" src={deck.cards[0].imgSrc} />
      </div>
      <div className="deckName">
        <h4>Name : {deck.name}</h4>
      </div>
    </div>
  );
}
