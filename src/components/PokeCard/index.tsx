import pokeBg from '../../images/pokeBg.png';
import pokeball from '../../images/pokeball.png';

import { Container } from "./styles"
import { useEffect, useState } from 'react';
import { api } from '../../services/api';



export const PokeCard = ({ name }: any) => {
  
console.log(name)
  
  return(
    <Container>
    <div className="cardInfo">
      <span>#Id</span>
      <h1>{name}</h1>
      <p>Grass</p>
      <p>Grass</p>
    </div>
    <div className="cardImgs">
        <img className="pokeBg" src={pokeBg} alt="" />
        <img className="pokeImg" src={pokeball} alt="" />
    </div>
    </Container>
  )
}