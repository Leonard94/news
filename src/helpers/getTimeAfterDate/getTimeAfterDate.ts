import { getDeclension } from '../getDeclension/getDeclension'

export const getTimeAfterDate = (date: number) => {
  const inputDate = new Date(date * 1000)
  const currentDate = new Date()

  const diffMs = Number(currentDate) - Number(inputDate)
  const diffSec = Math.round(diffMs / 1000)
  const diffMin = Math.round(diffSec / 60)
  const diffHour = Math.floor(diffMin / 60)

  if (diffSec < 60) {
    return 'Только что'
  }

  if (diffMin < 60) {
    return `${diffMin} ${getDeclension(diffMin, 'min')} назад`
  }

  if (diffHour < 24) {
    return `${diffHour} ${getDeclension(diffHour, 'hour')} назад`
  }

  const diffDays = currentDate.getDate() - inputDate.getDate()
  const minutes =
    inputDate.getMinutes() < 10
      ? `0${inputDate.getMinutes()}`
      : inputDate.getMinutes()
  const hours =
    inputDate.getHours() < 10
      ? `0${inputDate.getHours()}`
      : inputDate.getHours()

  if (diffDays === 1) {
    return `вчера в ${hours}:${minutes}`
  }

  if (diffDays < 7) {
    return `${diffDays} ${getDeclension(
      diffDays,
      'day'
    )} назад в ${hours}:${minutes}`
  }

  return inputDate.toLocaleString('ru')
}
