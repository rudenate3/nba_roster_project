import { FETCH_NBA_TEAMS } from '../actionTypes'

import { normalizer } from '../../utils/normalizer'

const initialState = {
  entities: {},
  ids: []
}

const nbaTeams = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NBA_TEAMS: {
      return { ...state, ...normalizer(action.payload) }
    }
    default: {
      return state
    }
  }
}

export default nbaTeams
