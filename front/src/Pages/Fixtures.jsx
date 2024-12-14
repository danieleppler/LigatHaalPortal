import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fixtures = ({ team_id }) => {

    const [fixtures, set_fixtures] = useState([])

    const server_url = import.meta.env.VITE_SERVER

    useEffect(() => {
        const fetchData = async () => {
            const { data: fixtures } = await axios.get(`${server_url}/Fixtures/${team_id}`)
            set_fixtures(fixtures.response)
            console.log(fixtures.response)
        }
        fetchData()
    }, [])


    return (
        <ul className='pos-relative display-flex justify-center flex-cols row-gap-1'>
            {
                fixtures?.map((x) => {
                    return <div className='score-box'>
                        <span>{x.teams.home.name} X {x.teams.away.name}</span>
                        <span>{x.goals.home} X {x.goals.away}</span>
                        <span>{(new Date(x.fixture.date)).toUTCString().replace("GMT", "")}</span>
                    </div>
                })
            }
        </ul>
    )
}

export default Fixtures
