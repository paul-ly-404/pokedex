import PokemonCard from './PokemonCard';
import PokemonDeck from './PokemonDeck';

function PokedexGrid(prop) {

  const addCard = (card) => {
    prop.addCard(card);
  };

  const removeCard = (card) => {
    prop.removeCard(card);
  };

  const saveDeck = () => {
    console.log('saving deck...');
    prop.saveDeck();
  }


  return (
    <div>
        <PokemonDeck deck={prop.deck} placeholders={prop.placeholders} addCard={addCard} removeCard={removeCard}/>
        <button onClick={saveDeck}>Save Deck</button>

        <hr/>

        <div className="pokemon-container">
            {(prop.pokemonArray.map((pokemon) => (
                <PokemonCard {...pokemon} addCard={addCard} />
            )))}
        </div>
    </div>
  );
}

export default PokedexGrid;
