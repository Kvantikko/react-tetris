//import "./GameController.css"

import { Action, actionForKey } from "../business/Input"
import { playerController } from "../business/PlayerController"

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
    
    // key goes down
    const onKeyDown = ({ code }) => {
        //console.log('key down: ', code)
        const action = actionForKey(code)
        
        if (action === Action.Quit) setGameOver(true)
        
        handleInput({ action })
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
            //onKeyUp={onKeyUp}
            autoFocus
        />
    )
}

export default GameController