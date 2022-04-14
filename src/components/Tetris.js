import "./Tetris.css"

import Board from "./Board"
import GameStats from "./GameStats"
import Previews from "./Previews"

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
    
  
    return (
        <div className="Tetris">
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews tetrominoes={player.tetrominoes}  />
        </div>
    )
}

export default Tetris