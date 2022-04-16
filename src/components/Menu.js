
import "./Menu.css"

import SaveScore from "./SaveScore"
import ScoreBoard from "./ScoreBoard"

import { useState } from "react"

//import scores from "../scores.json"





const Menu = ({ resetGameOver, gameStats, gamePlayed, setGamePlayed }) => {
    //console.log('menu');
    
    let scores = [
        {
            "name": "Bart",
            "points": 100
        },
        {
            "name": "Maggie",
            "points": 75
        }
    ]
    
    
    const [ highScores, setHighScores ] = useState(scores)
    const [ newName, setNewName ] = useState('')
    
    
/*
    console.log('', scores);
    console.log('', highScores);
    */


    const startGame = () => {
        
        resetGameOver()
    }

    const addScore = (event) => {
        
        event.preventDefault()
        console.log('adding ', gameStats);
        
        const obj = {
            name: newName,
            points: gameStats.points
        }
        console.log('obj', obj);
        
        setHighScores(highScores.concat(obj))
        setGamePlayed(false)
        scores.concat(obj)
        // write to file 
        //-- cant
        
        
    }

   
    const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
    
    return(
        <div className="Menu">
            
            
            <SaveScore gameStats={gameStats} gamePlayed={gamePlayed} addScore={addScore} name={newName} handleNameChange={handleNameChange}/>
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