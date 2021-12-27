import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.header`
  width: 100%;
  display: flex;
  text-align: center;
  .headerImg {
    width: 98.9vw;
  }

  .pokeballImg {
    align-self: center;
    width: 100%;
    max-width: 5rem;
    height: 100%;
    max-height: 5rem;

    margin-left: -52.5vw;

    ${media.lessThan('small')`
      margin-left: -15.5rem;
    `}
  }
`