import "./Tetris.css"

import { Action, actionForKey, actionIsDrop } from "../business/Input"
import { playerController } from "../business/PlayerController"

import Board from "./Board"
import GameStats from "./GameStats"
import Previews from "./Previews"

import useBoard from "../hooks/useBoard"
import usePlayer from "../hooks/usePlayer"
import useDropTime from "../hooks/useDropTime"
import useInterval from "../hooks/useInterval"
import useGameStats from "../hooks/useGameStats"

/**
 * Tetris component is a children component of Game component. This component is rendered
 * if gameover state is false
 * @param rows board's row amount
 * @param columns board's column amount
 * @param setGameOver function to set gameOver state
 * @param setGamePlayed function to set gamePlayed state
 * @return Board, Gamestats and Previews 
 */
const Tetris = ({ rows, columns, setGameOver, setGamePlayed  }) => {
    const [gameStats, addLinesCleared] = useGameStats() 
    const [player, setPlayer, resetPlayer] = usePlayer()
    const [board, ] = useBoard({ rows, columns, player, resetPlayer, addLinesCleared })
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ gameStats })

    // Save way to use timeouts with react. Calling handleInput every dropTime (default 1 sec).
    useInterval(() => {
        handleInput({ action: Action.Down })
    }, dropTime)

    // When a key comes up
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code)
        if (actionIsDrop(action)) resumeDropTime()
    }
    
    // When a key is pressed
    const onKeyDown = ({ code }) => {
        const action = actionForKey(code)
        
        if (action === Action.Pause) {
            if (dropTime) {
                pauseDropTime()
            } else {
                resumeDropTime()
            }
        } else if (action === Action.Quit) {
            setGameOver(true)
        } else {
            if (actionIsDrop(action)) {
                pauseDropTime()
            }
            handleInput({ action })
        }
    }

    // Delegates the action to playerController which decides what to do with it
    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver,
            setGamePlayed
        })
    }

    // Stats div style
    const style = {
        marginLeft: '1vw', 
        display: 'flex',
        flexDirection: 'column',
        marginTop: '4vh',
        height: '90vh'
    }

    return (
        <div 
            className="Tetris"
            id="Tetris"
            role="button"
            tabIndex='0'
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
        >
            <Board board={board}  />
            <div className="Info" style={style} >
                <Previews previewTetrominoes={player.previewTetrominoes}  />
                <GameStats gameStats={gameStats} />
            </div>
        </div>
        )
    }

export default Tetris