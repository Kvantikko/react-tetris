import "./Menu.css"

import ScoreBoard from "./ScoreBoard"
import scoreService from "../services/scores"

import { useState } from "react"

import { useContext } from "react"
import { Context } from "./Game"
import ScoreForm from "./ScoreForm"

const Menu = ({ resetGameOver, gamePlayed, setGamePlayed, highScores,  setHighScores, allScores, setAllScores }) => {
    const [ newName, setNewName ] = useState('')
    const [val, setVal] = useContext(Context);

    const startGame = () => {
        setGamePlayed(false)
        resetGameOver()
    }

    const addScore = (event) => {
        event.preventDefault()
        const obj = {
            name: newName,
            score: val
        }
        setGamePlayed(false)
    
        scoreService
            .create(obj)
            .then(response => {
                const sortedScores = allScores.concat(response.data).sort((a, b) => (b.score)- (a.score))
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
            <ScoreForm gamePlayed={gamePlayed} addScore={addScore} name={newName} handleNameChange={handleNameChange}/>
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