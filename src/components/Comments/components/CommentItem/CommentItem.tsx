import DOMPurify from 'dompurify'
import { useEffect } from 'react'
import { getComments } from '../../../../api/api'
import { getTimeAfterDate } from '../../../../helpers/getTimeAfterDate/getTimeAfterDate'

import styles from './styles.module.scss'

type TProps = {
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
}) => {
  const cleanHTML = DOMPurify.sanitize(text, {
    USE_PROFILES: { html: true },
  })

  useEffect(() => {
    // if (kids) {
    //   getComments(kids).then((response) => console.log(response))
    // }
  }, [kids])

  return (
    <div className={styles.body}>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: cleanHTML }}
      />
      <div className={styles.about}>
        <div className={styles.about_date}>{getTimeAfterDate(time)}</div>
        <div className={styles.about_username}>{by}</div>
      </div>
    </div>
  )
}
