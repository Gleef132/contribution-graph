interface IColors {
  [key: string]: number[]
}
const colors: IColors = {
  '#ACD5F2': [1, 9],
  '#7FA8C9': [10, 19],
  '#527BA0': [20, 29],
}

export const getColor = (contribution: number): string => {
  if (contribution === 0) return '#e0e0e0'
  if (contribution >= 30) return '#254E77'
  for (let color in colors) {
    if (contribution >= colors[color][0] && contribution <= colors[color][1]) {
      return color
    }
  }
  return ''
}