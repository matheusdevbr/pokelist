import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { PokeCard } from '../PokeCard';

import { Container } from './style';
interface PokemonsProps {
  name: string;
}

export function PokeList() {
  const [pokemons, setPokemons] = useState<PokemonsProps[]>([]);


  useEffect(() => {
    api.get('pokemon')
    .then(response =>
    setPokemons(response.data.results))
  }, []);

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