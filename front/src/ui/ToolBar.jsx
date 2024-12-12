import React from 'react'


const ToolBar = ({ set_view }) => {


    const handleClick = (e) => {
        set_view(e.target.innerText)
    }

    return (
        <>
            <ul className='hoverable-buttons-conatiner flexbox-container'>
                <li onClick={handleClick}>Squad</li>
                <li onClick={handleClick} >Venue</li>
                <li onClick={handleClick}>Fixtures</li>
            </ul >
        </>

    )
}

export default ToolBar
