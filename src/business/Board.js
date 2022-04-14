import defaultCell from "./Cell"

/**
 * Builds the gameboard and preview boards.
 * @returns board object which has an array of 20 arrays (the rows), and
 * size meanning how many rows and columns the board has
 */
const buildBoard = ({ rows, columns }) => {
    // every row of the board (20 rows = 20 arrays), 
    const builtRows = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => ({ ...defaultCell }))
    )
    
   // console.log('building a board ', builtRows);
    
    return {
        rows: builtRows,
        size: { rows, columns }
    }
}

export default buildBoard