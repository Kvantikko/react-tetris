import "./Preview.css"

import React from "react"

import BoardCell from "./BoardCell"

import { buildBoard } from "../business/Board"
import { transferToBoard } from "../business/Tetrominoes"

/**
 * Shows a preview of incoming tetrimino
 */

const Preview = ({ tetromino, index }) => {
   
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
        // Makes the CSS grid template repeat
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
    }

    board.rows = transferToBoard({
        className,
        isOccupied: false,
        position: { row: 0, column: 0 },
        rows: board.rows,
        shape
    })

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

export default Preview