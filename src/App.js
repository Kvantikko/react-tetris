import "./styles.css"

import Game from "./components/Game"
import { useEffect, useState } from "react"
import scoreService from "./services/scores"


function App() {
    const [ highScores, setHighScores ] = useState([])
    const [ allScores, setAllScores ] = useState([])
   
    useEffect(() => {
        scoreService
            .getAll()
            .then(response => {
                const sortedScores = response.data.sort((a, b) => (b.score)- (a.score))
                const highestScores = sortedScores.slice(0, 15);
                setHighScores(highestScores)
                setAllScores(sortedScores)
            })
    }, [])


    return(
        <div className="App">
            <Game highScores={highScores} setHighScores={setHighScores} setAllScores={setAllScores} allScores={allScores} />
        </div>
    )
}

export default App
