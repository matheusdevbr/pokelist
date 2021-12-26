import { useEffect } from 'react';
import { usePokemon } from '../../hooks/usePokemons';

import { PokeCard } from '../../components/PokeCard';
import { LogoTitle } from '../../components/LogoTitle';

import { Container } from './style';
import { SearchInput } from '../../components/SearchInput';


export function Home() {

  const { getPokemonsList, pokemons } = usePokemon();

  useEffect(() => {
    getPokemonsList()
  });

  

  return (
    <>
    <LogoTitle />
    <SearchInput />
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
    </>  
  )
}