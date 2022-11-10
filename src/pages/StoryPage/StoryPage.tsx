import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { getItem } from '../../api/api'

import { Button } from '../../components/Button/Button'
import { Comments } from '../../components/CommentsList/CommentsList'
import { Detail } from './components/Detail'

type TStory = {
  id: number
  title: string
  descendants: number
  url: string
  score: number
  time: number
  type: string
  parent: number
  by: string
  kids: number[]
}

type TParams = {
  id: string
}

type TLoading = 'pending' | 'loading' | 'fulfilled'

export const StoryPage = () => {
  const history = useHistory()
  const { id } = useParams<TParams>()

  const [story, setStory] = useState<TStory | null>(null)
  const [loading, setLoading] = useState<TLoading>('pending')

  const handleGoBack = () => {
    history.push('/')
  }

  useEffect(() => {
    setLoading('loading')
    getItem(Number(id))
      .then((response) => setStory(response))
      .finally(() => setLoading('fulfilled'))
  }, [])

  return (
    <section>
      <Button typeView='default' onClick={handleGoBack}>
        К списку новостей
      </Button>
      {loading === 'loading' && <div>Загрузка...</div>}
      {loading === 'fulfilled' && story && <Detail {...story} />}
      {story?.kids?.length && <Comments kids={story.kids} />}
    </section>
  )
}
