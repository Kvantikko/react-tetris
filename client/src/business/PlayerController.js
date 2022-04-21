import { Action } from "./Input";
import { rotate } from "./Tetrominoes"
import { hasCollision, isWithinBoard } from "./Board";

const tryToRotate = ({ board, player, setPlayer }) => {
    const shape = rotate({
        shape: player.tetromino.shape,
        direction: 1
    })
  
    const position = player.position;
    const isValidRotation =
        isWithinBoard({ board, position, shape }) &&
        !hasCollision({ board, position, shape })
  
    if (isValidRotation) {
        setPlayer({
            ...player,
            tetromino: {
                ...player.tetromino,
                shape
            }
        })
    } else {
        return false
    }
}

const tryToMove = ({ board, action, player, setPlayer, setGameOver, setGamePlayed }) => {
    // movement change: column +1 = right, column -1 = left, row +1 = down
    const delta = { row: 0, column: 0 } 
 
    if (action === Action.Down) {
        delta.row += 1;
    } else if (action === Action.Left) {
        delta.column -= 1;
    } else if (action === Action.Right) {
        delta.column += 1;
    }
  
    const { collided, nextPosition } = movePlayer({
        delta,
        position: player.position,
        shape: player.tetromino.shape,
        board
    })
  
    // If colliding immediately -> game over...
    const isGameOver = collided && player.position.row === 0;
    if (isGameOver) {
        setGameOver(isGameOver)
        setGamePlayed(true)
    }
    
    // ...otherwise set player to calculated position
    setPlayer({
        ...player,
        collided,
        position: nextPosition
    })
}

/**
 * Moves the player tetromino to a new position.
 * @param delta position change
 * @param postion players position on the board
 * @param shape tetromino shape as 2d array
 * @param board as 2d array
 * @returns next position of attempted move and collision status
 */
export const movePlayer = ({ delta, position, shape, board }) => {
  
    // desired position
    const desiredNextPosition = {
        row: position.row + delta.row,
        column: position.column + delta.column
    }   

    // is desired position already occupied
    const collided = hasCollision({
        board,
        position: desiredNextPosition,
        shape
    })
    
    // is desired position within board
    const isOnBoard = isWithinBoard({
        board,
        position: desiredNextPosition,
        shape
    })

    // if not on board or collided -> don't allow the move
    const preventMove = !isOnBoard || (isOnBoard && collided)
    // the next position is the current one if the move was prevented, otherwise it's the
    // desired postiton
    const nextPosition = preventMove ? position : desiredNextPosition
  
    // if the player tetrominoe moves downwards and hits other tetrominoe -> isHit = true
    const isMovingDown = delta.row > 0;
    const isHit = isMovingDown && (collided || !isOnBoard)
  
    return { collided: isHit, nextPosition }
}

/**
 * Player moves the tetrominoe via this function
 */
export const playerController = ({
    action,
    board,
    player,
    setPlayer,
    setGameOver,
    setGamePlayed
}) => {
    if (!action) return
  
    if (action === Action.Rotate) {
        tryToRotate({ board, player, setPlayer })
    } else {
        tryToMove({ board, player, setPlayer, action, setGameOver, setGamePlayed })
    }
}
  