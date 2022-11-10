import { StoriesList } from './StoriesList'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

const onClick = jest.fn()
const data = [
  {
    id: 1111,
    title: 'Title Story',
    descendants: 12,
    url: 'url',
    score: 5,
    time: 1668104150,
    type: 'story',
    by: 'Koleda',
    kids: [111, 222, 333],
    parent: 11,
  },
]

describe('StoriesList', () => {
  it('StoriesList should be render', () => {
    render(
      <BrowserRouter>
        <StoriesList handleGetStories={onClick} list={data} />
      </BrowserRouter>
    )
    expect(screen.getByText('Title Story')).toBeInTheDocument()
    expect(screen.getByText('12 комментариев')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('Koleda')).toBeInTheDocument()
  })
})
