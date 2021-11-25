//import { useState } from 'react';
import Modal from 'react-modal'

interface PokeDetailsModalProps {
  name: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function PokeDetailsModal({name, isOpen, onRequestClose}: PokeDetailsModalProps) {
  //const [pokemon, setPokemon] = useState();

  
  return (
    <Modal   
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h1>{name}</h1>
    </Modal>
  )
}