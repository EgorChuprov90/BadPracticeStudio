

function Game({ game }) {
   return (
      <li className="games__card card">
         <img className="card__img" src={game.logo} alt={game.name} />
         <h3 className="card__tittle">{game.name}</h3>
         <div className="card__active">
            <h3 className="card__tittle_active">{game.name}</h3>
            <p className="card__description">{game.description}</p>
         </div>
      </li>
   )
}

export default Game;