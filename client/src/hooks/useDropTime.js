import { useState, useCallback, useEffect } from "react";

const defaultDropTime = 1000;
const minimumDropTime = 100;
const speedIncrement = 50;

/**
 * useDropTime hook is responsible the time it takes for the tetrominoe to fall.
 * Default is 1 second and it decreases as the levels go up.
 */
const useDropTime = ({ gameStats }) => {
    const [dropTime, setDropTime] = useState(defaultDropTime)
    const [previousDropTime, setPreviousDropTime] = useState()

    const resumeDropTime = useCallback(() => {
        if (!previousDropTime)
            return
        setDropTime(previousDropTime)
        setPreviousDropTime(null)
    }, [previousDropTime])

    const pauseDropTime = useCallback(() => {
        if (dropTime)
            setPreviousDropTime(dropTime)
        setDropTime(null)
    }, [dropTime, setPreviousDropTime])

    useEffect(() => {
        // focus on tetris div when game starts
        document.getElementById("Tetris").focus()
        const speed = speedIncrement * (gameStats.level - 1)
        const newDropTime = Math.max(defaultDropTime - speed, minimumDropTime)

        setDropTime(newDropTime)
    }, [gameStats.level, setDropTime])

    return [dropTime, pauseDropTime, resumeDropTime]
}

export default useDropTime
