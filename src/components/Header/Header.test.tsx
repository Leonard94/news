import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './Header'

describe('Header', () => {
  it('Header should be render', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(screen.getByText('Главная')).toBeInTheDocument()
    expect(screen.getByText('Лучшее')).toBeInTheDocument()
    expect(screen.getByText('Топ')).toBeInTheDocument()
  })
})
