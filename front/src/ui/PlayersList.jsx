import React from 'react'

const PlayersList = ({ players }) => {

    let groupedPlayers = undefined

    if (players)
        groupedPlayers = Object.groupBy(players, ({ position }) => position)

    return (
        <div >
            {
                groupedPlayers && Object.keys(groupedPlayers).map((list) => {
                    return <>
                        <strong className='position-title'>{list}</strong>
                        <ul className='row-gap-1 flexbox-container ml-10 flex-gap'>
                            {
                                groupedPlayers[list].map((x) => {
                                    return <li className=' row-gap-1 player-card flexbox-container-cols'>
                                        {x.number ? <span className='text-white'>#{x.number}</span> : <span className='text-white'>No Number</span>}
                                        <img className="border-circle border-white" src={x.photo}></img>
                                        <span className='text-white'>{x.name}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </>
                })
            }
        </div>


    )
}

export default PlayersList
