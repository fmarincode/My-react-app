/* import PropTypes from "prop-types";

 PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
} */


function PokemonCard({data}) {


  const pokemon = data
  //console.log(pokemon.imgSrc)

  return pokemon.imgSrc !== undefined ? <figure>
    <img
      src={pokemon.imgSrc}
      alt={pokemon.name}
    />
    <figcaption>{pokemon.name}</figcaption>
  </figure>                     : <figure>
    <p>???</p>
    <figcaption>{pokemon.name}</figcaption>
  </figure>

}



export default PokemonCard;



