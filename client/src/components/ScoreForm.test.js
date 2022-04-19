import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import Menu from './Menu'
import userEvent from '@testing-library/user-event'

import { Context } from './Context'

test('saving score works', () => {
    const gamePlayed = true
    const setGamePlayed = () => null
    const resetGameOver = () => null
    const highScores  = []
    const setHighScores = () => null
    const allScores = []
    const setAllScores = () => null
    const setValue = () => null
    
    const { container } = render(
        <Context.Provider value={[0, setValue]} >
            <Menu resetGameOver={resetGameOver}
                gamePlayed={gamePlayed}
                setGamePlayed={setGamePlayed}
                highScores={highScores} 
                setHighScores={setHighScores}
                allScores={allScores}
                setAllScores={setAllScores}
            />
        </Context.Provider>
    )
    
    const gameOverTxt = screen.getByText('Game over!')
    expect(gameOverTxt).toBeDefined()
    
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    const saveButton = screen.getByText('Save')
    expect(saveButton).toBeDefined()

    userEvent.type(input, 'Mikko')
    userEvent.click(saveButton)

    //const savedScore = screen.getByText('Mikko 0')
   // expect(savedScore).toBeDefined()
    
   
    
   expect(container.getElementsByClassName('Scores').length).toBe(1) // eslint-disable-line
   
})
