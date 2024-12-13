import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PlayersList from '../ui/PlayersList'
import PositionFilter from '../ui/PositionFilter'


let base_players = []

const Squad = ({ teamid }) => {

    const server_url = 'https://ligathaalportal.onrender.com/'
    const [players, set_players] = useState()
    const [position_filter_value, set_position_filter_value] = useState()



    useEffect(() => {
        const fetchData = async () => {
            const { data: players } = await axios.get(`${server_url}/players/${teamid}`)
            const response = players[0].players
            set_players(response)
            base_players = response
        }
        fetchData()
    }, [teamid])

    useEffect(() => {
        if (position_filter_value) {
            if (position_filter_value !== 'All')
                set_players(base_players.filter((x) => x.position === position_filter_value))
            else set_players(base_players)
        }
    }, [position_filter_value])


    return (
        <div className='relative-10'>
            <PositionFilter set_position_filter_value={set_position_filter_value} />
            <PlayersList players={players} />
        </div>
    )
}

export default Squad
