import headerImage from "../../images/headerImage.png";
import pokeball from "../../images/pokeball.png";
import { Container } from "./style";

export function Header() {
  return (
    <Container>
      <img className="headerImg" src={headerImage} alt=""></img>
      <img className="pokeballImg" src={pokeball} alt=""></img>
    </Container>
  )
}