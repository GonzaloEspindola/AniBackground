<script setup lang="ts">
import SidebarCopyCodeSnippetHTML from './HTML.vue'
import SidebarCopyCodeSnippetCSS from './CSS.vue'
import SidebarCopyCodeSnippetJS from './JS.vue'
import { useControls } from '~/composable/useControls'

const { frameworkSelected, stepSelected } = useControls()

const SnippetCodeMap: Record<number, any> = {
  1: {
    'HTML - CSS': SidebarCopyCodeSnippetHTML,
    TailwindCSS: SidebarCopyCodeSnippetHTML,
  },
  2: {
    'HTML - CSS': SidebarCopyCodeSnippetCSS,
    TailwindCSS: SidebarCopyCodeSnippetJS,
  },
}

const currentComponent = computed(() => {
  const selectedStep = stepSelected.value
  const selectedFramework = frameworkSelected.value

  return SnippetCodeMap[selectedStep]
    ? SnippetCodeMap[selectedStep][selectedFramework] || null
    : null
})
</script>

<template>
  <Transition name="fade" mode="out-in">
    <component :is="currentComponent" />
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
