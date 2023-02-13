import PokemonCard from './PokemonCard';

function PokemonDeck(prop) {

    const addCard = (card) => {
        console.log('adding card to deck', card);
        prop.addCard(card);
      };
    
      const removeCard = (card) => {
        console.log('remove card from deck', card);
        prop.removeCard(card);
      };

  return (
    <div className="pokemon-container deck">
        {(prop.deck.map((card) => (
            <PokemonCard {...card} addCard={addCard} removeCard={removeCard}/>
        )))}
        {(prop.placeholders.map(() => (
             <PokemonCard/>
        )))}
    </div>
  );
}

export default PokemonDeck;
