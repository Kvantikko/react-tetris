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
        !hasCollision({ board, position, shape }) // yhdistä nää jotenkin?
  
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



const tryToMove = ({ board, action, player, setPlayer, setGameOver }) => {
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
    }
    
    // ...otherwise set player to calculated position
    setPlayer({
        ...player,
        collided,
        position: nextPosition
    })
}

/**
 * @returns next position of attempted move. If colliding, positions stays the same
 */
export const movePlayer = ({ delta, position, shape, board }) => {
    console.log('position before you pressed a key ', position);
    console.log('delta ', delta);
    
    
    // haluttu paikka
    const desiredNextPosition = {
        row: position.row + delta.row,
        column: position.column + delta.column
    }   

    // onko halutussa paikassa jo palikka
    const collided = hasCollision({
        board,
        position: desiredNextPosition,
        shape
    })
    
    // onko palikka halutun paikan jälkeen vielä laudalla
    const isOnBoard = isWithinBoard({
        board,
        position: desiredNextPosition,
        shape
    })

    // jos ei ole laudalla tai törmäsi toisen palikan kanssa -> estetään siirto
    const preventMove = !isOnBoard || (isOnBoard && collided)
    // seuraava positio on nykyinen jos estettiin siirto, muuten haluttu positio
    const nextPosition = preventMove ? position : desiredNextPosition
  
    // jos liikkuu alas ja osui toiseen palikkaan tai lattiaan -> isHit = true
    const isMovingDown = delta.row > 0;
    const isHit = isMovingDown && (collided || !isOnBoard)
  
    return { collided: isHit, nextPosition }
}

export const playerController = ({ action, board, player, setPlayer, setGameOver }) => {
    
    //console.log('playr controller ', action);
    
    if (!action) return
  
    if (action === Action.Rotate) {
        tryToRotate({ board, player, setPlayer })
    } else {
        tryToMove({ board, player, setPlayer, action, setGameOver })
    }
}
  