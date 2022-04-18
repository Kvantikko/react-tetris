import "./Menu.css"

import { useContext, useState } from "react"

import ScoreBoard from "./ScoreBoard"
import ScoreForm from "./ScoreForm"

import scoreService from "../services/scores"

import { Context } from "./Game"

/**
 * Menu renders scoreboard, startbutton and ability to save your name/score after a game
 * has ended.
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
        event.preventDefault()
        
        const obj = {
            name: newName,
            score: points
        }
        setGamePlayed(false)
    
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
            <button className="ButtonScore" >
                Full Scoreboard
            </button>
        </div>
    )
}

export default Menu