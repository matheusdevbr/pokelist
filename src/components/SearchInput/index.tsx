import { ChangeEvent } from "react";
import { usePokemon } from "../../hooks/usePokemons";

import lupa from "../../images/lupa.png";

import { Container } from "./style";

export function SearchInput() {
  const { SearchPokemon } = usePokemon();

  function handleSubmit({target}: ChangeEvent<HTMLInputElement>) {
    var targetValue = target.value;
    SearchPokemon(targetValue);
  }

  return(
    
      <Container>
        <input
          type="text"
          placeholder="Digite o nome de um pókemon" 
          onChange={handleSubmit}
        />
        <img src={lupa} alt="Lupa" />
      </Container>
  )
}