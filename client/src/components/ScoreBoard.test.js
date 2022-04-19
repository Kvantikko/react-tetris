import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import ScoreBoard from './ScoreBoard'

test('renders scoreboard', () => {
   const highScores = []
    
   // const { container } = 
    render(<ScoreBoard scores={highScores}/> )
    
    const txt = screen.getByText('High Scores')
   
    expect(txt).toBeDefined()
})
