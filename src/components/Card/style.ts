import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  
  padding: 100px;

  .card {
    width: 23rem;
    height: 12rem;
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;

    background: #62B957;

    .cardImgs {
      padding-left: 1rem;
    }

    .pokeBg {
      width: 150px;
      height: 150px;
      margin-bottom: -2.3rem;
      
    }

    .pokeImg{
      position: relative;
      z-index: 50;
      width: 120px;
      height: 120px;
      margin-top: -10rem;
      margin-left: 0.9rem;
    }

  }
`