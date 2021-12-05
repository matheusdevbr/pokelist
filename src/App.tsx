import { Header } from "./components/Header";
import { PokeList } from "./components/PokeList";
import { PokemonsProvider } from "./hooks/usePokemons";
import { GlobalStyles } from "./styles/global";


export function App() {
  return (
    <PokemonsProvider >
      <Header />
      <PokeList />
      <GlobalStyles />
    </PokemonsProvider> 
  );
}

