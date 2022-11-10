import { useState } from 'react'
import DOMPurify from 'dompurify'
import classnames from 'classnames'

import { getTimeAfterDate } from '../../../../helpers/getTimeAfterDate/getTimeAfterDate'
import { getComments } from '../../../../api/api'

import { ReactComponent as IconTriangle } from '../../../../assets/icons/triangle.svg'
import styles from './styles.module.scss'

type TProps = {
  id: number
  by: string
  kids: number[]
  parent: number
  text: string
  time: number
  type: 'comment'
  small?: boolean
}

type TComment = {
  id: number
  by: string
  kids: number[]
  parent: number
  text: string
  time: number
  type: 'comment'
}

export const Comment: React.FC<TProps> = ({
  id,
  by,
  kids,
  parent,
  text,
  time,
  small,
}) => {
  const [isShowChildrenComment, setShowChildrenComment] = useState(false)
  const [kidsComments, setKidsComments] = useState<TComment[] | null>(null)

  const cleanHTML = DOMPurify.sanitize(text, {
    USE_PROFILES: { html: true },
  })

  const handleShowKidComment = () => {
    if (!isShowChildrenComment) {
      setShowChildrenComment(true)
      getComments(kids).then((response) => {
        if (response) {
          setKidsComments(response)
        }
      })
    } else {
      setShowChildrenComment(false)
    }
  }

  const triangleStyles = classnames(styles.triangle, {
    [styles.triangle_open]: isShowChildrenComment,
  })

  return (
    <li className={styles.body}>
      <div className={styles.comment}>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
        />
        <div className={styles.about}>
          <div className={styles.about_date}>{getTimeAfterDate(time)}</div>
          <div className={styles.about_username}>{by}</div>
          {kids && (
            <span onClick={handleShowKidComment} className={triangleStyles}>
              <IconTriangle />
            </span>
          )}
        </div>
      </div>
      {kidsComments && isShowChildrenComment && (
        <ul>
          {kidsComments.map((kid: any) => (
            <Comment small key={kid.id} {...kid} />
          ))}
        </ul>
      )}
    </li>
  )
}
