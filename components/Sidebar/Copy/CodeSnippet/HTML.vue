<script setup lang="ts">
import { createHtmlStructure } from '~/utils/htmlFormatter'
import { useControls } from '~/composable/useControls'

const { frameworkSelected } = useControls()

const contentResult = ref('')

watch(
  frameworkSelected,
  () => {
    nextTick(() => {
      contentResult.value = createHtmlStructure()!
    })
  },
  { immediate: true },
)
</script>

<template>
  <SidebarCopyCodeSnippetCodeContainer
    title="Background.html"
    extension="html"
    :content="contentResult"
  />
</template>

<style>
.span-line {
  display: inline;
}

.span-decoration {
  color: #808073;
}

.span-tag {
  color: #2a65b9;
}

.span-attr {
  color: #62afd4;
}

.span-attr-value {
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
