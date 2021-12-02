import { PokeList } from "./components/PokeList";
import { PokemonsProvider } from "./PokemonsContext";
import { GlobalStyles } from "./styles/global";


export function App() {
  return (
    <PokemonsProvider >
      <PokeList />
      <GlobalStyles />
    </PokemonsProvider> 
  );
}

