import React from "react"

import Preview from "./Preview"

const Previews = ({ previewTetrominoes }) => {

   // console.log("Previewsssss ", previewTetrominoes);
   
    return(
        <>
            {previewTetrominoes.map((tetromino, index) => (
                
                <Preview tetromino={tetromino} index={index} key={index} />
            ))}
        </>
    )
}

export default React.memo(Previews)