<script setup lang="ts">
import { getJsCode } from '@/utils/jsUtils'
import { useControls } from '~/composable/useControls'

const { controls } = useControls()

watch(
  controls.designId,
  () => {
    nextTick(() => {
      getJsCode(controls.designId.value)
    })
  },
  { immediate: true },
)
</script>

<template>
  <SidebarCopyCodeSnippetCodeContainer
    title="tailwind.config.js"
    extension="tailwind.config.js"
  />
</template>

<style>
.span-line {
  display: inline;
}

.span-bracket {
  color: #808073;
  margin-right: 5px;
}

.span-punctuation {
  color: #808073;
}

.span-identifier {
  color: #2a65b9;
}

.span-attr {
  color: #62afd4;
}

.span-value {
  color: #c94821;
}

.span-content {
  color: #d9d7ce;
}

#codeCanvas {
  scrollbar-width: thin;
  scrollbar-color: #62afd4 #21272f;
}

#codeCanvas::-webkit-scrollbar {
  width: 8px;
}

#codeCanvas::-webkit-scrollbar-track {
  background: #21272f;
}

#codeCanvas::-webkit-scrollbar-thumb {
  background-color: #62afd4;
  border-radius: 10px;
}

#codeCanvas::-webkit-scrollbar-thumb:hover {
  background-color: #2a65b9;
}
</style>
