import pokeBg from '../../images/pokeBg.png';

import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { PokeDetailsModal } from '../PokeDetailsModal';

import { Container } from "./styles"

interface PokemonsProps {
  name: string;
}
interface PokemonTypesProps {
  name: string;
}

interface PokemonInfoProps {
  id: number;
  image: string;
  types: PokemonTypesProps[];
}

export function PokeCard({name}: PokemonsProps) {
  const [pokemon, setPokemon] = useState<PokemonInfoProps>({} as PokemonInfoProps);
  const [isPokeDetailsModalOpen, setisPokeDetailsModalOpen] = useState(false);

  useEffect(() => {
    api.get(`pokemon/${name}`)
      .then(response => {
        const { id, types, sprites } = response.data;
        setPokemon({
          id,
          image: sprites.other['official-artwork'].front_default,
          types: types.map((type: { type: any; }) => type.type.name).join(" - "),
        })

      }



      )
  }, [name]);

  function handleOpenPokeDetailsModal() {
    setisPokeDetailsModalOpen(true)
  }

  function handleClosePokeDetailsModal() {
    setisPokeDetailsModalOpen(false)
  }

  return (
    <>
    
      <Container onClick={handleOpenPokeDetailsModal}>

        <div className="cardInfo">
          <span>#{pokemon.id}</span>
          <h1>{name}</h1>
          <p>{pokemon.types}</p>
        </div>

        <div className="cardImgs">
          <img className="pokeBg" src={pokeBg} alt="" />
          <img className="pokeImg" src={pokemon.image} alt="" />
        </div>
        
      </Container>

      <PokeDetailsModal 
        name={name} 
        isOpen={isPokeDetailsModalOpen}
        onRequestClose={handleClosePokeDetailsModal} 
      />

    </>
  )
}