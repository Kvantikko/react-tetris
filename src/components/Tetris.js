import "./Tetris.css"

import { Action, actionForKey, actionIsDrop } from "../business/Input"
import { playerController } from "../business/PlayerController"

import Board from "./Board"
import GameStats from "./GameStats"
import Previews from "./Previews"
//import GameController from "./GameController"

import useBoard from "../hooks/useBoard"
import useGameStats from "../hooks/useGameStats"
import usePlayer from "../hooks/usePlayer"
import useDropTime from "../hooks/useDropTime"
import useInterval from "../hooks/useInterval"





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

  






    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        gameStats
    })

    useInterval(() => {
        handleInput({ action: Action.Down })
    }, dropTime)

    // key comes up
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);
        if (actionIsDrop(action)) resumeDropTime()
      };
    
    // key goes down
    const onKeyDown = ({ code }) => {
        console.log('key down: ', code)
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
            
            console.log('droptime ', dropTime);
            if (actionIsDrop(action)) {
                pauseDropTime()
            }
            /*
            if (!dropTime) {
                return
            }
            
            */
            handleInput({ action })
        }
        
        //handleInput({ action })
    }

    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        })
    }

    









    

   
  
    return (
        <div className="Tetris" role="button" tabIndex='0' onKeyDown={onKeyDown} onKeyUp={onKeyUp}>
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews previewTetrominoes={player.previewTetrominoes}  />
           
        </div>
    )
}

export default Tetris