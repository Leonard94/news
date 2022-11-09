import { useEffect, useState } from 'react'

import { getStories } from '../../api/api'

import { Skeleton } from './components/Skeleton'
import { StoriesList } from '../../components/StoriesList/StoriesList'

export const HomePage = () => {
  const [loading, setLoading] = useState<'pending' | 'loading' | 'fulfilled'>(
    'pending'
  )
  const [storiesList, setStoriesList] = useState([])

  const handleGetStories = () => {
    getStories('top')
      .then((list: any) => setStoriesList(list))
      .finally(() => setLoading('fulfilled'))
  }

  useEffect(() => {
    setLoading('loading')
    handleGetStories()

    const timer = setInterval(handleGetStories, 60000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      {loading === 'loading' && <Skeleton />}
      {loading === 'fulfilled' && (
        <StoriesList list={storiesList} handleGetStories={handleGetStories} />
      )}
    </>
  )
}
