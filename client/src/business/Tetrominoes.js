/**
 * All tetriminoes represented as 2d array
 */
export const TETROMINOES = {
    I: {
      shape: [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
      ],
      className: 'tetrominoI'
    },
    J: {
      shape: [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
      ],
      className: 'tetrominoJ'
    },
    L: {
      shape: [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
      ],
      className: 'tetrominoL'
    },
    O: {
      shape: [
        [1, 1],
        [1, 1]
      ],
      className: 'tetrominoO'
    },
    S: {
      shape: [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
      ],
      className: 'tetrominoS'
    },
    T: {
      shape: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]
      ],
      className: 'tetrominoT'
    },
    Z: {
      shape: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
      ],
      className: 'tetrominoZ'
    }
}

/**
 * @returns a random tetrimino object, one of I, J, L, O, S, T, Z
 */
export const randomTetromino = () => {
    // keys = ['I', 'J', 'L',...]
    const keys = Object.keys(TETROMINOES)
    // random index between 0-7
    const index = Math.floor(Math.random() * keys.length)
    const key = keys[index]
    return TETROMINOES[key]
}

/**
 * Transfers tetrimino to the board
 */
export const transferToBoard = ({ 
    className,
    isOccupied,
    position,
    rows,
    shape
}) => {
    // shape is 2D array representation of the tetrominoe shape
    // for each row in this representaion (y is row number) ->
    //     for each cell in this row (x is index of row) ->
    shape.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell) {
                const occupied = isOccupied
                const _y = y + position.row
                const _x = x + position.column
                rows[_y][_x] = { occupied, className }
            }
        })
    })
  
    return rows;
}

/**
 * Rotates the player tetrominoe clockwise
 */
export const rotate = ({ shape, direction }) => {
    // Transpose rows and columns
    const newShape = shape.map((_, index) => 
        shape.map((column) => 
            column[index]
        )
    )

    // Reverso rows to get a rotated matrix
    if (direction > 0) return newShape.map((row) => row.reverse())
  
    return newShape.reverse();
}