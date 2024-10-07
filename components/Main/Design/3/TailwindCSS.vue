<script setup lang="ts">
import { useControls } from '~/composable/useControls'

const { controls } = useControls()

const getRandomSize = () => (Math.random() * 100).toFixed(2)
const getRandomTop = () => (Math.random() * 100).toFixed(2)
const getRandomLeft = () => (Math.random() * 100).toFixed(2)
const getRandomAnimationDuration = () =>
  (Math.random() * (12 - 8) + 8).toFixed(2)
const getRandomAnimationDelay = () => (Math.random() - 2 * 3).toFixed(2)
const getRandomOpacity = () => (Math.random() * 1).toFixed(2)

const hexColorToRgba = (hex: string, alpha: number) => {
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

const getCirclesStyle = () => {
  const size = getRandomSize()
  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `${getRandomTop()}%`,
    left: `${getRandomLeft()}%`,
    'animation-duration': `${getRandomAnimationDuration()}s`,
    'animation-delay': `${getRandomAnimationDelay()}s`,
    'background-color': `${hexColorToRgba(controls.colors.value.colors[0].color, controls.colors.value.colors[0].transparency)}`,
    opacity: getRandomOpacity(),
  }
}
</script>

<template>
  <div class="scene relative h-[100vh] w-[100vw] overflow-hidden">
    <div
      v-for="index in controls.count.value"
      :key="index"
      class="absolute rounded-[50%] animate-float"
      :style="getCirclesStyle()"
    ></div>
  </div>
</template>
