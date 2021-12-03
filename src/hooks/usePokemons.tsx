import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';

interface PokemonContextData {
  pokemons: Pokemon[];
  getPokemonsList: () => void;
}
interface PokemonsProviderProps {
  children: ReactNode
}
interface Pokemon {
  name: string;
  id: number;
  image: string;
  types: [];
  baseStat: [];
  nameStat: [];
}

interface PokemonTypes {
  type: {
    name: string;
  }
}

interface PokemonBaseStat {
  base_stat: number;
}

interface PokemonNameStat {
  stat: {
    name: string;
  }
}

export const PokemonsContext = createContext<PokemonContextData>({} as PokemonContextData);

export function PokemonsProvider({children}: PokemonsProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  

  async function getPokemonsList() {
    const response = await api.get('pokemon?offset=0&limit=10');

    const { results } = response.data;

    let pokemonList = [];

    for ( let pokemon of results) {
      const response = await api.get(pokemon.url);

      const { name, id, sprites, types, stats } = response.data;

      const pokemonInfo = { 
        name, 
        id, 
        image: sprites.other['official-artwork'].front_default,
        types: types.map((type: PokemonTypes) => type.type.name),
        baseStat: stats.map((stat: PokemonBaseStat) => stat.base_stat),
        nameStat: stats.map((stat: PokemonNameStat) => stat.stat.name),
      }

      pokemonList.push(pokemonInfo);      
    }

    setPokemons(pokemonList);

  }
  
    
     

  return(
    <PokemonsContext.Provider value={{pokemons, getPokemonsList}}>
      {children}
    </PokemonsContext.Provider>
  )
}

export const usePokemon = () => {
  const context = useContext(PokemonsContext);

  return context;
}     