import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

function PokemonDeck(prop) {

    const updateDeck = (card) => {
        console.log('adding card to deck', card);
        prop.updateDeck(card);
      };
    
      const removeCard = (card) => {
        console.log('remove card from deck', card);
        prop.removeCard(card);
      };

  return (
    <div className="pokemon-container deck">
        {(prop.deck.map((card) => (
            <PokemonCard {...card} updateDeck={updateDeck} removeCard={removeCard}/>
        )))}
        {(prop.placeholders.map(() => (
             <PokemonCard/>
        )))}
    </div>
  );
}

export default PokemonDeck;
