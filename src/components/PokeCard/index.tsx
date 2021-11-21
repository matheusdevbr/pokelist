import pokeBg from '../../images/pokeBg.png';
import pokeball from '../../images/pokeball.png';

import { Container } from "./styles"
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface PokemonTypesProps {
  name: string;
}

interface PokemonProps {
  id: number;
  image: string;
  // types: PokemonTypesProps[];
}

export const PokeCard = ({ name }: any) => {
  const [pokemon, setPokemon] = useState<PokemonProps>({} as PokemonProps);
  
  useEffect(() => {
    api.get(`pokemon/${name}`)
    .then(response => {
      const { id, types, sprites } = response.data;
      setPokemon({
        id,
        image: sprites.other['official-artwork'].front_default,
        // types: types.map()
      })
      
    }
    
      
     
  )}, [name]);
  
  return(
    <Container>
    <div className="cardInfo">
      <span>#{pokemon.id}</span>
      <h1>{name}</h1>

    </div>
      <div className="cardImgs">
        <img className="pokeBg" src={pokeBg} alt="" />
        <img className="pokeImg" src={pokemon.image} alt="" />
    </div>
    </Container>
  )
}