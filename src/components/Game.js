import Menu from "./Menu"
import Tetris from "./Tetris"

import useGameOver from "../hooks/useGameOver"
import useGameStats from "../hooks/useGameStats"

import { createContext, useState } from 'react';
import scores from "../scores.json"



export const Context = createContext();
/**
 * Game component is the children component of App component. 
 * It renders Menu or Tetris depending on gameOver state. 
 */

const Game = ({ rows, columns }) => {
    //const [gameOver, setGameOver, resetGameOVer] = useGameOver()   
    //const [gamePlayed, setGamePlayed] = useState(false)
   
    
    
    
    

   
   
    
        
    return (
        <Context.Provider value={scores} >
          
           <Tetris 
                        rows={rows} 
                        columns={columns} 
                      
                    />
          
                    
                
           
        </Context.Provider>
    )
}

export default Game