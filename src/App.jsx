import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"




function App() {
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
  
  //states
  const [pokemonIndex, setPokemonIndex] = useState(0)
 

  /* useEffect(
    () =>  {
      alert("hello pokemon trainer :)")
    }, 
    []
 ); */
  

  //manipulation
  let pokemon = pokemonList[pokemonIndex]


  //render
  return (
    <>
    
      <div>
        <PokemonCard data={pokemon} />
        <NavBar 
        pokemonIndex ={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList ={pokemonList}/>
      </div>
      
      
    </>


  );
}

export default App;
