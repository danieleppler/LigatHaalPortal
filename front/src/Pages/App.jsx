import { useState } from 'react'

import axios from 'axios'
import { TeamViewComp } from './TeamViewComp'


const server_url = import.meta.env.VITE_SERVER
const { data: teams } = await axios.get(`${server_url}/teams`)


function App() {

  const [team_clicked, set_team_clicked] = useState()


  return (
    <>

      <ul className='main-toolbar flexbox-container'>
        {
          teams.map((x) => {
            return <li key={x.team.id}>
              <img className="team-logo" onClick={() => {
                set_team_clicked({ teamid: x.team.id, venueid: x.venue.id, teamname: x.team.name })
              }} src={x.team.logo} />
            </li>
          })
        }
      </ul>
      <div className='pos-relative'>
        {team_clicked && <TeamViewComp teamid={team_clicked.teamid} venueid={team_clicked.venueid} teamname={team_clicked.teamname} />}
      </div>
    </>
  )
}

export default App
