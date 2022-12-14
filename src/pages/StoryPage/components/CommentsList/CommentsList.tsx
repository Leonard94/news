import { useEffect, useState } from 'react'

import { getComments } from '../../../../api/api'
import { TComment, TLoading } from '../../../../types'

import { Button } from '../../../../components/Button/Button'
import { Comment } from './components/Comment/Comment'

import styles from './styles.module.scss'

type TProps = {
  kids: number[]
}

export const CommentsList: React.FC<TProps> = ({ kids }) => {
  const [loading, setLoading] = useState<TLoading>('pending')
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
  const [comments, setComments] = useState<TComment[] | null>(null)

  const handleGetComments = () => {
    setIsLoadingUpdate(true)
    getComments(kids)
      .then((response: any) => setComments(response))
      .finally(() => {
        setIsLoadingUpdate(false)
        setLoading('fulfilled')
      })
  }

  useEffect(() => {
    if (kids.length) {
      setLoading('loading')
      handleGetComments()
    }
  }, [kids])

  return (
    <div className={styles.body}>
      {loading === 'loading' && (
        <div className={styles.loading}>Загрузка комментариев...</div>
      )}
      {loading === 'fulfilled' && comments && (
        <>
          {comments.length > 4 && (
            <Button
              typeView='text'
              onClick={handleGetComments}
              isLoading={isLoadingUpdate}
              style={{ marginBottom: '50px' }}
            >
              Обновить комментарии
            </Button>
          )}

          <ul className={styles.comments}>
            {comments.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </ul>

          <Button
            typeView='primary'
            onClick={handleGetComments}
            isLoading={isLoadingUpdate}
            style={{ marginBottom: '50px' }}
          >
            Обновить комментарии
          </Button>
        </>
      )}
    </div>
  )
}
