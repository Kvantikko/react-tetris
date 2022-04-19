import React, { useEffect } from "react"

import "./GameStats.css"

import { useContext } from "react"
import { Context } from "./Context"

/**
 * Renders the game statistics
 */
const GameStats = ({ gameStats }) => {
    const [, setVal] = useContext(Context);
    const { level, points, linesCompleted, linesPerLevel } = gameStats
    const linesToLevel = linesPerLevel - linesCompleted

    // useEffect is executed after rendering -> prevents error
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