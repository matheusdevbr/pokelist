import { ChangeEvent, useState } from "react";
import { usePokemon } from "../../hooks/usePokemons";

import lupa from "../../images/lupa.png";

import { Container } from "./style";

export function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);

  const { searchPokemon } = usePokemon();

  function handleSubmit({target}: ChangeEvent<HTMLInputElement>) {
    
    if (target.value.length > 1 || !target.value) {
     searchPokemon(target.value);
    }
  }

  return (
    
      <Container>
        <input
          type="text"
          placeholder={isFocused ? '' : "Search a pokémon"}
          onChange={handleSubmit}
          onFocus={function handleInputFocus(){setIsFocused(true)}}
          onBlur={function handleInputBlur(){setIsFocused(false)}}
        />
        <img src={lupa} alt="Lupa" />
      </Container>
  )
}