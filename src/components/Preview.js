import "./Preview.css"
import React from "react"

import buildBoard from "../business/Board"
import transferBoard from "../business/Tetrominoes"

import BoardCell from "./BoardCell"

const Preview = ({ tetromino, index }) => {
    const { shape, className } = tetromino

    const board = buildBoard({ rows: 4, columns: 4 })

    const style = { top: `${index * 15}vw`}

    board.rows = transferBoard({
        className,
        isOccupied: false,
        positon: { row: 0, column: 0 },
        rows: board.rows,
        shape
    })

    return(
        <div className="Preview" style={style}>
            <div className="Preview-board">
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