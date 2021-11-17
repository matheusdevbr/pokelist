import pokeBg from '../../images/pokeBg.png';
import pokeball from '../../images/pokeball.png';
import { Container } from './style';

export const Card = () => {
  return (
    <Container>
      <div className="card">  
        <div>
          <span>#Id</span>  
          <h1>Bulbasaur</h1>        
          <p>Grass</p>
          <p>Grass</p>    
        </div> 
        <div className="cardImgs">
          <img className="pokeBg" src={pokeBg} alt= "" />
          <img className="pokeImg" src={pokeball} alt= ""/>
        </div> 
      </div>
      <div className="card">  
        <div>
          <span>#Id</span>  
          <h1>Bulbasaur</h1>        
          <p>Grass</p>
          <p>Grass</p>    
        </div> 
        <div className="cardImgs">
          <img className="pokeBg" src={pokeBg} alt= "" />
          <img className="pokeImg" src={pokeball} alt= ""/>
        </div> 
      </div>
      <div className="card">  
        <div>
          <span>#Id</span>  
          <h1>Bulbasaur</h1>        
          <p>Grass</p>
          <p>Grass</p>    
        </div> 
        <div className="cardImgs">
          <img className="pokeBg" src={pokeBg} alt= "" />
          <img className="pokeImg" src={pokeball} alt= ""/>
        </div> 
      </div>
      <div className="card">  
        <div>
          <span>#Id</span>  
          <h1>Bulbasaur</h1>        
          <p>Grass</p>
          <p>Grass</p>    
        </div> 
        <div className="cardImgs">
          <img className="pokeBg" src={pokeBg} alt= "" />
          <img className="pokeImg" src={pokeball} alt= ""/>
        </div> 
      </div>
      
    </Container>
    
    
  )
}