import { FormEvent, useState } from "react";
import { usePokemon } from "../../hooks/usePokemons";

export function SearchInput() {
  const [inputData, setInputData] = useState('');

  const { SearchPokemon } = usePokemon();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); 

    await SearchPokemon(inputData);
  }

  return(
    <form onSubmit={handleSubmit} >
                <label htmlFor="searchPoke">
                    <input 
                        id="searchPoke" 
                        type="text" 
                        placeholder="Digite o nome de um pókemon"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                   <img src="" alt="Procure um pokémon" />
                </label>
            </form>
  )
}