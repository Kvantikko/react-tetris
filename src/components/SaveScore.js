import { useEffect } from "react"
import NameForm from "./NameForm"

const SaveScore = ({ gameStats, gamePlayed, addScore, name, handleNameChange }) => {
   
    //let points = gameStats.points
/*
    useEffect(() => {
        const points = 
    }, [])
    */

    //console.log('', gameStats);
    
   
    if (gamePlayed) {
        return(
            <div>
                <div>Game over!</div>
                <div>Your Score:</div>
                <div>0</div>
                <NameForm addScore={addScore} name={name} handleNameChange={handleNameChange} />
            </div>
        )
    } else {
        return null
    }
    
    
}

export default SaveScore