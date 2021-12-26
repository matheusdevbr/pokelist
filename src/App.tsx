import { Home } from "./pages/Home";
import { PokemonsProvider } from "./hooks/usePokemons";
import { GlobalStyles } from "./styles/global";


export function App() {
  return (
    <PokemonsProvider >
      <Home />
      <GlobalStyles />
    </PokemonsProvider> 
  );
}

