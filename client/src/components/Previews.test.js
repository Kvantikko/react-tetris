import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import Preview from './Preview'

import { randomTetromino } from "../business/Tetrominoes"

test('renders 3 previews and player', () => {
    const tetrominoes = Array(4).fill(null).map(index => randomTetromino())
    
    const { container } = render(
        tetrominoes.map((tetromino, index) => (
            <Preview tetromino={tetromino} index={index} key={index} />
        ))
    )
    
    expect(container.getElementsByClassName('Preview').length).toBe(4) // eslint-disable-line
})
