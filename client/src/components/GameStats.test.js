import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import GameStats from './GameStats'

import { Context } from './Context'

test('renders initial statistics', () => {
    const stats = {
        level: 1,
        linesCompleted: 0,
        linesPerLevel: 10,
        points: 0
    }

    const setValue = () => null
    
    render(
        <Context.Provider value={[0, setValue]} >
            <GameStats gameStats={stats} />
        </Context.Provider>
    )
    
    const levelTxt = screen.getByText('Level')
    const linesToLevelTxt = screen.getByText('Lines to level')
    const pointsTxt = screen.getByText('Points')
    const level = screen.getByText('1')
    const linesToLevel = screen.getByText('10')
    const points = screen.getByText('0')

    expect(levelTxt).toBeDefined()
    expect(linesToLevelTxt).toBeDefined()
    expect(pointsTxt).toBeDefined()
    expect(level).toBeDefined()
    expect(linesToLevel).toBeDefined()
    expect(points).toBeDefined()
})