export type TStory = {
  id: number
  title: string
  descendants: number
  url: string
  score: number
  time: number
  type: string
  parent: number
  by: string
  kids: number[]
}

export type TComment = {
  id: number
  by: string
  kids: number[]
  parent: number
  text: string
  time: number
  type: 'comment'
}

export type TLoading = 'pending' | 'loading' | 'fulfilled'
