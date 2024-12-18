import React from 'react'


const MinutleyReqFallback = () => {
    return (
        <div className='req-fallback'>
            <p> Minutley request limit achived , please wait before trying again to navigate the site </p>
        </div>
    )
}

const DailyReqFallback = () => {
    return (
        <div className='req-fallback'>
            <p> Dailey request limit achived , please wait come back tomorrow ! </p>
        </div>
    )
}



export { MinutleyReqFallback, DailyReqFallback }
