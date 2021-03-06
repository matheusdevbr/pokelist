import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';

interface PokemonContextData {
  pokemons: Pokemon[];
  getPokemonsList: () => void;
  searchPokemon: (inputData: string) => void;
}
interface PokemonsProviderProps {
  children: ReactNode
}
interface Pokemon {
  name: string;
  id: number;
  image: string;
  types: [];
  nameStat: [];
  baseStat: [];
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

const PokemonsContext = createContext<PokemonContextData>({} as PokemonContextData);

export function PokemonsProvider({children}: PokemonsProviderProps) {
  const [initialPokemons, setInitialPokemons] = useState<Pokemon[]>([]);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  

  async function getPokemonsList() {
    const response = await api.get('pokemon?offset=0&limit=100');

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
    setInitialPokemons(pokemonList);
    setPokemons(pokemonList);

  }

  function searchPokemon(inputData: string) {
    if (!inputData) {
      setPokemons(initialPokemons);
      return;
    }

    try {
      const PokemonFiltered = pokemons.filter(({ name }) => name.includes(inputData));
    
      setPokemons(PokemonFiltered);
      return;
    } catch (err) {
      console.log(err);
      return;
    }
  }
  
  return(
    <PokemonsContext.Provider value={{pokemons, getPokemonsList, searchPokemon}}>
      {children}
    </PokemonsContext.Provider>
  )
}

export const usePokemon = () => {
  const context = useContext(PokemonsContext);

  return context;
}     