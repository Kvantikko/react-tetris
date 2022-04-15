import "./Preview.css"

import React from "react"

import BoardCell from "./BoardCell"

import { buildBoard } from "../business/Board"
import { transferToBoard } from "../business/Tetrominoes"

/**
 * Shows a preview of incoming tetrimino
 */

const Preview = ({ tetromino, index }) => {
    //console.log('Preview ', tetromino, index);
    
    const { shape, className } = tetromino

    const board = buildBoard({ rows: 4, columns: 4 })
    

    const style = { 
       // position: 'absolute',
        //top: '0',
       // left: '65vw',
        ////// borderRadius: '10px',
       // top: `${index * 6}vw` ,
        //left: `20vw`
    }

    const boardStyle = {
        /*
        margin: '2em auto',
        display: 'grid',
        
        height: '7vw',
        width: '7vw',
        border: '10px solid rgb(32, 0, 64)',
        borderRadius: '10px',
        boxShadow: 'rgba(255, 255, 255, 0.35) 0px 5px 15px',
        */
        // Makes the CSS grid template repeat
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
    }

    

        //grid-template-rows: repeat(4, 1fr);
       // grid-template-columns: repeat(4, 1fr);
       // width: 11vw;
       // height: 11vw;
      
    
    
    board.rows = transferToBoard({
        className,
        isOccupied: false,
        position: { row: 0, column: 0 },
        rows: board.rows,
        shape
    })

    //console.log('Preview ', board.rows);

    return(
        <div className="Preview" style={style} >
            <div className="Preview-board" style={boardStyle} >
                {board.rows.map((row, y) =>
                    row.map((cell, x) => (
                        <BoardCell key={x * board.size.columns + x } cell={cell} />
                    ))
                )}
            </div>
        </div>
    )
}

// 

export default Preview