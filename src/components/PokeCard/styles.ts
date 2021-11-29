import styled from "styled-components";

/* interface DominantColorPokeImgProps {
  dominantColorPokeImg: string;
} */
export const Container = styled.div`
  width: 25rem;
  height: 12rem;
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;

  cursor: pointer;
  transition: filter 0.2s;

  /* background-color: ${props => props.dominantColorPokeImg}; */

  &:hover {
    filter: brightness(0.9);
  }
  
  h2 {
    min-width: 12.5rem;
    margin-bottom: 1.5rem;
  }

  .cardImgs {
    padding-left: 1rem;
  }

  .pokeBg {
    width: 150px;
    height: 150px;
    margin-bottom: -2.3rem;
  }

  .pokeImg {  
    width: 140px;
    height: 140px;
    margin-top: -10rem;
    margin-left: 0.4rem;
  }

`