import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import BoardCell from './BoardCell'

import { buildBoard } from "../business/Board"


test('renders all 200 boardcells', () => {
    const rows = 20
    const columns = 10
    const board = buildBoard({ rows, columns })

    const { container } = render(
        board.rows.map((row, y) => 
            row.map((cell, x) => (
                <BoardCell key={x* board.size.columns + x} cell={cell} />
            ))
        )
    )
    
    expect(container.getElementsByClassName('BoardCell').length).toBe(200) // eslint-disable-line
})