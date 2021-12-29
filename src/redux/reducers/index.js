import { combineReducers } from 'redux'

// We'll use this reducer to store our nba player data.
import nbaPlayers from './nbaPlayers'
import nbaTeams from './nbaTeams'

// Feel free to add anymore reducers that you may need.

export default combineReducers({ nbaPlayers, nbaTeams })
