import "./Board.css"

import BoardCell from "./BoardCell"

/**
 * @param board the board object
 * @returns the tetris board with boardcells
 */
const Board = ({ board }) => {
    
    // makes the css grid repeat 
    const boardStyle = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
    }

    return (
        <div className="Board" style={boardStyle}>
            {board.rows.map((row, y) => 
                row.map((cell, x) => (
                    <BoardCell key={x* board.size.columns + x} cell={cell} />
                ))
            )}
        </div>
    )
}

export default Board