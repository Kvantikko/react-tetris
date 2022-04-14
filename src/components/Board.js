//import "./Board.css"

import BoardCell from "./BoardCell"

const Board = ({ board }) => {
    console.log('boardddddd[0]', board[0]);
    console.log('board' , board)

    const boardX = board
    
    


    const boardStyle = {
        margin: '2em auto',
        display: 'grid',
        width: '45vw',
        height: '90vw',
        border: '10px solid rgb(32, 0, 64)',
        borderRadius: '10px',
        boxShadow: 'rgba(255, 255, 255, 0.35) 0px 5px 15px',
        // Makes the CSS grid template repeat
        gridTemplateRows: `repeat(${boardX.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${boardX.size.columns}, 1fr)`
    }

    return (
        <div className="Board" style={boardStyle}>
            {boardX.rows.map((row, y) => 
                row.map((cell, x) => (
                    <BoardCell key={x* boardX.size.columns + x} cell={cell} />
                ))
            )}
        </div>
    )
}

export default Board