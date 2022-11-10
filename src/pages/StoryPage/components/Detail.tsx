import { TStory } from '../../../types'

import { InfoAboutStory } from '../../../components/InfoAboutStory/InfoAboutStory'

import styles from './styles.module.scss'

export const Detail: React.FC<TStory> = ({
  title,
  descendants,
  by,
  time,
  url,
  kids,
}) => {
  return (
    <article className={styles.body}>
      <div className={styles.info}>
        <InfoAboutStory comments={descendants} time={time} by={by} />
      </div>
      <div className={styles.title}>{title}</div>
      <a href={url} target='_blank' rel='noreferrer' className={styles.link}>
        Перейти к новости
      </a>
    </article>
  )
}
