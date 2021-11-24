import styled from "styled-components";

export const Container = styled.div`
  width: 25rem;
  height: 12rem;
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;

  cursor: pointer;

  background: #62B957;
  
 
  h1 {
    text-transform: capitalize;
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
    position: relative;
    z-index: 50;
    width: 140px;
    height: 140px;
    margin-top: -10rem;
    margin-left: 0.4rem;
  }

`