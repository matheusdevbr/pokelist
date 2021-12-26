import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { PokemonsProvider } from "./hooks/usePokemons";
import { GlobalStyles } from "./styles/global";


export function App() {
  return (
    <PokemonsProvider >
      <Header />
      <Home />
      <GlobalStyles />
    </PokemonsProvider> 
  );
}

