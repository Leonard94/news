import axios from 'axios'

const URL = process.env.REACT_APP_API_URL

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
// })

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
      storiesListId.data.slice(0, 10).map((story: any) => getItem(story))
    )
    return stories
  } catch (error) {
    console.error(error)
  }
}

export const getComments = async (kids: number[]) => {
  try {
    const comments = await Promise.all(
      kids.map((comment: any) => getItem(comment))
    )
    return comments
  } catch (error) {
    console.error(error)
  }
}
