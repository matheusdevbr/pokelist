import { useState } from 'react';
import { useColor } from 'color-thief-react';

import { PokeDetailsModal } from '../PokeDetailsModal';

import pokeBg from '../../images/pokeBg.png';

import { Container } from "./styles"

interface PokemonProps {
  name: string;
  id: number;
  image: string;
  types: string[];
  nameStat: string[];
  baseStat: number[];
}



export function PokeCard({name, id, image, types, nameStat, baseStat}: PokemonProps) {
  const [isPokeDetailsModalOpen, setisPokeDetailsModalOpen] = useState(false);
  const { data } = useColor(image, 'hex', {crossOrigin: 'CanvasRenderingContext2D'});
  const dominantColorPokeImg = data;
  

  function handleOpenPokeDetailsModal() {
    setisPokeDetailsModalOpen(true)
  }

  function handleClosePokeDetailsModal() {
    setisPokeDetailsModalOpen(false)
  }

  return (
    <>
      <Container
        onClick={handleOpenPokeDetailsModal}
        dominantColorPokeImg={dominantColorPokeImg}
      >

        <div className="cardInfo">
          <span>#{id}</span>
          <h2>{name}</h2>
          {types.map(type => (<p key={type}>{type}</p>)) }
        </div>

        <div className="cardImgs">
          <img className="pokeBg" src={pokeBg} alt="Imagem da pokeball de background" />
          <img className="pokeImg" src={image} alt={`Imagem do pokemon ${name}`} />
        </div>

      </Container>

      <PokeDetailsModal
        name={name}
        image={image}
        types={types}
        nameStat={nameStat}
        baseStat={baseStat}
        isOpen={isPokeDetailsModalOpen}
        onRequestClose={handleClosePokeDetailsModal}
      />
    </>
  )
}