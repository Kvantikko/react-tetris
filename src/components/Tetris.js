import "./Tetris.css"

import Board from "./Board"
import GameStats from "./GameStats"
import Previews from "./Previews"
import GameController from "./GameController"

import useBoard from "../hooks/useBoard"
import useGameStats from "../hooks/useGameStats"
import usePlayer from "../hooks/usePlayer"

/**
 * Tetris component is a children component of Game component. 
 * Renders Board, Gamestats and Previews 
 */

const Tetris = ({ rows, columns, setGameOver }) => {
    // Hooks
    const [gameStats, addLinesCleared] = useGameStats()
    const [player, setPlayer, resetPlayer] = usePlayer()
    const [board, setBoard] = useBoard({ rows, columns, player, resetPlayer, 
        addLinesCleared })

    //console.log('Tetris',  player.tetrominoes);

    const style = { 
        backgroundColor: 'yellow',
       
        //overFlow: 'hidden'
        // display: 'inline-block' 
    }
  
    return (
        <div className="Tetris" style={style}>
            
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews previewTetrominoes={player.previewTetrominoes}  />
            <GameController
                board={board}
                gameStats={gameStats}
                player={player}
                setGameOver={setGameOver}
                setPlayer={setPlayer}
            />
        </div>
    )
}

export default Tetris