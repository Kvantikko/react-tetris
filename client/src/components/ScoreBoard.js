import "./ScoreBoard.css"

/**
 * Menu's scoreboard
 * @param scores all the scores
 * @returns scoreboard with all the saved scores
 */
const ScoreBoard = ({ scores }) => 
    <div className="HighScores">
        <header className="Header">High Scores</header>   
        <ul className="Scores">
            {scores.map(s =>  <li className="Score" key={s.id}> {s.name} {s.score}</li>)}
        </ul>
    </div>
    
export default ScoreBoard