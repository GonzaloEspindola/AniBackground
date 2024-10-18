<script setup lang="ts">
import { useControls } from '~/composable/useControls'
const { controls } = useControls()

const getStyle = () => {
  return {
    '--hue': getRandomHue(),
    '--duration': getRandomDuration(),
    '--delay': getRandomDelay(),
    background: `linear-gradient(180deg, ${hexColorToRgba(controls.colors.value.colors[0].color, controls.colors.value.colors[0].transparency)} 0%, ${hexColorToRgba(controls.colors.value.colors[0].color, controls.colors.value.colors[0].transparency)} 40%, ${hexColorToRgba(controls.colors.value.colors[1].color, controls.colors.value.colors[1].transparency)} 60%, ${hexColorToRgba(controls.colors.value.colors[2].color, controls.colors.value.colors[2].transparency)} 100%)`,
  }
}
</script>

<template>
  <div class="scene h-[100vh] w-[100vw] relative overflow-hidden">
    <div class="absolute w-[100vw] h-[100vh] flex blur-[80px]">
      <div
        v-for="index in controls.count.value"
        :key="index"
        class="grow bg-[length:100%_200%] animate-moveBeam origin-center"
        :style="getStyle()"
        style="
          animation-duration: calc(var(--duration) * 1s);
          animation-delay: calc(var(--delay) * -1s);
        "
      ></div>
    </div>
  </div>
</template>
