import PokemonCard from './PokemonCard';
import PokemonDeck from './PokemonDeck';

function PokedexGrid(prop) {

  const updateDeck = (card) => {
    prop.updateDeck(card);
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
        <PokemonDeck deck={prop.deck} placeholders={prop.placeholders} updateDeck={updateDeck} removeCard={removeCard}/>
        <button onClick={saveDeck}>Save Deck</button>

        <hr/>

        <div className="pokemon-container">
            {(prop.pokemonArray.map((pokemon) => (
                <PokemonCard {...pokemon} updateDeck={updateDeck} />
            )))}
        </div>
    </div>
  );
}

export default PokedexGrid;
