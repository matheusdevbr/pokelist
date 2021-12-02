import { useContext } from 'react';
import { PokemonsContext } from '../../PokemonsContext';

import { PokeCard } from '../PokeCard';

import { Container } from './style';


export function PokeList() {
  const pokemons = useContext(PokemonsContext);

  return (
    <Container>
      {pokemons.map(pokemon => (
        <>
          <PokeCard key={pokemon.name} name={pokemon.name}/>       
        </>
      ))}
        
    </Container>    
  )
}