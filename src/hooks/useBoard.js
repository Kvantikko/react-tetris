import { useEffect, useState } from "react"
import { buildBoard, nextBoard } from "../business/Board"

const useBoard = ({ rows, columns, player, resetPlayer, addLinesCleared }) => {
    const [board, setBoard] = useState(buildBoard({rows, columns}))
    //console.log('fewfaefaefeaw' , board);
    
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

    //console.log(board);
    
    return [board]
}

export default useBoard