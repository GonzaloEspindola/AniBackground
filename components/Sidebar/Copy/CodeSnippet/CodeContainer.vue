<script setup lang="ts">
import { useControls } from '~/composable/useControls'
import {
  copyBackgroundCSS,
  copyBackgroundHTML,
  copyTailwindConfig,
} from '@/utils/exportCode'

const { controls } = useControls()

interface Props {
  title: string
  extension: string
}

const props = defineProps<Props>()

const copyCode = (extension: string) => {
  if (extension === 'html') {
    copyBackgroundHTML()
  } else if (extension === 'css') {
    copyBackgroundCSS(controls.designId.value)
  } else if (extension === 'tailwind.config.js') {
    copyTailwindConfig(controls.designId.value)
  }
}
</script>

<template>
  <section
    class="shadow-lg rounded-md border border-[#2e343b] dark:border-[#2e343b] max-h-[400px]"
  >
    <div class="flex justify-between items-center bg-[#2e343b]">
      <div class="flex gap-2 items-center bg-[#21272f] px-2 py-1 rounded-t-md">
        <img
          :src="`/svg/${extension}.svg`"
          alt="Icono de HTML"
          class="w-3 h-3"
        />
        <h2 class="text-xs text-white">{{ props.title }}</h2>
        <span class="text-xs text-white">x</span>
      </div>
      <div class="flex gap-2 items-center bg-[#33383f] px-2 py-1 rounded-md">
        <h2 class="text-xs text-white" @click="copyCode(props.extension)">
          Copiar
        </h2>
        <img
          src="/svg/copy.svg"
          alt="Icono de copiar"
          class="w-3 h-3 color-white"
        />
      </div>
    </div>
    <code
      id="codeCanvas"
      class="flex flex-col max-h-[300px] min-h-[300px] overflow-y-auto p-4 bg-[#21272f] text-sm"
    >
    </code>
  </section>
</template>
