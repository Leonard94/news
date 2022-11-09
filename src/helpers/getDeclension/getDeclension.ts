export const getDeclension = (
  number: number,
  units: 'min' | 'hour' | 'day' | 'comments'
) => {
  const data = {
    min: ['минуту', 'минуты', 'минут'],
    hour: ['час', 'часa', 'часов'],
    day: ['день', 'дня', 'дней'],
    comments: ['комментарий', 'комментария', 'комментариев'],
  }

  number = Math.abs(number) % 100
  const number1 = number % 10

  if (number > 10 && number < 20) {
    return data[units][2]
  }
  if (number1 > 1 && number1 < 5) {
    return data[units][1]
  }
  if (number1 === 1) {
    return data[units][0]
  }
  return data[units][2]
}
