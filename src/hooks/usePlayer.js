import { useState, useCallback } from "react"

import { randomTetromino } from "../business/Tetrominoes"

const buildPlayer = (previous) => {
    let tetrominoes
    //let playerTetronimo

  // jos on jo pelaaja
    if (previous) {
        //console.log('vanha');
      
        tetrominoes = [...previous.tetrominoes]
        tetrominoes.unshift(randomTetromino()) // asetetaam yksi uusi tetronimo
    } else { // luodaan uusi
        //console.log('uusi')
        tetrominoes = Array(4).fill(null).map(index => {
           
            
            return randomTetromino()
        })
    }

    //console.log('tetrominoes', tetrominoes)

    //playerTetronimo = 

    //console.log('tetrominoesagain', tetrominoes)

    return {
        position: { row: 0, column: 4 },
        tetrominoes, // previews
        tetromino: tetrominoes.pop() // player tetro, pop makes console log weird
    }
}

const usePlayer = () => {
    const [player, setPlayer] = useState(buildPlayer())

    const resetPlayer = useCallback(() => {
        setPlayer((prev) => buildPlayer(prev))
    }, [])

    //console.log('useplayer',player.tetrominoes);
    
    return [player, setPlayer, resetPlayer]
}

export default usePlayer
