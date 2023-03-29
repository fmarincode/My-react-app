import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"




const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];






function App() {
  //states
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const [disabledBtnPrevious, setDisabledBtnPrevious] = useState(false)
  const [disabledBtnNext, setDisabledBtnNext] = useState(false)
  //manipulation
  let pokemon = pokemonList[pokemonIndex]




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
  //render
  return (
    <>
      <div>
        <PokemonCard data={pokemon} />
      </div>
      <button disabled={disabledBtnPrevious} onClick={previously}>Previous</button>
      <button disabled={disabledBtnNext} onClick={next}>Next</button>
    </>


  );
}

export default App;
