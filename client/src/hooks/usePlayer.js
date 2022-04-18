import { useState, useCallback } from "react"

import { randomTetromino } from "../business/Tetrominoes"

const buildPlayer = (previous) => {
    let tetrominoes

  // jos on jo pelaaja
    if (previous) {
        tetrominoes = [...previous.previewTetrominoes]
        tetrominoes.unshift(randomTetromino()) // asetetaa yksi uusi tetronimo preview taulukkoon
    } else { // luodaan uusi
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

const usePlayer = () => {
    const [player, setPlayer] = useState(buildPlayer())
    
    const resetPlayer = useCallback(() => {
        setPlayer((prev) => buildPlayer(prev))
    }, [])
    
    return [player, setPlayer, resetPlayer]
}

export default usePlayer
