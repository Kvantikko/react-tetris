import { useEffect, useState } from "react"
import { buildBoard, nextBoard } from "../business/Board"

/**
 * useBoard hook renders a new board everytime player state changes, in other words when
 * the player tetromino moves, and when lines are cleared.
 * @returns new board state
 */
const useBoard = ({ rows, columns, player, resetPlayer, addLinesCleared }) => {
    const [board, setBoard] = useState(buildBoard({rows, columns}))
    
    useEffect(() => {
        setBoard((previousBoard) => 
            nextBoard({
                board: previousBoard,
                player,
                resetPlayer,
                addLinesCleared
            })
        )
    }, [player, resetPlayer, addLinesCleared])

    return [board]
}

export default useBoard