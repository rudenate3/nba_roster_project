import React from 'react'
import Card from '../card/Card'

import { PlayerInfoContainer, PlayerName } from './playerCard.styles'

const PlayerCard = ({ player }) => {
  return (
    <Card>
      <PlayerInfoContainer>
        <PlayerName>
          {player.first_name + ' ' + player.last_name}{' '}
          {player.position && `(${player.position})`}
        </PlayerName>
        {player.height_feet && player.height_inches && (
          <p>
            Height: {player.height_feet}'{player.height_inches}"
          </p>
        )}
        {player.weight_pounds && <p>Weight: {player.weight_pounds}</p>}
      </PlayerInfoContainer>
    </Card>
  )
}

export default PlayerCard
