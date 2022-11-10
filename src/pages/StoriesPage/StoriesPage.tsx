import { useEffect, useState } from 'react'

import { getStories } from '../../api/api'

import { Skeleton } from './components/Skeleton'
import { StoriesList } from '../../components/StoriesList/StoriesList'
import { useHistory } from 'react-router-dom'

export const StoriesPage = () => {
  const history = useHistory()

  const [loading, setLoading] = useState<'pending' | 'loading' | 'fulfilled'>(
    'pending'
  )
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
  const [storiesList, setStoriesList] = useState([])

  const getTypeOfPage = () => {
    const path = history.location.pathname

    if (path === '/top') {
      return 'top'
    }
    if (path === '/best') {
      return 'best'
    }
    return 'new'
  }

  const handleGetStories = () => {
    setIsLoadingUpdate(true)
    getStories(getTypeOfPage())
      .then((list: any) => setStoriesList(list))
      .finally(() => {
        setLoading('fulfilled')
        setIsLoadingUpdate(false)
      })
  }

  useEffect(() => {
    setLoading('loading')
    handleGetStories()

    const timer = setInterval(handleGetStories, 60000)

    return () => {
      clearInterval(timer)
    }
  }, [history.location.pathname])

  return (
    <>
      {loading === 'loading' && <Skeleton />}
      {loading === 'fulfilled' && (
        <StoriesList
          list={storiesList}
          handleGetStories={handleGetStories}
          isLoadingUpdate={isLoadingUpdate}
        />
      )}
    </>
  )
}
