import Modal from 'react-modal'

import { Stats, StatsBar} from './style'

interface PokeDetailsModalProps {
  name: string;
  image: string;
  types: string[];
  nameStat: string[];
  baseStat: number[];
  isOpen: boolean;
  onRequestClose: () => void;
}

export function PokeDetailsModal({name, image, types, nameStat, baseStat, isOpen, onRequestClose}: PokeDetailsModalProps) {
  return (
    <Modal   
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div>
        <h2>{name}</h2>
        {types.map(type => (<h4 key={type}>{type}</h4>))}
        <img src={image} alt="Imagem do pokemon" />
      </div>

      <Stats>
        <h3>Stats</h3>
        
        <strong>{nameStat[0]}</strong>
        <StatsBar statsPercentage={baseStat[0]}/>
        <p>{baseStat[0]}</p>

        <strong>{nameStat[1]}</strong>
        <StatsBar statsPercentage={baseStat[1]}/>
        <p>{baseStat[1]}</p>

        <strong>{nameStat[2]}</strong>
        <StatsBar statsPercentage={baseStat[2]}/>
        <p>{baseStat[2]}</p>

        <strong>{nameStat[3]}</strong>
        <StatsBar statsPercentage={baseStat[3]}/>
        <p>{baseStat[3]}</p>

        <strong>{nameStat[4]}</strong>
        <StatsBar statsPercentage={baseStat[4]}/>
        <p>{baseStat[4]}</p>

        <strong>{nameStat[5]}</strong>
        <StatsBar statsPercentage={baseStat[5]}/>
        <p>{baseStat[5]}</p>

      </Stats>
    </Modal>
  )
}