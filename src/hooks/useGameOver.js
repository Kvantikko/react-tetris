import { useCallback, useState } from "react"

const useGameOver = () => {
    const [gameOver, setGamerOver] = useState(true)

    const resetGameOver = useCallback(() => {
        setGamerOver(false)
    }, [])

    return [gameOver, setGamerOver, resetGameOver]
}

export default useGameOver