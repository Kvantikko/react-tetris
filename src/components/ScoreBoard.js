import "./ScoreBoard.css"

const ScoreBoard = ({ scores }) => {

    console.log('ScoreBoard ',scores);
    return(
        <div className="HighScores">
            <header className="Header">High Scores</header>   
            <ul className="Scores">
                {scores.map(s =>  <li className="Score" key={s.id}> {s.name} {s.score}</li>)}
            </ul>
        </div>
    )
}

export default ScoreBoard