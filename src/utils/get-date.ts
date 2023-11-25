const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']


export const getDate = (value: string): string => {
  const date = new Date(value)
  const day = days[date.getDay()]
  const num = date.getDate()
  const year = date.getFullYear()
  const month = months[date.getMonth()]
  return `${day}, ${month} ${num}, ${year}`
}