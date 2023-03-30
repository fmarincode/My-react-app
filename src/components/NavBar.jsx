function NavBar ({disabledBtnNext, disabledBtnPrevious, setDisabledBtnNext, setDisabledBtnPrevious, pokemonIndex, setPokemonIndex, pokemonList, pokemon}){
    const previously = () => {

        if (pokemonIndex <= 0) {
          setDisabledBtnPrevious(true)
        } else {
          setDisabledBtnNext(false)
          setPokemonIndex(pokemonIndex - 1)
        }
    
      }
    
    
      const next = () => {

        if (pokemonIndex >= pokemonList.length - 1) {
    
          setDisabledBtnNext(true)
        } else {
          setDisabledBtnPrevious(false)
          setPokemonIndex(pokemonIndex + 1)
        }
    }
    
    if (pokemon.name === "pikachu"){
        alert("pika pikachu !!!")
    }

    return (
        <>
        <button disabled={disabledBtnPrevious} onClick={previously}>Previous</button>
        <button disabled={disabledBtnNext} onClick={next}>Next</button>
        </>
        
    )
}


export default NavBar