import { useState } from "react"
import buildBoard from "../utils/Board"

const useBoard = ({rows, columns}) => {
    const [board, setBoard] = useState([buildBoard({rows, columns})])
    //console.log('fewfaefaefeaw' , board);
    
    return board
}

export default useBoard