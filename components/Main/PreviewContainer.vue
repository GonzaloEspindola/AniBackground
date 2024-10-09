<script setup lang="ts">
import TailwindCSSDesign1 from '~/components/Main/Design/1/TailwindCSS.vue'
import NativeDesign1 from '~/components/Main/Design/1/Native.vue'
import TailwindCSSDesign2 from '~/components/Main/Design/2/TailwindCSS.vue'
import NativeDesign2 from '~/components/Main/Design/2/Native.vue'
import TailwindCSSDesign3 from '~/components/Main/Design/3/TailwindCSS.vue'
import NativeDesign3 from '~/components/Main/Design/3/Native.vue'
import TailwindCSSDesign4 from '~/components/Main/Design/4/TailwindCSS.vue'
import NativeDesign4 from '~/components/Main/Design/4/Native.vue'
import { useControls } from '~/composable/useControls'
import { computed } from 'vue'

const { controls, frameworkSelected } = useControls()

const designMap: Record<number, any> = {
  1: {
    'HTML - CSS': NativeDesign1,
    TailwindCSS: TailwindCSSDesign1,
  },
  2: {
    'HTML - CSS': NativeDesign2,
    TailwindCSS: TailwindCSSDesign2,
  },
  3: {
    'HTML - CSS': NativeDesign3,
    TailwindCSS: TailwindCSSDesign3,
  },
  4: {
    'HTML - CSS': NativeDesign4,
    TailwindCSS: TailwindCSSDesign4,
  },
}

const currentComponent = computed(() => {
  const selectedDesignId = controls.designId.value
  const selectedFramework = frameworkSelected.value

  return designMap[selectedDesignId]
    ? designMap[selectedDesignId][selectedFramework] || null
    : null
})
</script>

<template>
  <main class="flex flex-1">
    <component :is="currentComponent" />
  </main>
</template>
