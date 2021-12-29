import React from 'react'
import { Provider } from 'react-redux'
import { Link, Routes, Route } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

import './styles.css'

import store from './redux/store'

import TeamRoster from './views/teamRoster/TeamRoster'
import TeamIndex from './views/teamIndex/TeamIndex'

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>NBA Roster Project</h1>
        <Link to="/">
          <FaHome
            style={{ color: 'white', fontSize: '2.4rem', marginBottom: '15px' }}
          />
        </Link>
        <Routes>
          <Route path="/" element={<TeamIndex />} />
          <Route path="/roster/:teamId" element={<TeamRoster />} />
        </Routes>
      </div>
    </Provider>
  )
}
