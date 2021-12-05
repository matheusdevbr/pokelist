import styled from "styled-components";
import media from 'styled-media-query';

interface DominantColorPokeImgProps {
  dominantColorPokeImg: string | any;
}

export const Container = styled.div<DominantColorPokeImgProps>`
  width: inherit;
  padding: 1.5rem;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;

  cursor: pointer;
  transition: filter 0.2s;

  background-color: ${props => props.dominantColorPokeImg !== "#2b272c" ? props.dominantColorPokeImg : '#777' };

  

  &:hover {
    filter: brightness(0.9);
  }

  p {
    max-width: 5rem;
    text-align: center;
    border: 1px solid ;
    border-radius: 40px;

    & + p {
      margin-top: 10px;
    }
  }
  
  h2 {
    text-transform: capitalize;
    min-width: 12.5rem;
    margin-bottom: 1rem;
  }
 
  .pokeBg {
    width: 150px;
    height: 150px;
    margin-right: -9rem;

    ${media.lessThan('large')`
      margin-right: -9rem;
    `}

    ${media.lessThan('small')`
      margin-bottom: -2rem;
    `}
  }

  .pokeImg {  
    width: 140px;
    height: 140px;
    margin-top: -10rem;

    ${media.lessThan('large')`
      margin-left: -1rem;
      
    `}

    ${media.lessThan('small')`
      margin-left: 0.5rem;
    `}
  }
`