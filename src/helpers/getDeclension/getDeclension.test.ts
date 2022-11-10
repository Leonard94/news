import { getDeclension } from './getDeclension'

test('Should be valid declension', () => {
  expect(getDeclension(1, 'min')).toBe('минуту')
  expect(getDeclension(2, 'min')).toBe('минуты')
  expect(getDeclension(5, 'min')).toBe('минут')
  expect(getDeclension(120, 'min')).toBe('минут')
  expect(getDeclension(121, 'min')).toBe('минуту')
  expect(getDeclension(122, 'min')).toBe('минуты')

  expect(getDeclension(1, 'day')).toBe('день')
  expect(getDeclension(2, 'day')).toBe('дня')
  expect(getDeclension(5, 'day')).toBe('дней')
  expect(getDeclension(120, 'day')).toBe('дней')
  expect(getDeclension(121, 'day')).toBe('день')
  expect(getDeclension(122, 'day')).toBe('дня')

  expect(getDeclension(1, 'hour')).toBe('час')
  expect(getDeclension(5, 'hour')).toBe('часов')
  expect(getDeclension(120, 'hour')).toBe('часов')
  expect(getDeclension(121, 'hour')).toBe('час')

  expect(getDeclension(1, 'comments')).toBe('комментарий')
  expect(getDeclension(2, 'comments')).toBe('комментария')
  expect(getDeclension(5, 'comments')).toBe('комментариев')
  expect(getDeclension(120, 'comments')).toBe('комментариев')
  expect(getDeclension(121, 'comments')).toBe('комментарий')
  expect(getDeclension(122, 'comments')).toBe('комментария')
})
