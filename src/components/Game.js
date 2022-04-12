import Menu from "./Menu"
import useGameOver from "../hooks/useGameOver"

const Game = ({rows, columns}) => {
    const [gameOver, setGamerOver, resetGameOVer] = useGameOver()    
    
    const start = () =>
        console.log(`start game over is ${gameOver}`)

    return (
        <div className="Game">
            <Menu onClick={start} />
            rows {rows}, columns {columns}
        </div>
    )
}

export default Game