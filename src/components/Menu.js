
import "./Menu.css"

import ScoreBoard from "./ScoreBoard"
import scoreService from "../services/scores"

import { useState, useEffect } from "react"

//import scores from "../scores.json"

import { useContext } from "react"
    import { Context } from "./Game"
import ScoreForm from "./ScoreForm"

    



const Menu = ({ resetGameOver, gamePlayed, setGamePlayed, highScores,  setHighScores, allScores, setAllScores }) => {
    //console.log('menu');

    console.log('Menu', highScores, allScores);
    
    
   
    
    //const [ highScores, setHighScores ] = useState([])
    const [ newName, setNewName ] = useState('')

    //console.log('scores ', highScores)
    
    
    const [val, setVal] = useContext(Context);




    
    
/*
    console.log('', scores);
    console.log('', highScores);
    */


    const startGame = () => {
        setGamePlayed(false)
        resetGameOver()
    }

    const addScore = (event) => {
        
        event.preventDefault()
        console.log('adding ', val);
        
        const obj = {
            name: newName,
            score: val
        }
        console.log('obj', obj);
        
        setGamePlayed(false)
        
        scoreService
            .create(obj)
            .then(response => {
                console.log('response ', response);
                
                const sortedScores = allScores.concat(response.data).sort((a, b) => (b.score)- (a.score))
                console.log('1');
 
                setAllScores(sortedScores)
                console.log('2');

                const highestScores = sortedScores.slice(0, 15);
                console.log('3');
                
                setHighScores(highestScores)
                console.log('4');

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