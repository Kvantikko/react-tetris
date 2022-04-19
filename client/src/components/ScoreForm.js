import "./ScoreForm.css"

import { useContext } from "react"
import { Context } from './Context'

/**
 * Form for writing player name after a game has ended
 */
const ScoreForm = ({ gamePlayed, addScore, name, handleNameChange }) => {
    const [val, ] = useContext(Context);

    if(!gamePlayed) return null

    return(
        <div className="ScoreForm" >
            <div className="GameOver">Game over!</div>
            <div className="ScoreFormText">Your score:</div>
            <div className="ScoreFormText">{val}</div>
            <form onSubmit={addScore}>
                <div className="ScoreFormInput">
                    Name:
                    <input className="NameField" value={name} onChange={handleNameChange}/>    
                    <button className="ButtonSave" type="submit">Save</button>  
                </div>
            </form>
        </div>
    )
}

export default ScoreForm



