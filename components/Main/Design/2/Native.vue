<script setup lang="ts">
import { useControls } from '~/composable/useControls'
import '~/public/design/2/styles.css'
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
