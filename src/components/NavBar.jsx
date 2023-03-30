function NavBar ({pokemonIndex, setPokemonIndex, pokemonList}){
    /* const previously = () => {

        if (pokemonIndex <= 0) {

          //faux
        } else {
          
          setPokemonIndex(pokemonIndex - 1)
        }
    
      }
    
    
    const next = () => {

        if (pokemonIndex >= pokemonList.length - 1) {
    
          //faux
        } else {
          
          setPokemonIndex(pokemonIndex + 1)
        }
    }
    
    if (pokemon.name === "pikachu"){
        alert("pika pikachu !!!")
    } */
    
    const handleClick = (pkmn) => {
        
        switch(pkmn.name) {
            case 'bulbasaur':
                pokemonIndex = 0;
                setPokemonIndex(pokemonIndex)
                console.log(pkmn.name)
                console.log(pokemonIndex)
                break;
            case 'charmander':
                pokemonIndex = 1;
                setPokemonIndex(pokemonIndex)
                console.log(pkmn.name)
                console.log(pokemonIndex)
                break;
            case 'squirtle':
                pokemonIndex = 2;
                setPokemonIndex(pokemonIndex)
                console.log(pkmn.name)
                console.log(pokemonIndex)
                break;
            case 'pikachu':
                pokemonIndex = 3;
                setPokemonIndex(pokemonIndex)
                console.log(pkmn.name)
                console.log(pokemonIndex)
                break;
            case 'mew':
                pokemonIndex = 4;
                setPokemonIndex(pokemonIndex)
                console.log(pkmn.name)
                console.log(pokemonIndex)
                break;
            default:
                alert('sorry we have a problem with the pokedex')
    }
    }
    return (
        <>
        <div>
      {pokemonList.map((pkmn) => (
        <button className="pkmnBtn" key={pkmn.name} onClick={() => handleClick(pkmn)}>
          {pkmn.name}
        </button>
      ))}
    </div>
        </> 
        
    )
    
}


export default NavBar