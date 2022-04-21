import React from "react"

import Preview from "./Preview"

/**
 * @param previewTetrominoes all 3 preview tetrominoes
 * @returns div of all the previews
 */

const Previews = ({ previewTetrominoes }) => 
    <div>
        {previewTetrominoes.map((tetromino, index) => (
            <Preview tetromino={tetromino} key={index} />
        ))}
    </div>
    
export default React.memo(Previews)