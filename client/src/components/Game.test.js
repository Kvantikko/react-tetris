import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Game from './Game'

test('renders menu and tetris after button click', () => {
    const highScores  = []
    const allScores = []

    render(<Game highScores={highScores} allScores={allScores} />)
    
    const playButton = screen.getByText('Play Tetris')
    userEvent.click(playButton)
    
    const statText = screen.getByText('Lines to level')
    expect(statText).toBeDefined()
})