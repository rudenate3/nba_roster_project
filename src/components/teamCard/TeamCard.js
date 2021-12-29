import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../card/Card'

import {
  TeamBody,
  TeamCardContainer,
  TeamConference,
  TeamDivision,
  TeamHeader,
  TeamSubHeader
} from './teamCard.styles'

const TeamCard = ({ link, team }) => {
  const { abbreviation, city, conference, division, full_name, id } = team

  const card = (
    <Card>
      <TeamHeader>
        {full_name} ({abbreviation})
      </TeamHeader>
      <TeamSubHeader>{city}</TeamSubHeader>
      <TeamBody>
        <TeamConference conference={conference}>{conference}</TeamConference>
        <TeamDivision division={division}>{division}</TeamDivision>
      </TeamBody>
    </Card>
  )

  return (
    <TeamCardContainer>
      {link ? <Link to={`/roster/${id}`}>{card}</Link> : card}
    </TeamCardContainer>
  )
}

export default TeamCard
