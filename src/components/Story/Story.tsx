import { Link } from 'react-router-dom'

import { ReactComponent as IconScore } from '../../assets/icons/triangle.svg'

import styles from './styles.module.scss'
import { InfoAboutStory } from '../InfoAboutStory/InfoAboutStory'

type Tprops = {
  number: number
  id: number
  title: string
  by: string
  time: number
  descendants: number
  score: number
  kids: number[]
}

export const Story: React.FC<Tprops> = ({
  number,
  id,
  title,
  by,
  time,
  descendants,
  score,
  kids,
}) => {
  return (
    <div className={styles.story}>
      <div className={styles.number}>{number}</div>
      <div className={styles.score}>
        <IconScore />
        <span>{score}</span>
      </div>
      <div>
        <Link to={`/title/${id}`} className={styles.title} title='подробнее'>
          {title}
        </Link>
        <InfoAboutStory
          comments={descendants}
          time={time}
          by={by}
        />
      </div>
    </div>
  )
}
