import { useContext } from "react";
//import { Context } from "./Game";

const ScoreBoard = ({ scores }) => {

    //console.log('dddddddddddd',scores);
    
   
    //const value = useContext(Context)
   // console.log('scoreboard', value.scores.map(s => s.name))
  

    
    return(
        <div>
            <header>High Score</header>   
            <ul >
                {scores.map(s =>  <li key={s.name }> {s.name} {s.points}</li>)}
            </ul>
        </div>
    )
}

export default ScoreBoard