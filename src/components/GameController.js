//import "./GameController.css"

import { Action, actionForKey } from "../business/Input"

const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer,
}) => {
    
    // key comes up
    const onKeyUp = ({ code }) => {
        console.log('up', code);

        const action = actionForKey(code)
        
        if (action === Action.Quit) {
            console.log('controller ', setGameOver);
            
            setGameOver(true)
        }
    }
    // key goes down
    const onKeyDown = ({ code }) => {
        console.log('down', code);
        
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