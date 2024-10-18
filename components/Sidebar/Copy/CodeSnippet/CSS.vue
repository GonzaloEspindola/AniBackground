<script setup lang="ts">
import { createCssStructure } from '~/utils/cssFormatter'
import { useControls } from '~/composable/useControls'

const { controls } = useControls()

const contentResult = ref('')

watch(
  controls.designId,
  () => {
    nextTick(async () => {
      contentResult.value = await createCssStructure(controls.designId.value)
    })
  },
  { immediate: true },
)
</script>

<template>
  <SidebarCopyCodeSnippetCodeContainer
    title="Style.css"
    extension="css"
    :content="contentResult"
  />
</template>

<style>
.span-line {
  display: inline;
}

.span-selector {
  color: #d19a66;
}

.span-property {
  color: #98c379;
}

.span-semicolon {
  color: #e8f8ff;
}

.span-value {
  color: #d19a66;
  margin-left: 5px;
}

.span-bracket {
  color: #e8f8ff;
  margin-left: 5px;
}

.ident {
  margin-left: 20px;
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
