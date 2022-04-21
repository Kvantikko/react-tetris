import { useState, useCallback } from "react"

import { randomTetromino } from "../business/Tetrominoes"

const buildPlayer = (previous) => {
    let tetrominoes

    if (previous) {
        tetrominoes = [...previous.previewTetrominoes]
        tetrominoes.unshift(randomTetromino())
    } else {
        tetrominoes = Array(4).fill(null).map(index => {
            return randomTetromino()
        })
    }

    const activeTetromino = tetrominoes.pop()
    const previewTetrominoes = tetrominoes

    return {
        position: { row: 0, column: 4 },
        tetromino: activeTetromino,
        previewTetrominoes
    }
}

/**
 * usePlayer hook is responsible for the player tetromino positinon and incoming preview
 * tetrominoes. The state changes everytime when player tetromino moves.
 */
const usePlayer = () => {
    const [player, setPlayer] = useState(buildPlayer())
    
    const resetPlayer = useCallback(() => {
        setPlayer((prev) => buildPlayer(prev))
    }, [])
    
    return [player, setPlayer, resetPlayer]
}

export default usePlayer
