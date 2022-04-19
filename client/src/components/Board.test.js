import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import Board from './Board'
import { buildBoard } from "../business/Board"

test('renders initial board', () => {
    const rows = 20
    const columns = 10
    const board = buildBoard({ rows, columns })

    const { container } = render(<Board board={board} />)
    
    expect(container.getElementsByClassName('Board').length).toBe(1) // eslint-disable-line
})