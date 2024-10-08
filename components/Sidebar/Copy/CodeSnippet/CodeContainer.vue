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
    class="shadow-lg rounded-md max-h-[400px] border-2 border-light-border dark:border-dark-border"
  >
    <div
      class="flex justify-between items-center rounded-t-md bg-light-background/50 dark:bg-dark-background/50"
    >
      <div
        class="flex gap-2 items-center p-2 rounded-tl-md bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary"
      >
        <img
          :src="`/svg/${extension}.svg`"
          alt="Icono de HTML"
          class="w-3 h-3"
        />
        <h2 class="text-xs text-light-textPrimary dark:text-dark-textPrimary">
          {{ props.title }}
        </h2>
        <span class="text-xs text-light-textPrimary dark:text-dark-textPrimary"
          >x</span
        >
      </div>

      <div
        class="flex gap-2 items-center p-2 rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
        @click="copyCode(props.extension)"
      >
        <h2 class="text-xs text-light-textPrimary dark:text-dark-textPrimary">
          Copiar
        </h2>
        <svg
          class="w-3 h-3 stroke-light-textPrimary dark:stroke-dark-textPrimary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
          ></path>
          <path
            d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
          ></path>
        </svg>
      </div>
    </div>

    <code
      id="codeCanvas"
      class="flex flex-col max-h-[300px] min-h-[300px] overflow-y-auto p-4 text-sm rounded-b-md select-none bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary"
    >
    </code>
  </section>
</template>
