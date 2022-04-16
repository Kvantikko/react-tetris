import React from "react"

import "./GameStats.css"

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats
  const linesToLevel = linesPerLevel - linesCompleted

 
  

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