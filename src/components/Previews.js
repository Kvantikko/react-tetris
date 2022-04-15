import React from "react"

import Preview from "./Preview"

const Previews = ({ previewTetrominoes }) => {

   // console.log("Previewsssss ", previewTetrominoes);

    const style = {
        backGround: 'red'
    }
   
    return(
        <div style={style}>
            {previewTetrominoes.map((tetromino, index) => (
                
                <Preview tetromino={tetromino} index={index} key={index} />
            ))}
        </div>
    )
}

export default React.memo(Previews)