import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div>
      <h2 style={{ marginBottom: '40px' }}>PageNotFound</h2>
      <Link to='/'>На главную</Link>
    </div>
  )
}
