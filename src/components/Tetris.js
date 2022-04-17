import "./Tetris.css"

import { Action, actionForKey, actionIsDrop } from "../business/Input"
import { playerController } from "../business/PlayerController"

import Board from "./Board"
import GameStats from "./GameStats"
import Previews from "./Previews"

import useBoard from "../hooks/useBoard"
import usePlayer from "../hooks/usePlayer"
import useDropTime from "../hooks/useDropTime"
import useInterval from "../hooks/useInterval"

import useGameStats from "../hooks/useGameStats"

import Menu from "./Menu"


import useGameOver from "../hooks/useGameOver"


import { createContext, useState } from 'react';

/**
 * Tetris component is a children component of Game component. 
 * Renders Board, Gamestats and Previews 
 */

const Tetris = ({ rows, columns,  }) => {
    // Hooks
    const [gameStats, addLinesCleared] = useGameStats() 
    const [player, setPlayer, resetPlayer] = usePlayer()
    const [board, setBoard] = useBoard({ rows, columns, player, resetPlayer, addLinesCleared })



    const [gameOver, setGameOver, resetGameOVer] = useGameOver()   
    const [gamePlayed, setGamePlayed] = useState(false)

   

    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        gameStats
    })

    useInterval(() => {
        handleInput({ action: Action.Down })
    }, dropTime)

    // key comes up
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);
        if (actionIsDrop(action)) resumeDropTime()
      };
    
    // key goes down
    const onKeyDown = ({ code }) => {
       // console.log('key down: ', code)
        const action = actionForKey(code)
        
        if (action === Action.Pause) {
            if (dropTime) {
                pauseDropTime()
            } else {
                resumeDropTime()
            }
        } else if (action === Action.Quit) {
            setGameOver(true)
        } else {
            
           // console.log('droptime ', dropTime);
            if (actionIsDrop(action)) {
                pauseDropTime()
            }
            /*
            if (!dropTime) {
                return
            }
            
            */
            handleInput({ action })
        }
        
        //handleInput({ action })
    }

    const handleInput = ({ action }) => {
        
       
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver,
            setGamePlayed
        })
    }

    
    const style = {
       marginLeft: '1vw', 
       display: 'flex',
      flexDirection: 'column',
       marginTop: '4vh',
        height: '90vh'
    }

    const style2 = { 
        backgroundColor: 'black',
        height: '100%'
    }

    

    
    return (
        <div style={style2}>
        {gameOver ? (
            <Menu resetGameOver={resetGameOVer} gameStats={gameStats} gamePlayed={gamePlayed} setGamePlayed={setGamePlayed} />
        ) : (
        
        
            
            <div 
                className="Tetris"
                id="Tetris"
                role="button"
                tabIndex='0'
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                autoFocus
            >
                <Board board={board}  />
                    <div className="Info" style={style} >
                        <Previews previewTetrominoes={player.previewTetrominoes}  />
                        <GameStats gameStats={gameStats} />
                    </div>
            </div>
        )}</div>
    )
        }

export default Tetris