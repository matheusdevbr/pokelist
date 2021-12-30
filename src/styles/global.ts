import { createGlobalStyle } from "styled-components";
import media from 'styled-media-query';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f8f2f5;  
  }

  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #333;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.9);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;  

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    height: 100%;
    max-width: 60rem;
    max-height: 41rem;

    background: #a9a9a9;

    padding: 2rem;
    position: relative;
    border-radius: 0.5rem;

    display: grid;
    grid-template-columns: 1fr 2fr;

  
    h2 {
      text-transform: capitalize;
      margin-left:-5px;
      margin-right: 10px;
      margin-bottom: 5px;
      font-size: 2.3rem;
    }

    h4 {
      font-weight: 400;
      text-align: center;
      width: 5rem;
      border: 1px solid;
      border-radius: 40px;

      & + h4 {
        margin-top: 10px;
      }
    }

    img {
      max-width: 25rem;

      ${media.lessThan('medium')`
        width: 100%;
    
      `};
    }
  }

`