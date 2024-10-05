<script setup lang="ts">
const { controls } = inject('controls')

const getRandomDuration = () => (Math.random() * (15 - 7) + 7).toFixed(2)
const getRandomDelay = () => (Math.random() * (10 - 4) + 4).toFixed(2)
const getRandomX = () => (Math.random() * 5).toFixed(2)
const getRandomY = () => (Math.random() * 10).toFixed(2)
const getRandomScale = () => (Math.random() * 0.1).toFixed(2)

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

const getStyle = () => {
  return {
    '--duration': `${getRandomDuration()}`,
    '--delay': `${getRandomDelay()}`,
    '--x': getRandomX(),
    '--y': getRandomY(),
    '--scale': getRandomScale(),
    'background-image': `linear-gradient(0deg, transparent, ${hexColorToRgba(controls.colors.value.colors[0].color, controls.colors.value.colors[0].transparency)} 10%, transparent, ${hexColorToRgba(controls.colors.value.colors[1].color, controls.colors.value.colors[1].transparency)} 40%, transparent, ${hexColorToRgba(controls.colors.value.colors[2].color, controls.colors.value.colors[2].transparency)} 60%)`,
    '--up': 'calc(var(--y, 10) * 2vmax)',
    '--left': 'calc(var(--x, 2) * 2vmax)',
    transform: 'translate(var(--left), var(--up))',
  }
}
</script>

<template>
  <div
    class="scene h-screen w-screen left-0 z[1] overflow-hidden absolute top-0"
  >
    <div
      class="w-[200vmax] h-[100vmax] left-2/4 transform -translate-x-[20%] -translate-y-[55%] rotate-[30deg] flex blur-[75px]"
    >
      <div
        v-for="index in controls.count.value"
        :key="index"
        class="northen-light flex-1 bg-[length:100%_40vmax] bg-bottom bg-no-repeat scale-100"
        :style="getStyle()"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.northen-light {
  animation: shift calc(var(--duration, 2) * 1s) calc(var(--delay, 0) * -1s)
    infinite ease;
}

@media (max-width: 768px) {
  .northen-light {
    --up: calc(var(--y, 10) * 2vmax);
    --left: calc(var(--x, 2) * 2vmax);
  }
}

@keyframes shift {
  50% {
    transform: translate(0) scale(1);
  }
}

@keyframes flicker {
  0%,
  50%,
  to {
    transform: scale(1);
  }

  25% {
    transform: scale(0);
  }
}
</style>
