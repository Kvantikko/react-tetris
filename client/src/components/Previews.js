import React from "react"

import Preview from "./Preview"

const Previews = ({ previewTetrominoes }) => 
    <div>
        {previewTetrominoes.map((tetromino, index) => (
            <Preview tetromino={tetromino} index={index} key={index} />
        ))}
    </div>
    
export default React.memo(Previews)