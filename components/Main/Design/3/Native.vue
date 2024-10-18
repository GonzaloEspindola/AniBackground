<script setup lang="ts">
import { useControls } from '~/composable/useControls'
import '~/public/design/3/styles.css'
const { controls } = useControls()

const getStyle = () => {
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
  <div class="scene">
    <div
      v-for="index in controls.count.value"
      :key="index"
      class="circle"
      :style="getStyle()"
    ></div>
  </div>
</template>
