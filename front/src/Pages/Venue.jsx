import React, { useEffect, useState } from 'react'
import axios from 'axios'


const server_url = 'https://ligathaalportal.onrender.com'

const Venue = ({ venueid }) => {

    const [venue, setvenue] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const { data: res } = await axios.get(`${server_url}/venues/${venueid}`)
            setvenue(res)
        }
        fetchData()
    }, [])

    return (
        <div className='pos-relative display-flex justify-center flex-cols row-gap-1'>
            <span>{venue?.name}</span>
            <span>{venue?.address} , {venue?.city} ,{venue?.country} </span>
            <span> Seats :  {venue?.capacity}</span>
            <img src={venue?.image}></img>
        </div>
    )
}

export default Venue
