import { createContext, useState } from 'react';

import "./Game.css"

import Menu from "./Menu"
import Tetris from "./Tetris"

import useGameOver from "../hooks/useGameOver"


export const Context = createContext();

/**
 * Game component is the children component of App component. 
 * It renders Menu or Tetris depending on gameOver state. 
 */

const Game = ({ highScores,  setHighScores, setAllScores, allScores }) => {
    const [gameOver, setGameOver, resetGameOVer] = useGameOver()   
    const [gamePlayed, setGamePlayed] = useState(false)
    const [val, setVal] = useState(0);

    console.log('Game ', highScores, allScores);
   
    const style = { 
        backgroundColor: 'black',
        height: '100%',
        display: 'flex',
       
        flexDirection: 'column',
       
       
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
       
    }
     
    return (
        <Context.Provider value={[val, setVal]} >
            <div className="Game" style={style}>
                {gameOver ? (
                    <Menu resetGameOver={resetGameOVer} gamePlayed={gamePlayed} setGamePlayed={setGamePlayed} highScores={highScores}  setHighScores={setHighScores} allScores={allScores} setAllScores={setAllScores} />
                ) : (
                    <Tetris 
                        rows={20} 
                        columns={10}
                        setGameOver={setGameOver}
                        //gameStats={gameStats}
                        //addLinesCleared={addLinesCleared}
                        setGamePlayed={setGamePlayed}
                    />
           )} </div>
                    
                
           
        </Context.Provider>
    )
}

export default Game