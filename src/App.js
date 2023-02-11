import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokedexGrid from './PokedexGrid';

function App() {
  const [gridData, setGrid] = useState(null);
  let [deck, setDeck] = useState([]);
  let [placeholders, setPlaceholders] = useState([]);

  const updateDeck = (card) => {

    if (deck.filter((x) => (x.id == card.id)).length) {
      console.log(card.name + ' already in deck.');
    } else {
      if (deck.length < 5) {
        deck = [...deck, card];
        setDeck(deck);
        console.log(card.name + ' added to deck.');
        console.log('calculated placeholders: ' + (5 - deck.length));
        placeholders = [];

        for (let i = deck.length; i < 5; i++) {
          placeholders.push({});
        }
        setPlaceholders(placeholders);
      } else {
        console.log('too many cards in deck.');
      }
      
    }
    
    console.log('deck in app.js', deck);

  };

  const removeCard = (card) => {
    
    deck = deck.filter(function( obj ) {
      return obj.id !== card.id;
    });
    setDeck(deck);

    placeholders = [];
    for (let i = deck.length; i < 5; i++) {
      placeholders.push({});
    }
    setPlaceholders(placeholders);

    console.log('deck in app.js', deck);

  };

  const saveDeck = () => {
    console.log('save deck in app.js', deck);
    localStorage.setItem('selectedCards', JSON.stringify(deck));
  };

  useEffect(() => {

    deck = JSON.parse(localStorage.getItem('selectedCards'));
    if (!deck) {
      console.log('deck exists', deck);
      deck = [];
    }
    setDeck(deck);

    for (let i = deck.length; i < 5; i++) {
      placeholders.push({});
    }
    console.log('app.js calculated placeholders ' + placeholders);
    setPlaceholders(placeholders);

    axios.get('http://localhost:3001/v1/grid/')
      .then(response => {
        setGrid(response.data);
        console.log('RETRIEVE DATA SUCCESS>>>>>>>>>>>>>', response.data);
      })
      .catch(error => {
        console.error(error);
        console.log('DEFINITELY AN ERROR');
      });
  }, []);

  return (
    <div className="App">
      <h1>POKEDEX</h1>

      {gridData &&
        <PokedexGrid pokemonArray={gridData} deck={deck} updateDeck={updateDeck} saveDeck={saveDeck} placeholders={placeholders} removeCard={removeCard}/>
      }

    </div>

    
  );
}

export default App;
