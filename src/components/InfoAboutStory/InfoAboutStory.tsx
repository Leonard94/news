import { getTimeAfterDate } from '../../helpers/getTimeAfterDate/getTimeAfterDate'
import { getDeclension } from '../../helpers/getDeclension/getDeclension'

import styles from './styles.module.scss'

type TProps = {
  comments: number
  time: number
  by: string
}

export const InfoAboutStory: React.FC<TProps> = ({ comments, time, by }) => {
  return (
    <div className={styles.info}>
      <div className={styles.comments}>
        {!comments
          ? 'нет комментариев'
          : `${comments} ${getDeclension(comments, 'comments')}`}
      </div>
      <div className={styles.time}>{getTimeAfterDate(time)}</div>
      <div className={styles.author}>{by}</div>
    </div>
  )
}
