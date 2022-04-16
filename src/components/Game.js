import Menu from "./Menu"
import Tetris from "./Tetris"

import useGameOver from "../hooks/useGameOver"
import useGameStats from "../hooks/useGameStats"

import { createContext, useState } from 'react';
import scores from "../scores.json"



export const Context = createContext();
/**
 * Game component is the children component of App component. 
 * It renders Menu or Tetris depending on gameOver state. 
 */

const Game = ({ rows, columns }) => {
    const [gameOver, setGameOver, resetGameOVer] = useGameOver()   
    const [gameStats, addLinesCleared] = useGameStats() 
    
    const [gamePlayed, setGamePlayed] = useState(false)
   
    
    
    
    

   
    const style = { 
        backgroundColor: 'black',
        height: '100%'
    }
    
        
    return (
        <Context.Provider value={scores} >
            <div className="Game" style={style}>
                {gameOver ? (
                    <Menu resetGameOver={resetGameOVer} gamePlayed={gamePlayed} setGamePlayed={setGamePlayed} />
                ) : (
                    <Tetris 
                        rows={rows} 
                        columns={columns} 
                        setGameOver={setGameOver}
                        gameStats={gameStats}
                        addLinesCleared={addLinesCleared}
                        setGamePlayed={setGamePlayed}
                    />
                )}
            </div>
        </Context.Provider>
    )
}

export default Game