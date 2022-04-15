//import "./GameController.css"

import { Action, actionForKey, actionIsDrop } from "../business/Input"
import { playerController } from "../business/PlayerController"

import useDropTime from "../hooks/useDropTime"
import useInterval from "../hooks/useInterval"

/**
 * Hidden component that takes in keypresses
 */

const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer,
}) => {
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
    
    return(
        <input 
            className="GameController" 
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
        />
    )
}

export default GameController