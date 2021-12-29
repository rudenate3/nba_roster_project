import React from 'react'

import Grid from '../../components/grid/Grid'
import TeamCard from '../../components/teamCard/TeamCard'
import useAxios from '../../hooks/useAxios'

const TeamIndex = () => {
  const { nbaTeams, isLoading } = useAxios()

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Grid>
      {nbaTeams.ids.map((id) => (
        <TeamCard key={id} link team={nbaTeams.entities[id]} />
      ))}
    </Grid>
  )
}

export default TeamIndex
