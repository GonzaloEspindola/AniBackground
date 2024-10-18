<script setup lang="ts">
import { useControls } from '~/composable/useControls'
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
    animation:
      'shift calc(var(--duration, 2) * 1s) calc(var(--delay, 0) * -1s) infinite ease',
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
        class="flex-1 bg-[length:100%_40vmax] bg-bottom bg-no-repeat scale-100"
        :style="getStyle()"
      ></div>
    </div>
  </div>
</template>
