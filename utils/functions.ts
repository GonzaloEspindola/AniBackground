export const getRandomDuration = () => (Math.random() * (15 - 7) + 7).toFixed(2)
export const getRandomDelay = () => (Math.random() * (10 - 4) + 4).toFixed(2)
export const getRandomX = () => (Math.random() * 5).toFixed(2)
export const getRandomY = () => (Math.random() * 10).toFixed(2)
export const getRandomScale = () => (Math.random() * 0.1).toFixed(2)

export const hexColorToRgba = (hex: string, alpha: number) => {
  hex = hex.replace(/^#/, '')
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('')
  }
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const getRandomSize = () => (Math.random() * 100).toFixed(2)
export const getRandomTop = () => (Math.random() * 100).toFixed(2)
export const getRandomLeft = () => (Math.random() * 100).toFixed(2)
export const getRandomAnimationDuration = () =>
  (Math.random() * (12 - 8) + 8).toFixed(2)
export const getRandomAnimationDelay = () => (Math.random() - 2 * 3).toFixed(2)
export const getRandomOpacity = () => (Math.random() * 1).toFixed(2)

export const getRandomHue = () => (Math.random() * 360).toFixed(2)
