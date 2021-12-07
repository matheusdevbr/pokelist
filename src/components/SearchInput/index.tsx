import { FormEvent, useState } from "react";
import { usePokemon } from "../../hooks/usePokemons";

import lupa from "../../images/lupa.png";

export function SearchInput() {
  const [inputData, setInputData] = useState('');

  const { SearchPokemon } = usePokemon();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); 

    await SearchPokemon(inputData);
  }

  return(
    <form onSubmit={handleSubmit} >
      <label htmlFor="searchPokemon">
        <input
          type="text"
          placeholder="Digite o nome de um pókemon"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <img src={lupa} alt="Lupa" />
      </label>
    </form>
  )
}