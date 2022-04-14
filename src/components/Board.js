//import "./Board.css"

import BoardCell from "./BoardCell"

const Board = ({ board }) => {
    //console.log('boardddddd', board);
    
    //console.log(board.rows)
    const boardStyle = {
        margin: '2em auto',
        display: 'grid',
        width: '45vw',
        height: '90vw',
        border: '10px solid rgb(32, 0, 64)',
        borderRadius: '10px',
        boxShadow: 'rgba(255, 255, 255, 0.35) 0px 5px 15px',
        // Makes the CSS grid template repeat
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