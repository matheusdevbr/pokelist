import { useEffect } from 'react';
import { usePokemon } from '../../hooks/usePokemons';

import { PokeCard } from '../PokeCard';

import { Container } from './style';


export function PokeList() {

  const { getPokemonsList, pokemons } = usePokemon();

  useEffect(() => {
    getPokemonsList()
  }, []);

  

  return (
    <Container>
      {pokemons.map(pokemon => (
        <PokeCard 
          key={pokemon.name}
          id={pokemon.id} 
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
          baseStat={pokemon.baseStat}
          nameStat={pokemon.nameStat}
        />       
      ))}
        
    </Container>    
  )
}