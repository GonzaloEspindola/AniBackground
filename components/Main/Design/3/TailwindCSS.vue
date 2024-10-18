<script setup lang="ts">
import { useControls } from '~/composable/useControls'
const { controls } = useControls()

const getStyles = () => {
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
      :style="getStyles()"
    ></div>
  </div>
</template>
