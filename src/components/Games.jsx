import Tittle from './Tittle'
import Game from './Game'
import { games } from '../data/games';

function Games() {
   return (
      <section className='games'>
         <div className='container'>
            <Tittle tittle={'Наши игры'} />
            <ul className="games__list">
               {games.map(game => <Game game={game} key={game.id} />)}
            </ul>
         </div>
      </section>
   )
}

export default Games;