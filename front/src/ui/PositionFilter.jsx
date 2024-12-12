import React from 'react'

const PositionFilter = ({ set_position_filter_value }) => {

    const handleClick = (e) => {
        set_position_filter_value(e.target.name)
    }

    return (
        <div className='flexbox-container flex-start col-gap-1 relative-5-bottom'>
            <strong>FILTER BY</strong>
            <button className="position-filter-buttons" name="Attacker" onClick={handleClick}>ATTACK</button>
            <button className="position-filter-buttons" name="Midfielder" onClick={handleClick}>MIDFIELD</button>
            <button className="position-filter-buttons" name="Defender" onClick={handleClick}>DEFENCE</button>
            <button className="position-filter-buttons" name="Goalkeeper" onClick={handleClick}>GOAL KEEPERS</button>
            <button className="position-filter-buttons" name="All" onClick={handleClick}>ALL</button>
        </div>
    )
}

export default PositionFilter
