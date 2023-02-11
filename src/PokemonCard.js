function PokemonCard(prop) {

  const handleAddClick = () => {
    prop.updateDeck(prop);    
  };

  const handleRemoveClick = () => {
    prop.removeCard(prop);
  };

  return (
    <div className={`pokemon-card ${prop.id ? "" : "empty"}`} data-id={prop.id} onClick={!prop.removeCard && prop.updateDeck ? handleAddClick : undefined}>
        <div className={prop.removeCard ? "close" : "" } style={{visibility: prop.removeCard ? 'visible' : 'hidden'}} onClick={prop.removeCard ? handleRemoveClick : undefined }>x</div>
        <img src={prop.sprite} alt={prop.name ? prop.name : ""}></img>
        
        <div>
            <p><span className="name">{prop.name ? prop.name : ""}</span></p>
            <p>{prop.types ? prop.types.join(', ') : ""}</p>
        </div>

    </div>
  );
}

export default PokemonCard;
