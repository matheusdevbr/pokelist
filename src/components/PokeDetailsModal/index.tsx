//import { useState } from 'react';
import { useEffect, useState } from 'react';
import Modal from 'react-modal'
import { api } from '../../services/api';
import { Stats, StatsBarAttack, StatsBarDefense, StatsBarHp, StatsBarSpecialAttack, StatsBarSpecielDefense, StatsBarSpeed } from './style'

interface PokeDetailsModalProps {
  name: string;
  pokeImg: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

interface StatsProps {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
}

export function PokeDetailsModal({name, pokeImg, isOpen, onRequestClose}: PokeDetailsModalProps) {
  const [stats, setStats] = useState<StatsProps>({} as StatsProps);

  useEffect(() => {
    async function getApi() {
    await api.get(`pokemon/${name}`)
      .then(response => {
        const { stats } = response.data;
        setStats({
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            specialAttack: stats[3].base_stat,
            specialDefense: stats[4].base_stat,
            speed: stats[5].base_stat,
          
        })

      }

    

    )}

    getApi()
  }, [name]);
  
  return (
    <Modal   
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div>
        <h2>{name}</h2>
        <img src={pokeImg} alt="Imagem do pokemon" />
      </div>
      <Stats>
      <h2>Stats</h2>
      <strong>HP</strong>
        <StatsBarHp statsPercentage={stats.hp}></StatsBarHp>
        <p>{stats.hp}</p>

        <strong>Attack</strong>
        <StatsBarAttack statsPercentage={stats.attack}></StatsBarAttack>
        <p>{stats.attack}</p>

        <strong>Defense</strong>
        <StatsBarDefense statsPercentage={stats.defense}></StatsBarDefense>
        <p>{stats.defense}</p>

        <strong>Special Attack</strong>
        <StatsBarSpecialAttack statsPercentage={stats.specialAttack}></StatsBarSpecialAttack>
        <p>{stats.specialAttack}</p>

        <strong>Special Defense</strong>
        <StatsBarSpecielDefense statsPercentage={stats.specialDefense}></StatsBarSpecielDefense>
        <p>{stats.specialDefense}</p>

        <strong>Speed</strong>
        <StatsBarSpeed statsPercentage={stats.speed}></StatsBarSpeed>
        <p>{stats.speed}</p>
      </Stats>
    </Modal>
  )
}