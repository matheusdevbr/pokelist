import styled from "styled-components"

export const Stats = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: var(--background);
  border-radius: 20px;

  strong {
    display: inline-block;
    margin: 10px 0;
  }

`
interface StatsBarProps {
  statsPercentage: number;
}

export const StatsBarHp = styled.span<StatsBarProps> `
  display: block;
    width: ${props => props.statsPercentage < 100 ? props.statsPercentage : 100}%;
    height: 1rem;
    background: #62B957;
`

export const StatsBarAttack = styled.span<StatsBarProps> `
  display: block;
    width: ${props => props.statsPercentage < 100 ? props.statsPercentage : 100}%;
    height: 1rem;
    background: #62B957;
`

export const StatsBarDefense = styled.span<StatsBarProps> `
  display: block;
    width: ${props => props.statsPercentage < 100 ? props.statsPercentage : 100}%;
    height: 1rem;
    background: #62B957;
`

export const StatsBarSpecialAttack = styled.span<StatsBarProps> `
  display: block;
    width: ${props => props.statsPercentage < 100 ? props.statsPercentage : 100}%;
    height: 1rem;
    background: #62B957;
`

export const StatsBarSpecielDefense = styled.span<StatsBarProps> `
  display: block;
    width: ${props => props.statsPercentage < 100 ? props.statsPercentage : 100}%;
    height: 1rem;
    background: #62B957;
`

export const StatsBarSpeed = styled.span<StatsBarProps> `
  display: block;
    width: ${props => props.statsPercentage < 100 ? props.statsPercentage : 100}%;
    height: 1rem;
    background: #62B957;
`