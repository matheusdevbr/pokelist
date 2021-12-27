import { FormEvent, useState } from "react";
import { usePokemon } from "../../hooks/usePokemons";

import lupa from "../../images/lupa.png";

import { Container } from "./style";

export function SearchInput() {
  const { searchPokemon } = usePokemon();
  const [inputData, setInputData] = useState('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchPokemon(inputData);
    
  }

  return (
    
      <Container>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a pokémon"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <img src={lupa} alt="Lupa" />
        </form>
      </Container>
  )
}