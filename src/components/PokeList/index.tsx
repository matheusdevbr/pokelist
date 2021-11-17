import { Container } from './style';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { PokeCard } from '../PokeCard';

interface PokemonProps {
  id: string;
  name: string;
}

export const PokeList = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

    useEffect(() => {
    api.get('/pokemon')
    .then(response =>
    setPokemons(response.data.results))
  }, []);

  return (
    <Container>
      {pokemons.map(pokemon => (
          <PokeCard key={pokemon.name} name={pokemon.name} />
        ))}
    </Container>
    
    
  )
}