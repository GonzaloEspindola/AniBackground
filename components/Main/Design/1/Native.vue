<script setup lang="ts">
import { useControls } from '~/composable/useControls'
import '~/public/design/1/styles.css'
const { controls } = useControls()

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
  <div class="scene">
    <div class="northen-lights">
      <div
        v-for="index in controls.count.value"
        :key="index"
        class="northen-light"
        :style="getStyle()"
      ></div>
    </div>
  </div>
</template>
