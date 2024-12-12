import React, { useEffect, useState } from 'react'
import ToolBar from '../ui/ToolBar'

import Squad from './Squad'
import Venue from './Venue'
import Fixtures from './Fixtures'

export const TeamViewComp = ({ teamid, venueid, teamname }) => {


    const [view, set_view] = useState('')

    useEffect(() => {
        set_view('')
    }, [teamid])

    return (
        <div className='pos-relative'>
            <span id="team-title" className='pos-absolute'>{teamname}</span>
            <ToolBar set_view={set_view} />
            <div className='pos-absolute width-100'>
                {view === 'Squad' && <Squad teamid={teamid} />}
                {view === 'Venue' && <Venue venueid={venueid} />}
                {view === 'Fixtures' && <Fixtures team_id={teamid} />}
            </div>
        </div>
    )
}

export default TeamViewComp
