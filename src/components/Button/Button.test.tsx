import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './Button'

const onClick = jest.fn()

describe('Button Component', () => {
  it('Should be Render with only the required parameters', () => {
    render(
      <Button typeView='primary' onClick={onClick}>
        Button Is Render
      </Button>
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Button Is Render')).toBeInTheDocument()
  })

  it('Should be Render with all parameters', () => {
    render(
      <Button
        typeView='text'
        isLoading={false}
        full
        style={{ fontSize: '30px' }}
        onClick={onClick}
      >
        Button Is Render With All Parameters
      </Button>
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(
      screen.getByText('Button Is Render With All Parameters')
    ).toBeInTheDocument()
  })

  it('onChange', () => {
    render(
      <Button typeView='primary' onClick={onClick}>
        Click Me
      </Button>
    )
    userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
