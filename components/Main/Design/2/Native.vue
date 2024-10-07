<script setup lang="ts">
import { useControls } from '~/composable/useControls'

const { controls } = useControls()

const getRandomHue = () => (Math.random() * 360).toFixed(2)
const getRandomDuration = () => (Math.random() * (15 - 7) + 7).toFixed(2)
const getRandomDelay = () => (Math.random() * (10 - 4) + 4).toFixed(2)

const getStyle = () => {
  return {
    '--hue': getRandomHue(),
    '--duration': getRandomDuration(),
    '--delay': getRandomDelay(),
    background: `linear-gradient(180deg, ${hexColorToRgba(controls.colors.value.colors[0].color, controls.colors.value.colors[0].transparency)} 0%, ${hexColorToRgba(controls.colors.value.colors[0].color, controls.colors.value.colors[0].transparency)} 40%, ${hexColorToRgba(controls.colors.value.colors[1].color, controls.colors.value.colors[1].transparency)} 60%, ${hexColorToRgba(controls.colors.value.colors[2].color, controls.colors.value.colors[2].transparency)} 100%)`,
  }
}

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
</script>

<template>
  <div class="scene">
    <div class="light-beams">
      <div
        v-for="index in controls.count.value"
        :key="index"
        class="light-beam"
        :style="getStyle()"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.scene {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.light-beams {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  filter: blur(80px);
}

.light-beam {
  flex: 1;
  background-size: 100% 200%;
  animation: moveBeam calc(var(--duration) * 1s) calc(var(--delay) * -1s)
    infinite ease-in-out;
  transform-origin: center bottom;
}

@keyframes moveBeam {
  0%,
  100% {
    transform: translateY(0) scaleY(1);
  }
  50% {
    transform: translateY(-50vh) scaleY(1.2);
  }
}
</style>
