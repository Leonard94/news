import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { getItem } from '../../api/api'
import { TLoading, TStory } from '../../types'

import { Button } from '../../components/Button/Button'
import { CommentsList } from './components/CommentsList/CommentsList'
import { Detail } from './components/Detail/Detail'

type TParams = {
  id: string
}

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
      {story?.kids?.length && <CommentsList kids={story.kids} />}
    </section>
  )
}
