import React from "react"

import Preview from "./Preview"

const Previews = ({ tetrominoes }) => {

    console.log("Previewsssss ", tetrominoes);
    

    // Halutaan kaikki paitsi viimeistä eli mitä pelaaja käyttää
    // Ota eka pois ja sen jälkeen käännä järjestys
    const previewTetrominoes = tetrominoes
       

    //console.log("sliced and reversed ", previewTetrominoes)

    return(
        <>
            {previewTetrominoes.map((tetromino, index) => (
                
                <Preview tetromino={tetromino} index={index} key={index} />
            ))}
        </>
    )
}

export default React.memo(Previews)