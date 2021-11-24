import Modal from 'react-modal'

interface PokeDetailsModalProps {
  name: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function PokeDetailsModal({name, isOpen, onRequestClose}: PokeDetailsModalProps) {
  return (
    <Modal 
      
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h1>{name}</h1>
    </Modal>
  )
}