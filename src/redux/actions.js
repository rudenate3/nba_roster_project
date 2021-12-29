import { getPlayers, getTeams } from '../api'
import { FETCH_NBA_PLAYERS, FETCH_NBA_TEAMS } from './actionTypes'

// This is just an example action, modify or add actions
// as you see fit.
export const fetchNbaPlayers = () => {
  return async function (dispatch) {
    const response = await getPlayers()

    dispatch({
      type: FETCH_NBA_PLAYERS,
      payload: response.data.data
    })
  }
}

export const fetchNbaTeams = () => {
  return async function (dispatch) {
    const response = await getTeams()
    dispatch({
      type: FETCH_NBA_TEAMS,
      payload: response.data.data
    })
  }
}
