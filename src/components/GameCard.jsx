import React from 'react'

const GameCard =({game})=> {
  return (
    <div className='mainCont'>
    
    <div className="game">
        <img src={game.background_image} alt="gameImage"  />
    </div>
    <div className="description">
        <span> {game.rating} </span>
        <h3> {game.name} </h3>
    </div>
    </div>
  )
}

export default GameCard