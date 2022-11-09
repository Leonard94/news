import React from 'react'
import { Button } from '../Button/Button'

import { Story } from '../Story/Story'

type TProps = {
  list: any
  handleGetStories: () => void
}

export const StoriesList: React.FC<TProps> = ({ list, handleGetStories }) => {
  return (
    <>
      <Button
        typeView='default'
        small
        onClick={handleGetStories}
        style={{ marginBottom: '50px' }}
      >
        Обновить список
      </Button>
      {list.map((story: any, index: number) => {
        return <Story key={story.id} number={index + 1} {...story} />
      })}
      <Button
        typeView='default'
        small
        onClick={handleGetStories}
        style={{ margin: '50px 0' }}
      >
        Обновить список
      </Button>
    </>
  )
}
