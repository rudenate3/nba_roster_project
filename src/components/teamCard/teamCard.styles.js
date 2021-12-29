import styled from 'styled-components'
import {
  black,
  blue,
  gray,
  green,
  orange,
  purple,
  red
} from '../../styles/colors'

export const TeamBody = styled.div`
  display: flex;
  justify-content: space-around;
`

export const TeamCardContainer = styled.div`
  a {
    color: white;
    text-decoration: none;
  }
`

export const TeamConference = styled.div`
  background-color: ${({ conference }) =>
    conference === 'East' ? green[100] : red[100]};
  border-radius: 3px;
  border: 2px solid ${black[100]};
  color: black;
  padding: 10px;
`

export const TeamDivision = styled.div`
  background-color: ${({ division }) => {
    switch (division) {
      case 'Atlantic':
        return orange[100]
      case 'Central':
        return orange[200]
      case 'Pacific':
        return red[200]
      case 'Southeast':
        return blue[100]
      case 'Northwest':
        return purple[100]
      case 'Southwest':
        return blue[200]
      default:
        return gray[100]
    }
  }};
  border-radius: 3px;
  border: 2px solid ${black[100]};
  color: black;
  padding: 10px;
`

export const TeamHeader = styled.div`
  font-size: 1rem;
  border-bottom: 3px solid ${black[100]};
  padding-bottom: 5px;
`

export const TeamSubHeader = styled.div`
  font-size: 0.8rem;
  margin: 10px 0;
`
