const months = ['Янв.', 'Февр.', 'Март.', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.']

export const getMonts = (): string[] => {
  let result = []
  let index = new Date().getMonth() + 1
  for (let i = 0; i < 12; i++) {
    let monthIndex = index === 0 ? 11 : index - 1
    index = monthIndex
    const el = months[index];
    result.push(el)
  }
  return result.reverse()
}