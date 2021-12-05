import styled from "styled-components"
import media from "styled-media-query"

export const Stats = styled.div`
  max-height: inherit;
  text-align: center;
  padding: 1.5rem;
  background: var(--background);
  border-radius: 20px;
  text-transform: capitalize;

  ${media.lessThan('small')`
      margin-top: -1.5rem;
  `}

  strong {
    display: inline-block;
    margin: 10px 0;
  }
`
interface StatsBarProps {
  statsPercentage: number;
}

export const StatsBar= styled.span<StatsBarProps> `
  display: block;
  width: ${props => props.statsPercentage < 100 ? props.statsPercentage : 100}%;
  height: 1rem;
  background: #62B957;

`