import "./BoardCell.css"

/**
 * @param cell is defaultcell or tetromino ame if it occupies it
 * @returns a board cell with specified color 
 */
const BoardCell = ({ cell }) =>
    <div className={`BoardCell ${cell.className}`} />
     
export default BoardCell
