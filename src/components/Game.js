import Menu from "./Menu"
import Tetris from "./Tetris"

import  useGameOver from "../hooks/useGameOver"

/**
 * Game component is the children component of App component. 
 * It renders Menu or Tetris depending on gameOver state. 
 */

const Game = ({ rows, columns }) => {
    const [gameOver, setGameOver, resetGameOVer] = useGameOver()    
    
    const start = () => {
        console.log(`start game over is ${gameOver}`)
        resetGameOVer()
    }
        
    return (
        <div className="Game">
            {gameOver ? (
                <Menu onClick={start} />
            ) : (
                <Tetris 
                    rows={rows} 
                    columns={columns} 
                    setGameOver={setGameOver} 
                />
            )}
        </div>
    )
}

export default Game