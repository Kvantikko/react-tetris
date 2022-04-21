import { useCallback, useState } from "react"

/**
 * useGameOver hook is used to determine if the menu or tetris game should be rendered.
 * if gameOver == true -> render menu, otherwise tetris game.
 */
const useGameOver = () => {
    const [gameOver, setGameOver] = useState(true)

    const resetGameOver = useCallback(() => {
        setGameOver(false)
    }, [])

    return [gameOver, setGameOver, resetGameOver]
}

export default useGameOver