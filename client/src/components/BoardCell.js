import "./BoardCell.css"

/**
 * @returns a board cell with specified color 
 */
const BoardCell = ({ cell }) =>
    <div className={`BoardCell ${cell.className}`} />
     
export default BoardCell
