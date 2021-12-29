import React from 'react'
import { useParams } from 'react-router-dom'

import Grid from '../../components/grid/Grid'
import PlayerCard from '../../components/playerCard/PlayerCard'
import TeamCard from '../../components/teamCard/TeamCard'

import useAxios from '../../hooks/useAxios'

import { TeamCardContainer } from './teamRoster.styles'

const TeamRoster = () => {
  const { teamId } = useParams()
  const { nbaPlayers, nbaTeams, isLoading } = useAxios()
  const team = nbaTeams.entities[teamId]
  const teamPlayers = nbaPlayers.ids.filter(
    (id) => nbaPlayers.entities[id].team.id === +teamId
  )

  return isLoading || !team ? (
    <div>Loading...</div>
  ) : (
    <div>
      <TeamCardContainer>
        <TeamCard team={team} />
      </TeamCardContainer>
      <Grid>
        {teamPlayers.map((id) => (
          <PlayerCard key={id} player={nbaPlayers.entities[id]} />
        ))}
      </Grid>
    </div>
  )
}

export default TeamRoster
