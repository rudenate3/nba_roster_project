import { FETCH_NBA_PLAYERS } from '../actionTypes'
import { normalizer } from '../../utils/normalizer'

const initialState = {
  entities: {},
  ids: []
}

const nbaPlayers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NBA_PLAYERS: {
      return { ...state, ...normalizer(action.payload) }
    }

    default: {
      return state
    }
  }
}

export default nbaPlayers
