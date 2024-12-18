import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PlayersList from '../ui/PlayersList'
import PositionFilter from '../ui/PositionFilter'
import FallBackFactory from '../FallBacks/FallBackFactory'

let base_players = []

const Squad = ({ teamid }) => {

    const server_url = import.meta.env.VITE_SERVER

    const [players, set_players] = useState()

    const [position_filter_value, set_position_filter_value] = useState()

    const [fallback, set_fallback] = useState()


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${server_url}/players/${teamid}`)
            if (response.status == 200) {
                set_players(response.data[0].players)
                base_players = response.data[0].players
            }
            if (response.status === 206 && response.data.massage === "daily request limit")
                set_fallback('dailyfallback')
            if (response.status === 206 && response.data.massage === "minutely request limit")
                set_fallback('minutelyfallback')

        }
        fetchData()
    }, [teamid])

    useEffect(() => {
        if (position_filter_value) {

            if (position_filter_value !== 'All')
                set_players(base_players?.filter((x) => x.position === position_filter_value))
            else set_players(base_players)
        }
    }, [position_filter_value])


    return (
        <div className='relative-10'>
            <PositionFilter set_position_filter_value={set_position_filter_value} />
            <PlayersList players={players} />
            {fallback && <FallBackFactory type={fallback} />}
        </div>
    )
}

export default Squad
