import getRandomColor from './getRandomColor'

export default function createArr(max) {
  const colorsArr = []
  for (let i = 1; i <= max; i += 1) {
    colorsArr.push(getRandomColor())
  }
  return colorsArr
}
