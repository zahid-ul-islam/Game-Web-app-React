import React from 'react'

const GameCard =({game})=> {
  return (
    <div className='mainCont'>
    
    <div className="game">
        <img src={game.background_image} alt="gameImage"  />
    </div>
    <div className="description">
        {game?.genres.length>0 ?(
          <span>{game.genres[0].name} ({game.rating})</span>
        ): <span>No genres ({game.ratig})</span> }
        <h3> {game.name} </h3>
    </div>
    </div>
  )
}

export default GameCard