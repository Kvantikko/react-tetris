/**
 * All tetriminoes: {
 *      tetrimino: {
 *          shape: [[],[],[]]
 *          classname: string
 *      }
 * }
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
 * @param {*} param0 
 * @returns 
 */
export const transferToBoard = ({ 
    className,
    isOccupied,
    position,
    rows,
    shape
}) => {
    /*
    console.log(className);
    console.log(isOccupied);
    console.log(position);
    console.log(rows);
    console.log(shape);
    console.log("----------------------------")
    */
    
    // shape is 2D array representation of the shape
    // for each row in this representaion (y is row number) ->
    //     for each cell in this row (x is index of row) ->
    shape.forEach((row, y) => {
        //console.log('ROWcontent: ', row, '   Yindex: ', y)
        row.forEach((cell, x) => {
            //console.log('CELLcontent: ', cell, '    Xindex: ', x, '   occu ', isOccupied)
            if (cell) {
                //console.log("cell true, = 1")
                
                const occupied = isOccupied
                //console.log(position.row)
                const _y = y + position.row
                //console.log(position.column)
                const _x = x + position.column
                rows[_y][_x] = { occupied, className }
            }
        })
    })

    //console.log("RETUNS ", rows)
  
    return rows;
}