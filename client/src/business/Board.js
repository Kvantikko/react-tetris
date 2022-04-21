import defaultCell from "./Cell"
import { transferToBoard } from "./Tetrominoes"

/**
 * Builds the initial gameboard and preview boards.
 * @param rows how many rows the board has
 * @param rows how many columns the board has
 * @returns board object which has an 2d array representation of the board, and
 * size meanning how many rows and columns the board has
 */
export const buildBoard = ({ rows, columns }) => {
    const builtRows = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => ({ ...defaultCell }))
    )
    
    return {
        rows: builtRows,
        size: { rows, columns }
    }
}

/**
 * Builds the gameboard again after application state has changed.
 * @param board the game board as 2d array
 * @param player player state as object
 * @param resetPlayer the function to reset player at the top of the board 
 * @param addLinesCleared the function to change game stat's state 
 * @returns new board object with changes reflecting application's state changes
 */
export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
    const { tetromino, position } = player
  
    // if cell is not occupied -> defaultcell
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

    // row clearing
    const blankRow = rows[0].map((_) => ({ ...defaultCell }))
    
    let linesCleared = 0
    
    // Building a new set of rows. If row was cleared -> linesCleared++ -> insert new blank
    // line at the beginning
    rows = rows.reduce((accumulator, row) => {
        if (row.every((column) => column.occupied)) {
            linesCleared++
            accumulator.unshift([...blankRow])
        } else {
            accumulator.push(row)
        }

        return accumulator
    }, [])

    if (linesCleared > 0) {
        addLinesCleared(linesCleared)
    }

    if (player.collided || player.isFastDropping) {
        resetPlayer()
    }

    return {
        rows,
        size: {...board.size}
    }
}

/**
 * Checks if the player tetromino collides with other tetrominoes.
 * @param board the game board as 2d array
 * @param position the postion of the player
 * @param shape tetrominoe type
 * @returns true if collides, false if doesn't
 */
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

/**
 * Checks if the player tetromino is within the board edges
 * @param board the game board as 2d array
 * @param position the postion of the player
 * @param shape tetrominoe type
 * @returns true if within board, false if outside
 */
export const isWithinBoard = ({ board, position, shape }) => {
    for (let y = 0; y < shape.length; y++) {
        const row = y + position.row
  
        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const column = x + position.column
                
                const isValidPosition = board.rows[row] && board.rows[row][column]
        
                if (!isValidPosition) return false
            }
        }
    }
  
    return true
}