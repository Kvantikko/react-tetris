import "./Preview.css"

import React from "react"

import BoardCell from "./BoardCell"

import { buildBoard } from "../business/Board"
import { transferToBoard } from "../business/Tetrominoes"

/**
 * Shows a preview of incoming tetrimino
 * @param tetromino one of three available preview tetrominoes
 * @returns small preview board with a tetrommino
 */
const Preview = ({ tetromino }) => {
    const { shape, className } = tetromino

    const board = buildBoard({ rows: 4, columns: 4 })
    
    const boardStyle = {
        // Makes the CSS grid template repeat cells
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
        <div className="Preview" >
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