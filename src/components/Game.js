import Menu from "./Menu"
import Tetris from "./Tetris"
import useGameOver from "../hooks/useGameOver"

const Game = ({rows, columns}) => {
    const [gameOver, setGamerOver, resetGameOVer] = useGameOver()    
    
    const start = () => {
        console.log(`start game over is ${gameOver}`)
        resetGameOVer()
    }
        
    return (
        <div className="Game">
            {gameOver ? (
                <Menu onClick={start} />
            ) : (
                <Tetris rows={rows} columns={columns} setGamerOver={setGamerOver} />
              
            )}
        </div>
    )
}

export default Game