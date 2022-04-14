import defaultCell from "./Cell"
import { transferToBoard } from "./Tetrominoes"

/**
 * Builds the gameboard and preview boards.
 * @returns board object which has an array of 20 arrays (the rows), and
 * size meanning how many rows and columns the board has
 */
export const buildBoard = ({ rows, columns }) => {
    // every row of the board (20 rows = 20 arrays), 
    const builtRows = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => ({ ...defaultCell }))
    )
    
    //console.log('building a board ', builtRows);
    
    return {
        rows: builtRows,
        size: { rows, columns }
    }
}

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
    const { tetromino, position } = player;
  
    //console.log('here in nextboard ', board[0]);
    
    let rows = board.rows.map((row) =>
        row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
    )
  
    rows = transferToBoard({
        className: tetromino.className,
        isOccupied: player.collided,
        position,
        rows,
        shape: tetromino.shape
    })


    if (player.collided || player.isFastDropping) {
        resetPlayer();
    }

    
    return {
        rows,
        size: {...board.size}
    }
}

// voisko nää kaksi seuraavaa yhdistää
export const hasCollision = ({ board, position, shape }) => {
    for (let y = 0; y < shape.length; y++) {
        const row = y + position.row
  
        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const column = x + position.column
  
                if (
                    board.rows[row] &&
                    board.rows[row][column] &&
                    board.rows[row][column].occupied
                ) {
                    return true
                }
            }
        }
    }
  
    return false
}
  
export const isWithinBoard = ({ board, position, shape }) => {
    for (let y = 0; y < shape.length; y++) {
        const row = y + position.row
  
        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const column = x + position.column
                
                const isValidPosition = 
                    board.rows[row] && board.rows[row][column]
        
                if (!isValidPosition) return false
            }
        }
    }
  
    return true
}