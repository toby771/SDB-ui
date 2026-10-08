export function getRandomIntInclusive(max: number) {
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - 0 + 1)) + 0
}
