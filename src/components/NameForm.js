import React from 'react'

const PersonForm = ({ addScore, name, handleNameChange }) => {
    return(
      <form onSubmit={addScore}>
          <div>
                name: <input value={name} onChange={handleNameChange}/>    
                <button type="submit">Save</button>  
          </div>
      </form>
    )
  }
  
  export default PersonForm