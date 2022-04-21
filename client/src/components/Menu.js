import "./Menu.css"

import { useContext, useState } from "react"

import ScoreBoard from "./ScoreBoard"
import ScoreForm from "./ScoreForm"

import scoreService from "../services/scores"

import { Context } from './Context';

/**
 * @param resetGameOver the function to set gameOver state false
 * @param gamePlayed the state of did player just finish a game
 * @param setGamePlayed the function to set gamePlayed state
 * Score parameters are the scores that have been fetched from backend in component App.js
 * @returns scoreboard, startbutton and the ability to save your name/score after a game
 * has ended (ScoreForm component). It also sends a new score to backend via imported 
 * scoreService.
 */
const Menu = ({
    resetGameOver,
    gamePlayed,
    setGamePlayed,
    highScores, 
    setHighScores,
    allScores,
    setAllScores
}) => {
    const [newName, setNewName] = useState('')
    const [points, ] = useContext(Context);

    const startGame = () => {
        setGamePlayed(false)
        resetGameOver()
    }

    const addScore = (event) => {
        // Prevents unneccessary rendering.
        event.preventDefault()
        
        const obj = {
            name: newName,
            score: points
        }
        setGamePlayed(false)
    
        // Send created score object to server and sort the sccores (highest on top).
        scoreService
            .create(obj)
            .then(response => {
                const sortedScores = allScores
                    .concat(response.data)
                    .sort((a, b) => (b.score)- (a.score))
                setAllScores(sortedScores)
                const highestScores = sortedScores.slice(0, 15);
                setHighScores(highestScores)
            }).catch((error) => {
                console.log('error ', error.response); 
            })
    }

    // Name input state change.
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    
    return(
        <div className="Menu">
            <ScoreForm 
                gamePlayed={gamePlayed}
                addScore={addScore}
                name={newName}
                handleNameChange={handleNameChange}
            />
            <button className="ButtonPlay" onClick={startGame}>
                Play Tetris
            </button>
            <ScoreBoard scores={highScores}/>
        </div>
    )
}

export default Menu