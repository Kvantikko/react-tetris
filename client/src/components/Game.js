//import "./Game.css"

import { useState } from 'react';

import Menu from "./Menu"
import Tetris from "./Tetris"

import useGameOver from "../hooks/useGameOver"
import { Context } from './Context'

/**
 * Game component is the children component of App component. 
 * It renders Menu or Tetris depending on gameOver state.
 * Context provides score value to the game and menu.
 */

const Game = ({ highScores,  setHighScores, setAllScores, allScores }) => {
    const [gameOver, setGameOver, resetGameOVer] = useGameOver()   
    const [gamePlayed, setGamePlayed] = useState(false)
    const [points, setPoints] = useState(0);

    // css file not applying for some reason...
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
        <Context.Provider value={[points, setPoints]} >
            <div className="Game" style={style} > 
                {gameOver ? (
                    <Menu resetGameOver={resetGameOVer}
                        gamePlayed={gamePlayed}
                        setGamePlayed={setGamePlayed}
                        highScores={highScores} 
                        setHighScores={setHighScores}
                        allScores={allScores}
                        setAllScores={setAllScores}
                    />
                ) : (
                    <Tetris 
                        rows={20} 
                        columns={10}
                        setGameOver={setGameOver}
                        setGamePlayed={setGamePlayed}
                    />
           )} </div>
        </Context.Provider>
    )
}

export default Game