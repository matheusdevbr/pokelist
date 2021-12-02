import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Pokemon {
  name: string;
}

interface PokemonsProviderProps {
  children: ReactNode
}

export const PokemonsContext = createContext<Pokemon[]>([]);

export function PokemonsProvider({children}: PokemonsProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    api.get('pokemon?offset=0&limit=50')
      .then(response => setPokemons(response.data.results))
  }, []);

  return(
    <PokemonsContext.Provider value={pokemons}>
      {children}
    </PokemonsContext.Provider>
  )
}