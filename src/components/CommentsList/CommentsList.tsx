import { useEffect, useState } from 'react'

import { getComments } from '../../api/api'
import { Button } from '../Button/Button'

import { Comment } from './components/CommentItem/CommentItem'

import styles from './styles.module.scss'

type TComment = {
  id: number
  by: string
  kids: number[]
  parent: number
  text: string
  time: number
  type: 'comment'
}

type TProps = {
  kids: number[]
}

type TLoading = 'pending' | 'loading' | 'fulfilled'

export const Comments: React.FC<TProps> = ({ kids }) => {
  const [loading, setLoading] = useState<TLoading>('pending')
  const [comments, setComments] = useState<TComment[] | null>(null)

  const handleGetComments = () => {
    getComments(kids)
      .then((response: any) => setComments(response))
      .finally(() => setLoading('fulfilled'))
  }

  useEffect(() => {
    if (kids.length) {
      setLoading('loading')
      handleGetComments()
    }
  }, [kids])

  return (
    <div className={styles.body}>
      {loading === 'loading' && <div>Загрузка комментариев</div>}
      {loading === 'fulfilled' && comments && (
        <>
          {comments.length > 4 && (
            <Button
              typeView='text'
              onClick={handleGetComments}
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
            style={{ marginBottom: '50px' }}
          >
            Обновить комментарии
          </Button>
        </>
      )}
    </div>
  )
}
