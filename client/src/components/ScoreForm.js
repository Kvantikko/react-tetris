import "./ScoreForm.css"

import { useContext } from "react"
import { Context } from './Context'

/**
 * Form for writing player name after a game has ended
 * @param gamePlayed the state which tells if player just finished a game (gameover, not quit)
 * @param addScore the function to send score to the backend
 * @param name input field value
 * @param handleNameChange function to handle name state change
 * @returns a form with text input field and save button
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



