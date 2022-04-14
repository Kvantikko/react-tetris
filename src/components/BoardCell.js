//import "./BoardCell.css"

const BoardCell = ({ cell }) => {
    var color = null
    const tetriminoName = cell.className

    
    

    switch(tetriminoName) {
        case 'tetrominoI':
            color = 'rgba(80, 227, 230, 1)'
            break
        case 'tetrominoJ':
            color = 'rgba(36, 95, 223, 1)'
            break
        case 'tetrominoL':
            color = 'rgba(223, 173, 36, 1)'
            break
        case 'tetrominoO':
            color = 'rgba(223, 217, 36, 1)'
            break
        case 'tetrominoS':
            color = 'rgba(48, 211, 56, 1)'
            break
        case 'tetrominoT':
            color = 'rgba(132, 61, 198, 1)'
            break
        case 'tetrominoZ':
            color = 'rgba(240, 80, 195, 1)'
            break;
        default:
            color = 'rgb(128, 0, 0)'
    }

    const cellStyle = {
        backgroundColor: `${color}`,
        border: '1px solid rgb(0, 0, 0)',
    }

    
    return (
        <div className={`BoardCell ${cell.className}`} style={cellStyle}>
            <>c</>
        </div>
    )


}
    

export default BoardCell


