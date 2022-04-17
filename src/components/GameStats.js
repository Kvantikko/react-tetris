import React, { useEffect } from "react"

import "./GameStats.css"


import { useContext } from "react"
import { Context } from "./Game"



const GameStats = ({ gameStats }) => {
    
    const [, setVal] = useContext(Context);
    
    
    const { level, points, linesCompleted, linesPerLevel } = gameStats
    const linesToLevel = linesPerLevel - linesCompleted

    // use effect suoritetaan vasta renderöinnin jälkeen joten ei tule erroria
    useEffect(() => {
        setVal(points)
    },[points, setVal])
    

    return (
        <ul className="GameStats">
            <li className="statName">Level</li>
            <li className="value">{level}</li>
            <li className="statName">Lines to level</li>
            <li className="value">{linesToLevel}</li>
            <li className="statName">Points</li>
            <li className="value">{points}</li>
        </ul>
    )
}

export default React.memo(GameStats)