import "./BoardCell.css"

const BoardCell = ({ cell }) => {
    <div className={`BoardCell ${cell.className}`}>
        <div className="Sparkle">cell</div>
    </div>
}

export default BoardCell