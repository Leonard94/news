import axios from 'axios'
import { TComment, TStory } from '../types'

const URL = process.env.REACT_APP_API_URL

export const getItem = async (id: number) => {
  try {
    const story = await axios.get(`${URL}/item/${id}.json`)
    return story.data
  } catch (error) {
    console.error(error)
  }
}

export const getStories = async (type: 'new' | 'best' | 'top') => {
  try {
    const storiesListId = await axios.get(`${URL}/${type}stories.json`)

    const stories = await Promise.all(
      storiesListId.data.slice(0, 100).map((story: number) => getItem(story))
    )
    return (await stories) as TStory[]
  } catch (error) {
    console.error(error)
  }
}

export const getComments = async (kids: number[]) => {
  try {
    const comments = await Promise.all(
      kids.map((comment: number) => getItem(comment))
    )
    return (await comments) as TComment[]
  } catch (error) {
    console.error(error)
  }
}
