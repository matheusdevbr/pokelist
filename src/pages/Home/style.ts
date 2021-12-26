import styled from "styled-components"
import media from 'styled-media-query';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  
  padding: 100px;
  
  ${media.lessThan('huge')`
    grid-template-columns: repeat(2, 1fr);
    
  `};
 
  ${media.lessThan('large')`
    grid-template-columns: 1fr;
    padding: 0.5rem;
  `}
 
  
`