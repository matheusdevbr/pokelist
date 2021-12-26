import { ChangeEvent } from "react";
import { usePokemon } from "../../hooks/usePokemons";

import lupa from "../../images/lupa.png";

import { Container } from "./style";

export function SearchInput() {
  const { SearchPokemon } = usePokemon();

  function handleSubmit({target}: ChangeEvent<HTMLInputElement>) {
    if (target.value.length > 2 || !target.value) {
      SearchPokemon(target.value);
    }
  }

  return (
    
      <Container>
        <input
          type="text"
          placeholder="Search a pokémon" 
          onChange={handleSubmit}
        />
        <img src={lupa} alt="Lupa" />
      </Container>
  )
}