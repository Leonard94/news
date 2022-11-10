import React from 'react'
import { Button } from '../Button/Button'

import { Story } from '../Story/Story'

type TProps = {
  list: any
  handleGetStories: () => void
  isLoadingUpdate?: boolean
}

export const StoriesList: React.FC<TProps> = ({
  list,
  handleGetStories,
  isLoadingUpdate,
}) => {
  return (
    <>
      <Button
        typeView='default'
        onClick={handleGetStories}
        isLoading={isLoadingUpdate}
        style={{ marginBottom: '50px' }}
      >
        Обновить список
      </Button>
      {list.map((story: any, index: number) => {
        return <Story key={story.id} number={index + 1} {...story} />
      })}
      <Button
        typeView='default'
        onClick={handleGetStories}
        isLoading={isLoadingUpdate}
        style={{ margin: '50px 0' }}
      >
        Обновить список
      </Button>
    </>
  )
}
